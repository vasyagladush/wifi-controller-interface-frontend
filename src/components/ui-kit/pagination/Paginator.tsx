import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowLeftGrey } from "../../icons";
import SelectOptions from "./components/SelectOptions";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #6c6c8a;

  margin-top: 10px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
`;

const MetaText = styled.div`
  margin-right: 10px;
  color: #8181a5;
`;

const Pages = styled.div`
  margin: 0 10px;
  display: flex;
  gap: 1px;
  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const PageButton = styled.button<{ active?: boolean }>`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  min-width: 23px;
  height: 23px;
  color: ${({ active }) => (active ? "#2a3b89" : "#8181A5")};
  background: ${({ active }) => (active ? "#DBE3EB" : "none")};
  border-radius: 3px;

  :hover {
    background-color: #dbe3eb;
  }
`;

const Dots = styled.button`
  border: none;
  cursor: initial;
  min-width: 23px;
  height: 23px;
  background-color: #fff;
  border-radius: 3px;
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  background: #ffffff;
  display: flex;
  align-items: center;
  border: 1px solid #dbe3eb;
  box-sizing: border-box;
  box-shadow: 0 3px 11px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 13px;
  line-height: 26px;

  color: ${({ disabled }) => (disabled ? "#8181A5" : "#2a3b89")};
  padding: 3px 17px;
  cursor: pointer;

  :hover {
    ${({ disabled }) => (!disabled ? "background-color: #f4f7f9;" : "")}
  }

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
  `}
`;

const PageSelectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

const LeftArrow = styled(ArrowLeftGrey)`
  margin-right: 5px;
  color: inherit;
`;

const RightArrow = styled(ArrowLeftGrey)`
  transform: rotate(180deg);
  color: inherit;
  margin-left: 5px;
`;

const ButtonsAndPages = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    margin-top: 10px;
  }
`;

interface PaginatorProps {
  totalDocs: number;
  currentPage: number;
  perPage: number;
  onPaginationChange: (pageValue: number, limitValue: number) => void;
  className?: string;
  hideRowPerPageAction?: boolean;
}

export const Paginator: FC<PaginatorProps> = ({
  totalDocs,
  currentPage,
  perPage,
  onPaginationChange,
  className,
  hideRowPerPageAction,
}) => {
  const [displayedPages, setDisplayedPages] = useState<number[]>([]);

  const totalPages = Math.ceil(totalDocs / perPage);

  const handlePageChange = (page: number) => {
    onPaginationChange(page, perPage);
  };

  useEffect(() => {
    const updateDisplayedPages = (currentPage: number) => {
      let pages: number[] = [];

      if (totalPages <= 7) {
        pages = Array.from(Array(totalPages), (_, i) => i + 1);
      } else if (currentPage <= 4) {
        pages = [1, 2, 3, 4, 5, 0, totalPages];
      } else if (currentPage >= totalPages - 3) {
        pages = [
          1,
          0,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          1,
          0,
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          0,
          totalPages,
        ];
      }

      setDisplayedPages(pages);
    };

    updateDisplayedPages(currentPage);
  }, [totalDocs, perPage, currentPage]);

  return (
    <Container className={className}>
      {!hideRowPerPageAction ? (
        <Meta>
          <MetaText>Rows per page:</MetaText>
          <SelectOptions
            value={perPage}
            onPaginationChange={onPaginationChange}
          />
        </Meta>
      ) : (
        <div></div>
      )}
      <PageSelectionWrapper>
        <MetaText>
          Results: {currentPage * perPage - perPage + 1} -{" "}
          {currentPage * perPage > totalDocs
            ? totalDocs
            : currentPage * perPage}{" "}
          of {totalDocs}
        </MetaText>
        <ButtonsAndPages>
          <PaginationButton
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            <LeftArrow /> Prev
          </PaginationButton>
          <Pages>
            {displayedPages.map((page, index) => {
              if (page === 0) {
                return <Dots key={index}>...</Dots>;
              } else {
                return (
                  <PageButton
                    key={index}
                    active={page === currentPage}
                    onClick={() => {
                      handlePageChange(page);
                    }}
                  >
                    {page}
                  </PageButton>
                );
              }
            })}
          </Pages>
          <PaginationButton
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage === totalPages || totalDocs === 0}
          >
            Next <RightArrow />
          </PaginationButton>
        </ButtonsAndPages>
      </PageSelectionWrapper>
    </Container>
  );
};
