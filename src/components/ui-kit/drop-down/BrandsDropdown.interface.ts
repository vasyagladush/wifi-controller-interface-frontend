import { Dispatch, ReactNode, SetStateAction } from "react";
import { BrandApiType } from "../../../util/types";
import { DropdownInputBorderVariant } from "../input-drop-down";

export interface IBrandsDropdownProps {
  // label?: ReactNode;
  brands: BrandApiType[];
  selectedBrands: BrandApiType[];
  setSelectedBrands: Dispatch<SetStateAction<BrandApiType[]>>;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  label?: ReactNode;
  hideClearButton?: boolean;
  externalSearchHandler?: (val?: string) => void;
}

export interface DropDownHeaderProps {
  isOpen?: boolean;
  variant?: DropdownInputBorderVariant;
  disabled?: boolean;
}
