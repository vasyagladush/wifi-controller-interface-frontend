import { Control } from "react-hook-form";

export interface IPhoneFormFieldProps {
  name: string;
  countryCodeName: string;
  phoneCodeName: string;
  control?: Control<any>;
  rightIcon?: () => JSX.Element;
  leftIcon?: () => JSX.Element;
  label?: string | JSX.Element;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}
