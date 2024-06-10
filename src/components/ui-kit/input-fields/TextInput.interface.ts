import { InputHTMLAttributes } from "react";
import { RefCallBack } from "react-hook-form";

export enum TextInputErrorVariant {
  ERROR = "error",
  SUCCESS = "success",
  ACTIVE = "active",
  DEFAULT = "default",
}

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: () => JSX.Element;
  leftIcon?: () => JSX.Element;
  variant?: TextInputErrorVariant;
  mask?: string | Array<string | RegExp>;
  currency?: boolean;
  label?: string | JSX.Element;
  error?: string;
  disableErrorMessage?: boolean;
  ref?: RefCallBack;
  requiredDateInput?: string;
  datePicker?: boolean;
  handleOpenPicker?: any;
  clearColorInput?: (e: React.MouseEvent<SVGSVGElement>) => void;
}
