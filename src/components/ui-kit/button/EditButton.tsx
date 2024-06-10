import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";
import { Edit } from "../../icons";

const Icon = styled(Edit)`
  fill: #6c6c8a;
`;

const Body = styled.button`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  border: none;

  &:hover {
    background-color: #6c6c8a;
    svg {
      fill: #fff;
    }
  }

  &:disabled {
    background-color: #adb5bd;
    pointer-events: none;
    svg {
      fill: #fff;
    }
  }
`;

export const EditButton: FC<IButtonProps> = ({
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <Body disabled={disabled} onClick={onClick} {...rest}>
      <Icon />
    </Body>
  );
};
