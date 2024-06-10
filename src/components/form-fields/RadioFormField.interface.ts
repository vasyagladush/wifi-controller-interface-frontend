import { InputHTMLAttributes, ReactElement } from "react";
import { Control } from "react-hook-form";

export interface RadioValue {
  label: ReactElement | string;
  value: string;
  id?: string;
}

export interface IRadioFormFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control?: Control<any>;
  values: RadioValue[];
  className?: string;
  id?: string;
}
