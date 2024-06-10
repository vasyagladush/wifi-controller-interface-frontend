export interface ISearchProps {
  data?: string[];
  placeholder?: string;
  onChangeHandler: (value: string) => void;
  backgroundColor?: string;
  isLive?: boolean;
  className?: string;
  orderGenMobile?: boolean;
  onCrossHandler?: () => void;
  value?: string;
}

// export interface ILiveSearchCustomerList {
//   placeholder?: string;
//   setCustomerFunction: (customerData?: CustomerApiType) => Promise<void>;
//   backgroundColor?: string;
// }

// export interface ILiveSearchUsers {
//   placeholder?: string;
//   setUserFunction: (userData: TeamMemberType) => void;
//   selectedUsers?: TeamMemberType[];
//   backgroundColor?: string;
//   className?: string;
// }
