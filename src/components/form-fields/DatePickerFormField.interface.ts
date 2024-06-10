import { InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface DatePickerFormFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control?: Control<any>;
  icon?: () => JSX.Element;
  label?: string | JSX.Element;
  className?: string;
  rows?: string;
  customFormat?: string;
  requiredDateInput?: string;
  includeDateIntervals?: Array<{ start: Date; end: Date }>;
  excludeDates?: Date[];
  minDate?: Date | null;
  filterDate?: (date: Date) => boolean;
}
