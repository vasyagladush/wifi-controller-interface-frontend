import { FC } from "react";
import { MoonLoader } from "react-spinners";

export const Spinner: FC<{ size?: number; className?: string }> = ({
  size = 18,
  className,
}) => {
  return (
    <MoonLoader
      className={className}
      size={size}
      color="#556CB1"
      loading
      speedMultiplier={1}
    />
  );
};
