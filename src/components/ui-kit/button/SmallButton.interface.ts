export enum SmallButtonVariant {
  CONTAINED = "contained",
  OUTLINED = "outlined",
}

export enum SmallButtonContentType {
  PLUS = "plus",
  MINUS = "minus",
}
export interface SmallButtonProps {
  variant: SmallButtonVariant;
  contentType: SmallButtonContentType;
  className?: string;
  onClick: () => void;
}
