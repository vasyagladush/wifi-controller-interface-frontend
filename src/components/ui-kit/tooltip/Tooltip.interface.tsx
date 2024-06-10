import { EventsType } from "react-tooltip";

export interface TooltipTextProps {
  children?: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
  id: string;
  text: string;
  offset?: number;
  noArrow?: boolean;
  dataPlace?: "top" | "right" | "bottom" | "left";
  dataEvent?: EventsType;
  dataEventOff?: string;
  className?: string;
}
