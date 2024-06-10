import { ReactNode } from "react";
import { DropdownInputBorderVariant } from "../input-drop-down";

export enum CreatedByItemTypes {
  TEAM_MEMBER = "teamMember",
  API_KEY = "apiKey",
  WOOCOMMERCE = "woocommerce",
  SHOPIFY = "shopify",
  ZAPIER = "zapier",
  XERO = "xero",
  QUICKBOOKS = "quickbooks",
}
export interface Item {
  label: string;
  value?: string;
  avatar?: string;
  type?: CreatedByItemTypes;
  onClick?: () => void;
  hidden?: boolean;
}

export interface FilterOption {
  label: string;
  value?: string;
}

export interface IDropdownProps {
  items: Item[];
  onChange: (value: Item) => void;
  defaultItem?: Item;
  fullWidth?: boolean;
  leftIcon?: ReactNode | ReactNode[];
  disabled?: boolean;

  withoutAvatar?: boolean;
  className?: string;
  actionsDropdown?: boolean;
  actionsLabel?: string;
}

export interface IDateFilterDropdownProps {
  onChange: (value: FilterOption) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  defaultItem?: FilterOption;
  items: FilterOption[];
}

export interface DropDownHeaderProps {
  isOpen?: boolean;
  variant?: DropdownInputBorderVariant;
  disabled?: boolean;
}

export interface ValueSelectProps {
  isPlaceholder?: boolean;
}
