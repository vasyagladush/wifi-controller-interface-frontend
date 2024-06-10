import { Control } from "react-hook-form";
import { InputItem } from "../ui-kit";

interface Item {
  label: string;
  value?: string;
}

interface DeepItem {
  label: string;
  items: Item[];
}

export interface IDropdownFormFieldProps {
  withSearch?: boolean;
  items: Array<InputItem | DeepItem>;
  leftIcon?: () => JSX.Element;
  name: string;
  control?: Control<any>;
  label?: string | JSX.Element;
  required?: boolean;
  placeholder?: string;
  className?: string;
  fullWidth?: boolean;
  defaultItem?: InputItem;
  withCountryFlags?: boolean;
  disabled?: boolean;
  value?: string;
  industries?: boolean;
  button?: Array<{ label: string; onClick: () => void }>;
  onExternalChange?: (value?: string) => void;
  disableResponsiveMaxHeight?: boolean;
  disableSearchByValue?: boolean;
}
