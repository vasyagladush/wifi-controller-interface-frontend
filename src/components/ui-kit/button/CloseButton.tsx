import React, { type FC } from "react";
import styled from "styled-components";
import { type CloseButtonProps } from "./CloseButton.interface";
import { Cross } from "../../icons";

const Icon = styled(Cross)``;

const Body = styled.div<{ additionStyles?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #dbe3eb;
  cursor: pointer;
  ${({ additionStyles }) => additionStyles && `${additionStyles}`}
  &:hover {
    border: 1px solid #adb5bd;
  }
`;

export const CloseButton: FC<CloseButtonProps> = ({
  onClick,
  style,
  className,
}) => {
  return (
    <Body additionStyles={style} onClick={onClick} className={className}>
      <Icon />
    </Body>
  );
};
