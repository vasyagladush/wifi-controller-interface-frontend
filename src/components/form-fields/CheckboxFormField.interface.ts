import { InputHTMLAttributes, ReactNode } from "react";
import { Control } from "react-hook-form";

export interface ICheckboxFormFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control?: Control<any>;
  rightIcon?: () => JSX.Element;
  leftIcon?: () => JSX.Element;
  label?: ReactNode | ReactNode[];
  mask?: string;
  className?: string;
}
