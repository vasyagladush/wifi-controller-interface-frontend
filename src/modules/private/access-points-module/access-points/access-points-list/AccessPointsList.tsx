import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AnimateAppearanceWrapper } from "../../../../../components/animate-appearence/AnimateAppearanceWrapper";
import {
  AccessPointsFilters,
  useAccessPointsList,
} from "./hooks/useAccessPointsList";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";
import { PageTitle } from "../../../../../components/ui-kit";
import { usePagination } from "../../../../../hooks/usePagination";
import { useTableContext } from "../../../../../components/ui-kit/ReactTable/context/TableContext";
import { useDialogManager } from "../../../../../context/DialogManager";
import { AccessPointsTableTree } from "../../tables/AccessPointsTableTree";
import { makeCorrectFormOfAccessPointsForTables } from "../../../../../util/data-utils";

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
  border-radius: 10px;
`;

export const AccessPointsList = () => {
  const { showDialog } = useDialogManager();
  const [filters, setFilters] = useState<AccessPointsFilters>();
  const [selectedAccessPoints, setSelectedAccessPoints] = useState<any[]>([]);

  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { page, limit, onPaginationChange } = usePagination();
  const { sortConfig } = useTableContext();

  const { accessPointsData, totalDocs, loading, error, refresh } =
    useAccessPointsList(page, limit, filters);

  const mappedAccessPoints = useMemo(() => {
    return makeCorrectFormOfAccessPointsForTables(accessPointsData);
  }, [accessPointsData]);

  const onFiltersChange = (nextFilters: Record<string, any>) => {
    setFilters(nextFilters);
  };

  const onCrossClick = () => {
    setSelectedAccessPoints([]);
  };

  useEffect(() => {
    if (error) showNotification(error, NotificationTypes.DANGER);
  }, [error]);

  useEffect(() => {
    const selectedProductIds = selectedAccessPoints.map(
      (product) => product._id
    );
    const updatedSelectedProducts = mappedAccessPoints.filter((ap) =>
      selectedProductIds.includes(ap.id)
    );
    setSelectedAccessPoints(updatedSelectedProducts);
  }, [mappedAccessPoints]);

  return (
    <AnimateAppearanceWrapper>
      <MainContainer>
        <TopRowContainer>
          <div style={{ flexDirection: "column", marginRight: "auto" }}>
            <PageTitle title="Access points" subtitle="Edit access points" />
          </div>
          {/* {true && (
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
          </Button> */}
          {/* {true && (
            <Button  const { addModal, removeLastModal } = useModalManager();
              leftIcon={<Plus />}
              onClick={async () => {
                navigate(AppRoutes.Private.AccessPoints.AP_CREATE);
              }}
            >
              Add AP
            </Button>
          )} */}
        </TopRowContainer>
        <TabsContainer>
          {/* <StyledAdvancedSearch
            config={productsSearchConfig}
            onChange={onFiltersChange}
            changeType={ChangeType.ON_CHANGE}
            isLive
          /> */}
          <AccessPointsTableTree
            refreshAccessPoints={refresh}
            data={mappedAccessPoints}
            pagination={{ page, limit, totalDocs, onPaginationChange }}
            loading={loading}
            appliedFilters={filters}
          />
        </TabsContainer>
      </MainContainer>
    </AnimateAppearanceWrapper>
  );
};
