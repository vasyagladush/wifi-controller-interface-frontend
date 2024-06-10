import { MouseEvent } from "react";

export interface CloseButtonProps {
  onClick: (event: MouseEvent) => void;
  style?: string;
  className?: string;
}
