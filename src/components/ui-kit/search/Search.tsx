/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, {
  type ChangeEvent,
  type FC,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import styled from "styled-components";
import { ISearchProps } from "./Search.interface";
import { Typography } from "../typography/Typography";
import { Close, Cross, Search as SearchIcon } from "../../icons";

const StyledDeleteIcon = styled(Close)`
  cursor: pointer;
`;

const SearchInput = styled.input<{ bgColor?: string }>`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 100%;

  color: #2a3b89;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : "#f4f5f9")};
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 10px 14px;
  height: 36px;
  margin: 0;
  outline: none;
  box-sizing: border-box;
  &::placeholder {
    color: #8181a5;
  }
`;

const SearchButton = styled.button<{
  bgColor?: string;
}>`
  border: none;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : "#f4f5f9")};
  border-radius: 0 5px 5px 0;
  border-left: 1px solid #dbe3eb;
  padding: 10px 14px;
  width: 45px;
  height: 36px;
  box-sizing: border-box;

  svg {
    fill: #8181a5;
  }
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: #2a3b89;
    svg {
      fill: #ffffff;
    }
  }
`;

const LiveSearchButton = styled.button<{
  bgColor?: string;
  orderGenMobile?: boolean;
}>`
  border: none;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : "#f4f5f9")};
  border-radius: 0 5px 5px 0;
  border-left: 1px solid #dbe3eb;
  padding: 10px 14px;
  width: 45px;
  height: 36px;
  box-sizing: border-box;

  ${({ orderGenMobile }) => orderGenMobile && "border-left: none;"}

  svg {
    fill: #8181a5;
  }
`;

const DeleteButton = styled.button`
  border: none;
  background-color: #f4f5f9;
  border-radius: 0 5px 5px 0;

  padding: 10px 14px;

  width: 45px;
  height: 36px;

  box-sizing: border-box;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Results = styled.ul`
  position: absolute;
  width: 219px;
  margin-top: 7px;
  min-height: 39px;
  max-height: 132px;
  overflow: scroll;

  box-sizing: border-box;
  padding: 2px 0;
  background: #ffffff;
  border: 1px solid #dbe3eb;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
  border-radius: 5px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  cursor: pointer;
  &:hover {
    background-color: #f4f7f9;
  }
`;

const CategoryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CategoryTitle = styled(Typography)`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #2a3b89;
`;

const GreySpan = styled(CategoryTitle)`
  display: inline;
  color: #8181a5;
`;

export const Search: FC<ISearchProps> = ({
  onChangeHandler,
  placeholder,
  data,
  backgroundColor,
  isLive,
  className,
  orderGenMobile,
  onCrossHandler,
  value,
  ...rest
}) => {
  const [searchString, setSearchString] = useState("");
  const [displaySearch, setDisplaySearch] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const resultsRef = useRef(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value) {
      setSearchString(value);
    }
  }, [value]);

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (ref.current !== e.target && resultsRef.current !== e.target) {
        setShowResults(false);
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  const filtered = data?.filter((item) => {
    if (
      data &&
      searchString.length !== 0 &&
      item.toLowerCase().includes(searchString.toLowerCase())
    ) {
      return item;
    }
  });

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setDisplaySearch(false);
      onChangeHandler(searchString);
      setShowResults(false);
    }
  };

  const handleSearchString = (e: ChangeEvent<HTMLInputElement>) => {
    if (searchString.length !== e.target.value.length) {
      setDisplaySearch(true);
      setSearchString(e.target.value);
    } else {
      setSearchString(e.target.value);
    }
    setShowResults(true);
  };

  const handleLiveSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e.target.value);
    setSearchString(e.target.value);
  };

  const handleClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setDisplaySearch(false);
    onChangeHandler(searchString);
    setShowResults(false);
  };

  const handleClickDelete = () => {
    setSearchString("");
    setDisplaySearch(true);
    onChangeHandler("");
  };

  const onCrossHandlerMobile = () => {
    setSearchString("");
    onCrossHandler?.();
  };

  useMemo(() => {
    !displaySearch &&
      searchString.trim().length === 0 &&
      setDisplaySearch(true);
  }, [searchString, displaySearch]);

  const handleItemClick = (item: string) => () => {
    setDisplaySearch(true);
    setSearchString(item);
    setShowResults(false);
  };
  return (
    <Container {...rest} className={className}>
      {isLive || orderGenMobile ? (
        <>
          <SearchInput
            bgColor={backgroundColor}
            ref={ref}
            {...rest}
            placeholder={placeholder ?? "Search"}
            onChange={handleLiveSearch}
            value={searchString}
            autoFocus={orderGenMobile}
          />
          <LiveSearchButton
            bgColor={backgroundColor}
            orderGenMobile={orderGenMobile}
            onClick={onCrossHandlerMobile}
          >
            {orderGenMobile ? (
              <Cross style={{ cursor: "pointer" }} />
            ) : (
              <SearchIcon />
            )}
          </LiveSearchButton>
        </>
      ) : (
        <>
          <SearchInput
            bgColor={backgroundColor}
            ref={ref}
            {...rest}
            onKeyDown={handleSearchEnter}
            placeholder={placeholder ?? "Search"}
            onChange={handleSearchString}
            value={searchString}
          />
          {displaySearch ? (
            <SearchButton bgColor={backgroundColor} onClick={handleClickSearch}>
              <SearchIcon />
            </SearchButton>
          ) : (
            <DeleteButton>
              <StyledDeleteIcon onClick={handleClickDelete} />
            </DeleteButton>
          )}
        </>
      )}

      {filtered?.length && showResults && (
        <Results ref={resultsRef}>
          {filtered.map((item, index) => {
            return (
              <Category key={index} onClick={handleItemClick(item)}>
                <CategoryTitleWrapper>
                  <CategoryTitle>
                    {item.slice(
                      0,
                      item.lastIndexOf(searchString) + searchString.length
                    )}
                    <GreySpan>
                      {item.slice(
                        item.lastIndexOf(searchString) + searchString.length
                      )}
                    </GreySpan>
                  </CategoryTitle>
                </CategoryTitleWrapper>
              </Category>
            );
          })}
        </Results>
      )}
    </Container>
  );
};
