import { ReactNode } from "react";

export interface DateTableCellProps {
  date?: string;
  format?: string;
  className?: string;
}

// export interface CreateEntityTableCellProps {
//   createdByEntity: CreateEntities;

//   createdBy: ApiKey | User;

//   className?: string;
// }

export interface HiddenDataTableCellProps {
  data: ReactNode;
}

export interface AnyUserCellProps {
  name: string;

  username: string;

  avatarUrl?: string;

  className?: string;
}

export interface AmountCellProps {
  amount: string;

  direction: "incoming" | "outgoing";
}
