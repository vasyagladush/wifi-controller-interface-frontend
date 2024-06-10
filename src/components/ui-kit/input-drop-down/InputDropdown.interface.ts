// Dropdown

import { Country } from "../../../constants/countries";

export enum DropdownInputBorderVariant {
  ERROR = "error",
  DEFAULT = "default",
  ACTIVE = "active",
}
export interface InputItem {
  label: string;
  value?: string;
  additionalValue?: string | number;
}

export interface DeepItem {
  label: string;
  value?: string;
  items: InputItem[];
}

export type UniversalItem = InputItem | DeepItem;

export interface IInputDropdownProps {
  items: Array<InputItem | DeepItem>;
  defaultItem?: InputItem;
  onChange: (value: InputItem) => void;
  fullWidth?: boolean;
  label?: string | JSX.Element;
  placeholder?: string;
  required?: boolean;
  withCountryFlags?: boolean;
  leftIcon?: () => JSX.Element;
  withSearch?: boolean;
  value?: InputItem;
  borderVariant?: DropdownInputBorderVariant;
  disabled?: boolean;
  error?: string;
  button?: Array<{ label: string; onClick: () => void }>;
  disableResponsiveMaxHeight?: boolean;
  disableSearchByValue?: boolean;
}

// End

export interface ICountryDropdownProps {
  defaultItem?: Country;
  onChange: (value: Country) => void;
  fullWidth?: boolean;
  label?: string | JSX.Element;
  required?: boolean;
  withSearch?: boolean;
  value: Country;
  borderVariant?: DropdownInputBorderVariant;
  disabled?: boolean;
  error?: string;
  uniqueId?: string; // Needed if there are two country dropdowns on one page
}

export interface ICurrencyDropdownProps {
  defaultItem?: any;
  onChange: (value: any) => void;
  label?: string | JSX.Element;
  required?: boolean;
  value: any;
  borderVariant?: DropdownInputBorderVariant;
  disabled?: boolean;
  error?: string;
}

export interface PhoneInputValues {
  code: string;
  number: string;

  countryCode: any;
}

export interface IPhonenumberDropdownProps {
  value?: PhoneInputValues;
  onChange: (value: PhoneInputValues) => void;
  label?: string | JSX.Element;
  required?: boolean;
  variant?: DropdownInputBorderVariant;
  disabled?: boolean;
  dropdownColor?: string;
  error?: string;
}

// End

// UnitsDropdown

export interface UnitItem {
  unit: string;
  value: string;
}

export interface IUnitsDropdownProps {
  onChange: (value: UnitItem) => void;
  items: string[];
  defaultItem?: string;
  defaultValue?: string;
  label?: string;
  value?: string;
  unitValue?: string;
  valueError?: string;
  disabled?: boolean;
}

// Amount Dropdown

export interface AmountItem {
  currency: any;
  value: string;
}

export interface IAmountDropdownProps {
  onChange: (value: AmountItem) => void;
  items: any[];
  defaultItem?: any;
  defaultValue?: string;
  value?: string;
  currencyValue?: string;
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

// End
