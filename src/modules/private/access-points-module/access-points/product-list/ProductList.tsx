import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../../constants/routes";
import { AnimateAppearanceWrapper } from "../../../../../components/animate-appearence/AnimateAppearanceWrapper";
import { ProductsFilters, useProductsList } from "./hooks/useProductsList";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";
import {
  Button,
  ButtonVariant,
  PageTitle,
} from "../../../../../components/ui-kit";
// import { AdvancedSearch } from "../../../../../components/advanced-search/AdvancedSearch";
// import { productsSearchConfig } from "./config/SearchConfig";
// import { ChangeType } from "../../../../../components/advanced-search/AdvancedSearch.interface";
import { usePagination } from "../../../../../hooks/usePagination";
import { BiExport, BiImport, Plus } from "../../../../../components/icons";
import { useTableContext } from "../../../../../components/ui-kit/ReactTable/context/TableContext";

// import { usePolicyCheck } from "../../../hooks/usePolicyCheck";
import { useModalManager } from "../../../../../context/ModalManager";
import { ImportProductsModal } from "../components/modals/import";
// import { useCompanyContext } from "../../../../../context/CompanyContextProvider";
import api from "../../../../../util/api";
// import { ProductVariantsTableTree } from "../../tables/ProductVariantsTableTree";
// import { makeCorrectFormOfProducts } from "../../../../../util/data-utils";
// import {
//   LimitTypesEnum,
//   ProductTypeForTables,
// } from "../../../../../util/types";
import { ProductsListBottomMenu } from "../components/ProductsListBottomMenu";
// import { useLimitsCheck } from "../../../hooks/useLimitsCheck";
// import SubscriptionAlertBanner from "../../../subscription-alert/components/SubscriptionAlertBanner";
import { useDialogManager } from "../../../../../context/DialogManager";

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TopRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
`;

const TabsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 0px;
`;

// const StyledAdvancedSearch = styled(AdvancedSearch)`
//   margin-top: 0;
// `;

export const ProductsList = () => {
  const { showDialog } = useDialogManager();
  const [filters, setFilters] = useState<ProductsFilters>();
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { page, limit, onPaginationChange } = usePagination();
  const { sortConfig } = useTableContext();
  // const { checkAccessByPolicies } = usePolicyCheck();
  const { addModal, removeLastModal } = useModalManager();
  // const { company } = useCompanyContext();

  const [showLimitsBanner, setShowLimitsBanner] = useState(false);

  const [loading1, setLoading1] = useState<boolean>(false);

  const getCSV = async () => {
    setLoading1(true);
    const result = {} as any;
    // await api.getProductsCSV(
    //   filters,
    //   sortConfig,
    //   filters?.inventoryStatus
    // );
    // const blob = await result.blob();
    // const a = document.createElement("a");
    // document.body.appendChild(a);
    // const url = window.URL.createObjectURL(blob);
    // a.href = url;
    // a.download = `${
    //   company?.tradingName ?? company?.name ?? "company"
    // }_products.csv`;
    // a.click();
    // window.URL.revokeObjectURL(url);
    setLoading1(false);
  };
  const { productsData, totalDocs, loading, error, refresh } = useProductsList(
    page,
    limit,
    filters,
    filters?.inventoryStatus,
    sortConfig
  );

  const mappedProducts = useMemo(() => {
    return productsData;
  }, [productsData]);

  const showImportProductsModal = () => {
    addModal(<ImportProductsModal handleClose={removeLastModal} />);
  };
  const onFiltersChange = (nextFilters: Record<string, any>) => {
    setFilters(nextFilters);
  };

  const onCrossClick = () => {
    setSelectedProducts([]);
  };

  useEffect(() => {
    if (error) showNotification(error, NotificationTypes.DANGER);
  }, [error]);

  useEffect(() => {
    const selectedProductIds = selectedProducts.map((product) => product._id);
    const updatedSelectedProducts = mappedProducts.filter((product) =>
      selectedProductIds.includes(product._id)
    );
    setSelectedProducts(updatedSelectedProducts);
  }, [mappedProducts]);

  return (
    <AnimateAppearanceWrapper>
      <MainContainer>
        <TopRowContainer>
          <div style={{ flexDirection: "column", marginRight: "auto" }}>
            <PageTitle
              title="Access points"
              subtitle="Add, edit or delete access points"
            />
          </div>
          {true && (
            <Button
              leftIcon={<BiImport />}
              variant={ButtonVariant.OUTLINED}
              onClick={async () => {
                showImportProductsModal();
              }}
            >
              Import
            </Button>
          )}
          <Button
            leftIcon={<BiExport />}
            variant={ButtonVariant.OUTLINED}
            onClick={getCSV}
            loading={loading1}
          >
            Export
          </Button>
          {true && (
            <Button
              leftIcon={<Plus />}
              onClick={async () => {
                navigate(AppRoutes.Private.AccessPoints.AP_CREATE);
              }}
            >
              Add AP
            </Button>
          )}
        </TopRowContainer>
        <TabsContainer>
          {/* <StyledAdvancedSearch
            config={productsSearchConfig}
            onChange={onFiltersChange}
            changeType={ChangeType.ON_CHANGE}
            isLive
          /> */}
          {/* <ProductVariantsTableTree
            refreshProducts={refresh}
            data={mappedProducts}
            pagination={{ page, limit, totalDocs, onPaginationChange }}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            loading={loading}
            appliedFilters={filters}
          /> */}
          {!!selectedProducts.length && (
            <ProductsListBottomMenu
              products={selectedProducts}
              onCrossButton={onCrossClick}
              refreshProducts={refresh}
            />
          )}
        </TabsContainer>
      </MainContainer>
    </AnimateAppearanceWrapper>
  );
};
