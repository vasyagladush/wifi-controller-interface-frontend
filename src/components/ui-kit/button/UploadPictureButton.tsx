import React, { type FC } from "react";
import { type IButtonProps } from "./Button.interface";
import styled from "styled-components";
import { Camera } from "../../icons";

const Icon = styled(Camera)`
  stroke: #6c6c8a;
`;

const Body = styled.button`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  border: solid 1px #dbe3eb;
  background-color: #ffffff;

  &:hover {
    box-shadow: 0 5px 10px rgba(194, 206, 219, 0.58);
    svg {
      stroke: #027aff;
    }
  }

  &:disabled {
    box-shadow: none;
    border: none;
    background-color: #adb5bd;
    pointer-events: none;
    svg {
      stroke: #ffffff;
    }
  }
`;

export const UploadPictureButton: FC<IButtonProps> = ({
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
