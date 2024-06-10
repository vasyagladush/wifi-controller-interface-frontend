// import {
//   createContext,
//   FC,
//   ReactElement,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { useRolesList } from "../roles/hooks/useRolesList";
// import { ExtendedRoleApiType } from "../../../../util/types";

// interface IRoleContext {
//   roles: ExtendedRoleApiType[];
//   updateRoles: (list: ExtendedRoleApiType[]) => void;
//   refresh: () => void;
// }

// const RolesContext = createContext<IRoleContext>({
//   roles: [],
//   updateRoles: () => null,
//   refresh: () => null,
// });

// export const RolesContextProvider: FC<{ children: ReactElement }> = ({
//   children,
// }) => {
//   const { rolesData, getRolesList } = useRolesList();
//   const [roles, setRoles] = useState<ExtendedRoleApiType[]>([]);

//   useEffect(() => {
//     if (rolesData.length > 0) setRoles(rolesData);
//   }, [rolesData]);

//   const handleRolesUpdate = (data: ExtendedRoleApiType[]) => {
//     setRoles(data);
//   };

//   const refresh = () => {
//     getRolesList();
//   };

//   return (
//     <RolesContext.Provider
//       value={{
//         roles,
//         updateRoles: handleRolesUpdate,
//         refresh,
//       }}
//     >
//       {children}
//     </RolesContext.Provider>
//   );
// };

// export const useRolesContext = () => {
//   return useContext(RolesContext);
// };
export {};
