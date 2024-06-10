import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";
import { Delete } from "../../icons";

const Icon = styled(Delete)<{ hasChildren?: boolean }>`
  ${({ hasChildren }) =>
    hasChildren ? "fill: #ffffff; margin-right: 6px;" : "fill:#EF6355;"}
`;

const Body = styled.button<{ hasChildren?: boolean }>`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  border-radius: 5px;
  padding: 9px 24px 9px 22px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  border: none;
  :disabled {
    background-color: #fff;
  }
  ${({ hasChildren }) =>
    hasChildren
      ? "padding: 9px 24px 9px 22px; background-color: #EF6355; color: #ffffff;"
      : "padding: 10px; background-color: #FCE4E2;"}

  &:hover {
    ${({ hasChildren }) =>
      hasChildren ? "background-color: #D63120;" : "background-color: #EF6355;"}
    svg {
      fill: #fff;
    }
  }

  &:disabled {
    background-color: #adb5bd;
    ${({ hasChildren }) => (hasChildren ? "" : "fill: #fff;")}
    cursor: default;
    pointer-events: none;
    svg {
      fill: #fff;
    }
  }
`;

export const DeleteButton: FC<IButtonProps> = ({
  children,
  disabled,
  onClick,
  hideIcon,
  ...rest
}) => {
  const hasChildren = children !== undefined;

  return (
    <Body
      disabled={disabled}
      onClick={onClick}
      hasChildren={hasChildren}
      {...rest}
    >
      {!hideIcon && <Icon hasChildren={hasChildren} />}
      {children}
    </Body>
  );
};
