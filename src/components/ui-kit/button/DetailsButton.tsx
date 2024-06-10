import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";

const Body = styled.button`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  border: none;
  box-shadow: inset 0px 0px 0px 1px #dbe3eb;
  background-color: #ffffff;
  color: #556CB1;
  text-align: center;
  border-radius: 5px;
  padding: 4px 14px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;

  &:hover {
    box-shadow: none;
    background-color: #556CB1;
    color: #ffffff;
  }

  &:disabled {
    box-shadow: none;
    background-color: #adb5bd;
    color: #ffffff;
    pointer-events: none;
  }
`;

export const DetailsButton: FC<IButtonProps> = ({
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <Body disabled={disabled} onClick={onClick} {...rest}>
      Details
    </Body>
  );
};
