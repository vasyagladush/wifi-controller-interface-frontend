import { type ReactElement } from "react";

export interface IModalProps {
  onHide: () => void;
  children: ReactElement;
  canHideOnBackground?: boolean;
}
