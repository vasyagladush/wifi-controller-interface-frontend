/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { Fragment, useMemo } from "react";
import styled from "styled-components";
import { Control } from "react-hook-form";
import { NewProductFormValues } from "../types";
import {
  LoadingBar,
  Spinner,
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { Filter, ImageIcon } from "../../../../../../components/icons";
import { ProductVariantApiType } from "../../../../../../util/types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useModalManager } from "../../../../../../context/ModalManager";
import VariantsFilterModal from "./modal/VariantFiltersModal";
import { AccessPointsFilters } from "../../access-points-list/hooks/useAccessPointsList";

const RightPanelContainer = styled.div`
  max-height: 1995px;
  min-height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 10px;

  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px 15px 30px;
  border-bottom: 1px solid #eee;
`;

const VariantCard = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 30px;

  background-color: ${(props) => (props.selected ? "#f2f4ff" : "#fff")};
  cursor: pointer;
`;
export interface IRightPanelProps {
  control: Control<NewProductFormValues>;
  currentCategories: Array<{ category?: string }>;
  append: () => void;
  remove: (index: number) => void;
}

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-right: 10px;
`;

const Label = styled(Typography)``;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const NoImageBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 5px;
  background-color: #fff;
  z-index: 2;
  svg {
    scale: 2;
  }
`;

const ScrollableArea = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2cd19d80;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #eeeeee;
  }
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ScrollSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledFilterIcon = styled(Filter)`
  cursor: pointer;

  /* margin-left: 5px; */
`;

const StyledLoadingBar = styled(LoadingBar)`
  margin-top: 0px;
  margin-bottom: 1px;
`;

const InfiniteScrollContent = styled.div``;

const LabelAndFilterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const GreenDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #6CB155;
  position: absolute;
  top: 0;
  left: 10px;
`;

const NoVariants = styled(Typography)`
  padding: 30px;
`;

const Clear = styled(Typography)`
  margin-left: 5px;
  cursor: pointer;
`;

interface VariantsListProps {
  variantsListItems?: ProductVariantApiType[];
  selectedVariantId?: string;
  handleNextPage: () => void;
  hasNextPage?: boolean;
  setSelectedVariant: (variant: ProductVariantApiType) => void;
  variantListLoading: boolean;
  setFilters: (val: Partial<AccessPointsFilters>) => void;
  filterValues: Partial<AccessPointsFilters>;
  handleFiltersClear: () => void;
}

const VariantsList: React.FunctionComponent<VariantsListProps> = ({
  variantsListItems,
  selectedVariantId,
  handleNextPage,
  hasNextPage,
  setSelectedVariant,
  variantListLoading,
  setFilters,
  filterValues,
  handleFiltersClear,
}) => {
  const { addModal } = useModalManager();
  const onFiltersChange = (nextFilters: Record<string, any>) => {
    setFilters(nextFilters);
  };

  const hasFilters = useMemo(() => {
    return !!Object.values(filterValues ?? []).filter((el) => el !== "").length;
  }, [filterValues]);

  const handleShowFilters = () => {
    addModal(
      <VariantsFilterModal
        onFiltersChange={onFiltersChange}
        filterValues={filterValues}
      />
    );
  };

  return (
    <RightPanelContainer>
      <Header>
        <LabelAndFilterBtn>
          <Typography
            variant={TypographyVariant.HEADER2}
            style={{ color: "#556CB1" }}
          >
            Variants
          </Typography>
          <FilterIconWrapper>
            {hasFilters && <GreenDot />}
            <StyledFilterIcon onClick={handleShowFilters} />
            {hasFilters && (
              <Clear
                onClick={handleFiltersClear}
                variant={TypographyVariant.CAPTION}
              >
                Clear
              </Clear>
            )}
          </FilterIconWrapper>
        </LabelAndFilterBtn>
      </Header>
      <ScrollableArea id="scrollableDiv2">
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={variantsListItems?.length || 0}
          next={handleNextPage}
          hasMore={hasNextPage ?? false}
          loader={
            <ScrollSpinnerWrapper>
              <Spinner />
            </ScrollSpinnerWrapper>
          }
          scrollableTarget="scrollableDiv2"
        >
          <StyledLoadingBar loading={variantListLoading} />
          <InfiniteScrollContent>
            {variantsListItems?.length ? (
              variantsListItems?.map((el) => {
                return (
                  <Fragment key={el._id}>
                    <VariantCard
                      selected={el._id === selectedVariantId}
                      onClick={() => {
                        setSelectedVariant(el);
                      }}
                    >
                      <ImageWrapper>
                        {el.images?.length ? (
                          <Img src={el.images[0].url} />
                        ) : (
                          <NoImageBg>
                            <ImageIcon />
                          </NoImageBg>
                        )}
                      </ImageWrapper>

                      {el.productOptionConfig.map((option: any, index: any) => {
                        return (
                          <Label
                            key={option.option._id}
                            variant={TypographyVariant.BODY4}
                          >
                            {index !== 0 && "/"}
                            &nbsp;{option.optionValue}&nbsp;
                          </Label>
                        );
                      })}
                    </VariantCard>
                  </Fragment>
                );
              })
            ) : !hasFilters ? (
              <VariantCard selected={true}>
                <ImageWrapper>
                  <NoImageBg>
                    <ImageIcon />
                  </NoImageBg>
                </ImageWrapper>
                <Label variant={TypographyVariant.BODY4}>Default</Label>
              </VariantCard>
            ) : (
              <NoVariants variant={TypographyVariant.BODY2}>
                No variants found
              </NoVariants>
            )}
          </InfiniteScrollContent>
        </InfiniteScroll>
      </ScrollableArea>
    </RightPanelContainer>
  );
};
export default VariantsList;
