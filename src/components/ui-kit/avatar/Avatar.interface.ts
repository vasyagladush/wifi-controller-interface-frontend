import type React from "react";

export enum AvatarSizeVariant {
  SMALL = "s",
  MEDIUM = "m",
  LARGE = "l",
}

export interface AvatarProps {
  children?: React.ReactNode;
  avatarSrc?: string;
  isOnline?: boolean;
  size: AvatarSizeVariant;
  disableDropdown?: boolean;
}
