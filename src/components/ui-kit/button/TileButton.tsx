import React, { type FC } from "react";
import { ITileButtonProps, TileButtonVariant } from "./Button.interface";
import styled, { css } from "styled-components";
import { Spinner } from "..";

const Primary = css`
  color: #2a3b89;
`;

const Danger = css`
  color: #d63120;
`;

const Cancel = css`
  color: #8181a5;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const getVariant = (variant: string) => {
  switch (variant) {
    case TileButtonVariant.PRIMARY:
      return Primary;
    case TileButtonVariant.DANGER:
      return Danger;
    case TileButtonVariant.CANCEL:
      return Cancel;
  }
};

const Body = styled.button<{
  fullWidth?: boolean;
  variant?: TileButtonVariant;
}>`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  background: transparent;
  border: none;
  //border-top: 1px solid #dbe3eb;
  //border-bottom: 1px solid #dbe3eb;

  text-align: center;
  padding: 14px 0;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 200ms;
  width: 100%;
  ${({ variant }) => (variant ? getVariant(variant) : Primary)}

  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25) inset,
      0 -1px 1px rgba(0, 0, 0, 0.25) inset;
  }

  &:disabled {
    background-color: #adb5bd;
    color: #8181a5;
    cursor: default;
    pointer-events: none;
  }
`;

export const TileButton: FC<ITileButtonProps> = ({
  children,
  variant = TileButtonVariant.PRIMARY,
  leftIcon,
  rightIcon,
  disabled,
  loading,
  onClick,
  ...rest
}) => {
  if (loading) {
    return (
      <Body disabled variant={variant} {...rest}>
        <Spinner />
        Processing
      </Body>
    );
  }
  return (
    <Body variant={variant} disabled={disabled} onClick={onClick} {...rest}>
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </Body>
  );
};
