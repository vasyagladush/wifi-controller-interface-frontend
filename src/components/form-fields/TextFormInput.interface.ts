import { type InputHTMLAttributes } from "react";
import { type RefCallBack, type Control, type Noop } from "react-hook-form";

export enum TextInputWidth {
  SMALL = "s",
  MEDIUM = "m",
  LARGE = "l",
}

export interface TextFormFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control?: Control<any>;
  rightIcon?: () => JSX.Element;
  leftIcon?: () => JSX.Element;
  label?: string | JSX.Element;
  mask?: string;
  currency?: boolean;
  ref?: RefCallBack;
  onBlur?: Noop;
  className?: string;
  successBorder?: boolean;
  width?: TextInputWidth;
  disableErrorMessage?: boolean;
  colorInput?: boolean;
  clearColorInput?: (e: React.MouseEvent<SVGSVGElement>) => void;
}
