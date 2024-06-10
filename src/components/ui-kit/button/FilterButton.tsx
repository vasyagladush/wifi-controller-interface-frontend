import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";
import { Filter } from "../../icons";

const Icon = styled(Filter)``;

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
  background-color: #556CB1;

  &:hover {
    background-color: #19385e;
  }

  &:disabled {
    background-color: #adb5bd;
    pointer-events: none;
  }
`;

export const FilterButton: FC<IButtonProps> = ({
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
