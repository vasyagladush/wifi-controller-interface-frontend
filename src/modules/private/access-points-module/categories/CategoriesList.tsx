import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { Typography, TypographyVariant } from "../../../../components/ui-kit";
import { DeleteCategoryModal, EditCategoryModal } from "./components";
import { useModalManager } from "../../../../context/ModalManager";
import { AnimateAppearanceWrapper } from "../../../../components/animate-appearence/AnimateAppearanceWrapper";
import { CategoryTreeTable, EditData } from "./components/table";
import { useCategoriesContext } from "../context/CategoriesContextProvider";
import { useTableContext } from "../../../../components/ui-kit/ReactTable/context/TableContext";
// import { AdvancedSearch } from "../../../../components/advanced-search/AdvancedSearch";
// import { ChangeType } from "../../../../components/advanced-search/AdvancedSearch.interface";
// import { categoriesSearchConfig } from "./config/SearchConfig";

const Wrapper = styled.section``;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const TableCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  flex-basis: calc(70% - 250px + 2rem * 2);
  flex-shrink: 1;
  flex-grow: 1;
  @media (max-width: 1200px) {
    flex-basis: 100%;
  }
`;

const Title = styled(Typography)`
  margin-bottom: 5px;
`;

const StyledCategoryTreeTable = styled(CategoryTreeTable)`
  padding-top: 30px;
  margin-bottom: 10px;
`;

// const StyledAdvancedSearch = styled(AdvancedSearch)`
//   margin: 0;
// `;

export interface DataForDelition {
  id: string;
  productsCount: string;
  name: string;
}

export const CategoriesList: React.FunctionComponent = () => {
  const { addModal } = useModalManager();
  const { removeLastModal } = useModalManager();
  const {
    categories,
    refreshCategories,
    setCategoriesFilters,
    onSortChange,
    loading,
    totalDocs,
    limit,
    page,
    onPaginationChange,
  } = useCategoriesContext();
  const { sortConfig } = useTableContext();

  const mappedCategories = useMemo(() => {
    return categories
      .map((el) => ({
        ...el,
        subRows: el.subCategories ?? [{}],
      }))
      .filter((el) => el.parent === null);
  }, [categories]);

  useEffect(() => {
    refreshCategories();
  }, []);

  useEffect(() => {
    onSortChange(sortConfig);
  }, [sortConfig]);

  const handleEdit = async ({
    id,
    name,
    description,
    logoUrl,
    parent,
    isSubCategory,
  }: EditData) => {
    addModal(
      <EditCategoryModal
        data={{ id, name, description, logoUrl, parent, isSubCategory }}
        handleClose={() => {
          removeLastModal();
          refreshCategories();
        }}
      />
    );
  };

  const handleDelete = async (
    id: string,
    productsCount: number,
    name: string,
    depth: number
  ) => {
    addModal(
      <DeleteCategoryModal
        dataForDelition={{ id, productsCount, name, depth }}
        handleClose={() => {
          removeLastModal();
          refreshCategories();
        }}
      />
    );
  };

  const onFiltersChange = (nextFilters: Record<string, any>) => {
    setCategoriesFilters({
      ...nextFilters,
    });
  };

  return (
    <AnimateAppearanceWrapper>
      <Wrapper>
        <Title variant={TypographyVariant.HEADER1}>Categories</Title>
        <Typography variant={TypographyVariant.BODY2}>
          Add, edit or delete a category
        </Typography>
        <Content>
          <TableCard>
            {/* <StyledAdvancedSearch
              config={categoriesSearchConfig}
              onChange={onFiltersChange}
              changeType={ChangeType.ON_CHANGE}
            /> */}

            <StyledCategoryTreeTable
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              pagination={{ page, totalDocs, limit, onPaginationChange }}
              handleTableUpdate={() => {
                refreshCategories();
              }}
              data={mappedCategories}
              loading={loading}
            />
          </TableCard>
        </Content>
      </Wrapper>
    </AnimateAppearanceWrapper>
  );
};
