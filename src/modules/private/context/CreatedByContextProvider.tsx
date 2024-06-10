// import { AccountingSoftware } from "@fena/toolkit-types";
// import {
//   createContext,
//   FC,
//   ReactElement,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import {
//   ApiKeyApiType,
//   ExternalIntegrationApiType,
//   TeamMemberType,
// } from "../../../util/types";
// import { useGetApiKeys } from "../hooks/useGetApiKeys";
// import { useGetAccountingIntegrations } from "../settings-module/integrations/accounting/hooks/useGetAccountingIntegrations";
// import { useListIntegrations } from "../settings-module/integrations/e-commerce/hooks/useListIntegrations";
// import { useGetTeamMembers } from "../settings-module/team/hooks/useGetTeamMembers";

// interface ICreatedByContext {
//   apiKeysData: ApiKeyApiType[];
//   teamMembersData: TeamMemberType[];
//   integrationsData: ExternalIntegrationApiType[];
//   accountingIntegrationsData: Array<AccountingSoftware & { _id: string }>;
//   loading: boolean;
//   refreshAllData: () => void;
// }

// const CreatedByContext = createContext<ICreatedByContext>({
//   apiKeysData: [],
//   teamMembersData: [],
//   integrationsData: [],
//   accountingIntegrationsData: [],
//   loading: false,
//   refreshAllData: () => null,
// });

// export const CreatedByContextProvider: FC<{ children: ReactElement }> = ({
//   children,
// }) => {
//   const {
//     data: apiKeysResult,
//     loading: apiKeysLoading,
//     refresh: refreshApiKeys,
//   } = useGetApiKeys();
//   const {
//     data: teamMembersResult,
//     loading: teamMembersLoading,
//     refresh: refreshTeamMembers,
//   } = useGetTeamMembers();

//   const {
//     data: integrationsResult,
//     loading: integrationsLoading,
//     refresh: refreshListIntegratons,
//   } = useListIntegrations();
//   const { accountingIntegrations, refresh: refreshAccountingIntegrations } =
//     useGetAccountingIntegrations();
//   const [apiKeysData, setApiKeysData] = useState<ApiKeyApiType[]>([]);
//   const [teamMembersData, setTeamMembersData] = useState<TeamMemberType[]>([]);
//   const [integrationsData, setIntegrationsData] = useState<
//     ExternalIntegrationApiType[]
//   >([]);
//   const [accountingIntegrationsData, setAccountingIntegrationsData] = useState<
//     Array<AccountingSoftware & { _id: string }>
//   >([]);

//   useEffect(() => {
//     if (apiKeysResult?.length > 0) setApiKeysData(apiKeysResult);
//   }, [apiKeysResult]);

//   useEffect(() => {
//     if (teamMembersResult?.length > 0) setTeamMembersData(teamMembersResult);
//   }, [teamMembersResult]);

//   useEffect(() => {
//     if (integrationsResult?.length > 0) setIntegrationsData(integrationsResult);
//   }, [integrationsResult]);

//   useEffect(() => {
//     if (accountingIntegrations?.length > 0)
//       setAccountingIntegrationsData(accountingIntegrations);
//   }, [accountingIntegrations]);

//   const refreshAllData = () => {
//     refreshApiKeys();
//     refreshTeamMembers();
//     refreshListIntegratons();
//     refreshAccountingIntegrations();
//   };

//   return (
//     <CreatedByContext.Provider
//       value={{
//         apiKeysData,
//         teamMembersData,
//         integrationsData,
//         accountingIntegrationsData,
//         loading: apiKeysLoading || teamMembersLoading || integrationsLoading,
//         refreshAllData,
//       }}
//     >
//       {children}
//     </CreatedByContext.Provider>
//   );
// };

// export const useCreatedByContext = () => {
//   return useContext(CreatedByContext);
// };
export {};