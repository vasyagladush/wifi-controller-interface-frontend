export interface MenusInterface {
  name: string;
  component: JSX.Element | JSX.Element[];
  hidden?: boolean;
  additionalHandler?: () => void;
}

export interface TabMenuProps {
  menus: MenusInterface[];
  startWithIndex?: number;
  withoutLine?: boolean;
  className?: string;
}
