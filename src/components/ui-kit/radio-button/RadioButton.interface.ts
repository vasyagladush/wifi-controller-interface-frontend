import { type ReactElement } from "react";

export interface RadioButtonProps {
  labelComponent?: ReactElement | string;
  inputProps?: Record<string, any>;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
}
