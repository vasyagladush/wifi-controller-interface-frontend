// import {
//   ISearchFieldConfig,
//   SearchFieldType,
// } from "../../../../../../components/advanced-search/AdvancedSearch.interface";
// import {
//   ApiKeyApiType,
//   RoleApiType,
//   UserApiType,
// } from "../../../../../../util/types";

// /**
//  * We need this function here to propagate roles and team members
//  * @param roleList - a list of roles to use in the dropdown
//  * @param teamMembersList - a list of team members to use in the dropdown
//  */
// export const getApiKeySearchConfig: (
//   roleList: RoleApiType[],
//   teamMembersList: UserApiType[],
//   apiKeysList: ApiKeyApiType[]
// ) => ISearchFieldConfig[] = (roleList, teamMembersList, apiKeysList) => {
//   // const roleOptions = roleList.map((r) => ({ label: r.name, value: r._id }));
//   const teamOptions = teamMembersList.map((t) => ({
//     label: `${t.firstName ?? ""} ${t.lastName ?? ""}`,
//     value: t._id,
//     avatar: t.avatar,
//   }));
//   const apiKeyOptions = apiKeysList.map((k) => ({
//     label: k.name,
//     value: k._id,
//   }));
//   return [
//     {
//       type: SearchFieldType.CREATED_BY_DROPDOWN,
//       label: "Created by",
//       key: "createdBy",
//       dropdownValues: [...teamOptions, ...apiKeyOptions],
//     },
//     {
//       type: SearchFieldType.DROPDOWN,
//       label: "Status",
//       key: "status",
//       dropdownValues: [
//         { label: "All", value: "" },
//         { label: "Enabled", value: "enabled" },
//         { label: "Disabled", value: "disabled" },
//       ],
//     },
//   ];
// };

// export const apiKeySearchConfig: ISearchFieldConfig[] = [];
export {};
