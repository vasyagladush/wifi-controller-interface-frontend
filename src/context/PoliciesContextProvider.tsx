export {}
// import {
//   createContext,
//   Dispatch,
//   FC,
//   ReactElement,
//   SetStateAction,
//   useContext,
//   useState,
// } from "react";

// export const defaultValues = new Map();

// interface IPoliciesContext {
//   policies: Map<string, any>;
//   setPolicies: Dispatch<SetStateAction<Map<string, any>>>;
//   clearPolicies: () => void;
// }

// const PoliciesContext = createContext<IPoliciesContext>({
//   policies: defaultValues,
//   setPolicies: () => null,
//   clearPolicies: () => null,
// });

// export const PoliciesContextProvider: FC<{ children: ReactElement }> = ({
//   children,
// }) => {
//   const [policies, setPolicies] = useState(defaultValues);

//   const handleClearPolicies = () => {
//     setPolicies(defaultValues);
//   };

//   return (
//     <PoliciesContext.Provider
//       value={{
//         policies,
//         setPolicies,
//         clearPolicies: handleClearPolicies,
//       }}
//     >
//       {children}
//     </PoliciesContext.Provider>
//   );
// };

// export const usePoliciesContext = () => {
//   return useContext(PoliciesContext);
// };
