export interface SwitchButtonProps {
  onChange: (val: boolean) => void;
  checked: boolean;
  className?: string;
  disabled?: boolean;
}
