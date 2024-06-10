export interface SubItemInterface extends MenuItemInterface {}
export interface MenuItemInterface {
  label: string;
  icon?: JSX.Element;
  isActive: boolean;
  defaultOpen?: boolean;
  subItems?: SubItemInterface[];
  route?: string;
  hidden?: boolean;
  disabled?: boolean;
}
export interface SideMenuProps {
  menuItems: MenuItemInterface[];
  isHidden?: boolean;
  settingsMenuItems?: MenuItemInterface[];
  hasPaymentsOnlySubscription?: boolean;
}
