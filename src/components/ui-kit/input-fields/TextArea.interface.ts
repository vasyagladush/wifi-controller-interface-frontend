import { InputHTMLAttributes } from "react";

export enum TextAreaErrorVariant {
  ERROR = "error",
  SUCCESS = "success",
  ACTIVE = "active",
  DEFAULT = "default",
}

export interface WrapperTextAreaProps {
  variant?: TextAreaErrorVariant;
  disabled?: boolean;
}

export interface ITextAreaComponent
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaErrorVariant;
  icon?: () => JSX.Element;
  rows?: number;
  label?: string | JSX.Element;
  error?: string;
}
