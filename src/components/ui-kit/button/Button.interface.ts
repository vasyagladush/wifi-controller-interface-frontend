import { type MouseEvent, type ReactNode } from "react";
import { RestProps } from "../../../util/types";

export enum ButtonVariant {
  CONTAINED = "contained",
  OUTLINED = "outlined",
  TEXT = "text",
}

export enum TileButtonVariant {
  PRIMARY = "primary",
  DANGER = "danger",
  CANCEL = "text",
}

export enum Direction {
  LEFT = "left",
  RIGHT = "right",
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
  children?: ReactNode | ReactNode[];
  leftIcon?: ReactNode | ReactNode[];
  rightIcon?: ReactNode | ReactNode[];
  rest?: RestProps;
  hideIcon?: boolean;
  loadingText?: string;
}

export interface IChevronProps {
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  direction: Direction;
  rest?: RestProps;
}

export interface ITileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: TileButtonVariant;
  children?: ReactNode | ReactNode[];
  leftIcon?: ReactNode | ReactNode[];
  rightIcon?: ReactNode | ReactNode[];
  rest?: RestProps;
  hideIcon?: boolean;
}
