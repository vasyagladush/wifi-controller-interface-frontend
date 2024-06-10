import { InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface TextFormFieldProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  control?: Control<any>;
  icon?: () => JSX.Element;
  label?: string | JSX.Element;
  className?: string;
  rows?: number;
}
