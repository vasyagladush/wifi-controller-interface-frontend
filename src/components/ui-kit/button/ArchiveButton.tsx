import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";
import { Archive } from "../../icons";

const Icon = styled(Archive)`
  color: #6c6c8a;
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

export const ArchiveButton: FC<IButtonProps> = ({
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
