import React, { useMemo } from "react";
import styled from "styled-components";
import {
  Button,
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import Key from "../../../../../components/icons/Key";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../../constants/routes";
import { useApiKeysContext } from "../context/ApiKeysContextProvider";
import { APIKeysTable } from "./components/APIKeysTable";
// import { AdvancedSearch } from "../../../../../components/advanced-search/AdvancedSearch";
// import { getApiKeySearchConfig } from "./config/SearchConfig";
// import { ChangeType } from "../../../../../components/advanced-search/AdvancedSearch.interface";

import {
  NotificationTypes,
  useNotification,
} from "../../../../../hooks/useNotification";
import { useDeleteAPIKey } from "./hooks/useDeleteAPIKey";
import { useDialogManager } from "../../../../../context/DialogManager";
// import { usePolicyCheck } from "../../../hooks/usePolicyCheck";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewRow = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
`;

const ApiKeysContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #eeeeee;
  margin-top: 16px;
`;

const GenerateBtn = styled(Button)`
  display: flex;
  flex: 1;
`;

export const APIKeysList: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { loading, apiKeysData, setApiKeysFilters, refreshApiKeysData } =
    useApiKeysContext();
  const { showNotification } = useNotification();
  const { deleteAPIKey } = useDeleteAPIKey();
  const { showDialog } = useDialogManager();
  // const { checkAccessByPolicies } = usePolicyCheck();
  const keyGen = () => {
    navigate(AppRoutes.Private.Settings.API_KEYS_GENERATE);
  };

  // const searchConfig = useMemo(() => {
  //   return getApiKeySearchConfig([], [], []);
  // }, []);

  const handleSearch = (filters: Record<string, any>) => {
    console.warn(filters);
    setApiKeysFilters(filters);
  };

  const onDelete = async (id: string) => {
    await deleteAPIKey(id);
    showNotification("Successfully deleted", NotificationTypes.SUCCESS);
    refreshApiKeysData();
  };

  const onDeleteClick = (id: string) => {
    showDialog({
      title: "Delete API key",
      content: "Are you sure you want to delete this API key?",
      actions: [
        {
          type: "outline",
          text: "Cancel",
        },
        {
          type: "delete",
          text: "Delete",
          handler: () => {
            onDelete(id);
          },
        },
      ],
    });
  };

  return (
    <MainContainer>
      <Typography
        variant={TypographyVariant.HEADER1}
        style={{ color: "#556CB1" }}
      >
        API
      </Typography>
      <ApiKeysContainer>
        <ViewRow>
          <Typography
            variant={TypographyVariant.HEADER2}
            style={{ color: "#556CB1", flex: 4 }}
          >
            API keys
          </Typography>
          {
            // checkAccessByPolicies(
            //   [Policies.API_KEY.ADMIN_ACCESS],
            //   [Policies.API_KEY.CREATE_API_KEYS]
            // )
            true && (
              <GenerateBtn leftIcon={<Key />} onClick={keyGen}>
                Generate API keys
              </GenerateBtn>
            )
          }
        </ViewRow>
        <Line />

        {/* <AdvancedSearch
          config={searchConfig}
          onChange={handleSearch}
          changeType={ChangeType.ON_CHANGE}
        /> */}
        <APIKeysTable
          data={apiKeysData}
          handleDelete={onDeleteClick}
          loading={loading}
        />
      </ApiKeysContainer>
    </MainContainer>
  );
};
