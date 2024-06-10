export interface FilterTab {
  name: string;
  value?: string;
  handler?: () => void;
}

export interface IFilterTabsProps {
  menus: FilterTab[];
  startWithIndex?: number;
  clickHandler: (val?: string) => void;
}
