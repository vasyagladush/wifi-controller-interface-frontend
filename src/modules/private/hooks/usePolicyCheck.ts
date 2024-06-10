// import { usePoliciesContext } from "../../../context/PoliciesContextProvider";
// import { Policies } from "@fena/toolkit-types";

// export const usePolicyCheck = () => {
//   const { policies } = usePoliciesContext();

//   const checkAccessByPolicies = (
//     rootPolicies: Policies.PolicyKeys[],
//     requiredPolicies: Policies.PolicyKeys[]
//   ) => {
//     let root = false;
//     rootPolicies.forEach((rootPol) => {
//       if (policies.get(rootPol)) {
//         root = true;
//       }
//     });

//     const collected = requiredPolicies.reduce((acc, current) => {
//       if (policies.get(current)) {
//         return acc;
//       } else {
//         acc = false;
//         return acc;
//       }
//     }, true);

//     return root || collected;
//   };

//   return { checkAccessByPolicies };
// };
export {};