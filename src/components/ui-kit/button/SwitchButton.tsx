import { type FC } from "react";
import { type SwitchButtonProps } from "./SwitchButton.interface";
import ReactSwitch from "react-switch";

export const SwitchButton: FC<SwitchButtonProps> = ({
  onChange,
  checked,
  className,
  disabled,
}) => {
  const handleChange = (nextChecked: boolean) => {
    onChange(nextChecked);
  };
  return (
    <ReactSwitch
      className={className}
      onColor="#3B892A"
      height={18}
      width={40}
      disabled={disabled}
      handleDiameter={15}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={handleChange}
      checked={checked}
    />
  );
};
