import { FC, ReactNode } from "react";

export interface ICollapsibleProps {
  children: ReactNode | ReactNode[];
  defaultOpen?: boolean;
  Header?: FC<{
    label?: string;
    open?: boolean;
  }>;
  label: string;
}
