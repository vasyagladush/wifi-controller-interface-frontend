import React, { type FC } from "react";
import { type IButtonProps, ButtonVariant } from "./Button.interface";
import styled, { css } from "styled-components";
import { Spinner } from "..";

const Contained = css`
  background-color: #556CB1;
  color: #ffffff;
  border: none;
  &:hover {
    background-color: #19385e;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    background-color: #adb5bd;
    box-shadow: none;
    pointer-events: none;
    cursor: default;
  }
`;

const Outlined = css`
  background-color: #ffffff;
  border: 1px solid #dbe3eb;
  color: #556CB1;
  &:hover {
    border: 1px solid #8181a5;
  }
  &:disabled {
    background-color: #adb5bd;
    border: none;
    color: #ffffff;
    cursor: default;
    pointer-events: none;
  }
`;

const Text = css`
  background-color: transparent;
  color: #556CB1;
  border: none;
  font-weight: 400;
  &:hover {
    box-shadow: inset 0 0 0 1px #8181a5;
  }
  &:disabled {
    background-color: #adb5bd;
    border: none;
    color: #adb5bd;
    cursor: default;
    pointer-events: none;
  }
`;

const FullWidth = css`
  width: 100%;
`;

const IconWrapper = styled.div<{ left?: boolean }>`
  display: flex;
  align-items: center;
  margin: ${({ left }) => (left ? "0 10px 0 0" : "0 0 0 10px")};
`;

const getVariant = (variant: string) => {
  switch (variant) {
    case ButtonVariant.CONTAINED:
      return Contained;
    case ButtonVariant.OUTLINED:
      return Outlined;
    case ButtonVariant.TEXT:
      return Text;
  }
};

const Body = styled.button<{
  fullWidth?: boolean;
  variant?: ButtonVariant;
}>`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  text-align: center;
  border-radius: 5px;
  padding: 9px 20px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  height: 36px;
  ${({ variant }) => (variant ? getVariant(variant) : Contained)}
  ${({ fullWidth }) => fullWidth && FullWidth}
`;

export const Button: FC<IButtonProps> = ({
  children,
  variant = ButtonVariant.CONTAINED,
  fullWidth,
  leftIcon,
  rightIcon,
  disabled,
  loading,
  onClick,
  loadingText,
  ...rest
}) => {
  if (loading) {
    return (
      <Body disabled fullWidth={fullWidth} variant={variant} {...rest}>
        <Spinner />
        <div style={{ display: "inline", marginLeft: "7px" }}>
          {loadingText ?? "Processing"}
        </div>
      </Body>
    );
  }
  return (
    <Body
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leftIcon && <IconWrapper left>{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </Body>
  );
};
