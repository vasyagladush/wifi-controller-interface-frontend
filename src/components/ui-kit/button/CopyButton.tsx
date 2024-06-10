import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";
import { Copy } from "../../icons";
import { Spinner } from "../spinner/Spinner";

const Body = styled.button`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 5px;
  padding: 11px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  border: none;

  svg {
    color: #6c6c8a;
  }

  &:hover {
    background-color: #6c6c8a;
    svg {
      color: #fff;
    }
  }

  &:disabled {
    background-color: #adb5bd;
    pointer-events: none;
    svg {
      color: #fff;
    }
  }
`;

export const CopyButton: FC<IButtonProps> = ({
  disabled,
  onClick,
  leftIcon,
  loading,
  ...rest
}) => {
  if (loading) {
    return (
      <Body disabled>
        <Spinner size={10} />
      </Body>
    );
  }
  return (
    <Body disabled={disabled} onClick={onClick} {...rest}>
      {leftIcon ?? <Copy />}
    </Body>
  );
};
