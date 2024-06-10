import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";
import { Settings } from "../../icons";

const Body = styled.button`
  cursor: pointer;
  padding-bottom: 3px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  border: none;
  background-color: white;
`;

export const SettingsButton: FC<IButtonProps> = ({ onClick, ...rest }) => {
  return (
    <Body onClick={onClick} {...rest}>
      <Settings />
    </Body>
  );
};
