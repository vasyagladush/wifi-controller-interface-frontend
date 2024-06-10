import { ReactNode } from "react";

export interface CheckboxProps {
  checked?: boolean;
  label?: ReactNode | ReactNode[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  error?: string;
}
