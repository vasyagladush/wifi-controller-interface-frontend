import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";
import Notification from "../../icons/Notification";

const Body = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  border: none;
  background-color: white;
`;

export const NotificationsButton: FC<IButtonProps> = ({ onClick, ...rest }) => {
  return (
    <Body onClick={onClick} {...rest}>
      <Notification />
    </Body>
  );
};
