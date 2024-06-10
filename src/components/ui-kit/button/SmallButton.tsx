import React, { type FC } from "react";
import styled from "styled-components";
import {
  SmallButtonContentType,
  type SmallButtonProps,
  SmallButtonVariant,
} from "./SmallButton.interface";
import { Minus, Plus } from "../../icons";

const Body = styled.div<{ variant: SmallButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.variant === SmallButtonVariant.CONTAINED ? "#6CB155" : "transparent"};
  border: 1px solid #6CB155;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  cursor: pointer;
  svg {
    color: ${(props) =>
      props.variant === SmallButtonVariant.CONTAINED ? "#fff" : "#6CB155"};
  }
`;

const IconPlus = styled(Plus)``;

const IconMinus = styled(Minus)``;

export const SmallButton: FC<SmallButtonProps> = ({
  variant,
  contentType,
  onClick,
  className,
}) => {
  return (
    <Body className={className} variant={variant} onClick={onClick}>
      {contentType === SmallButtonContentType.PLUS ? (
        <IconPlus />
      ) : (
        <IconMinus />
      )}
    </Body>
  );
};

export default SmallButton;
