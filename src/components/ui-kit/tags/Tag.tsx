import React, { type FC } from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { type TagProps } from "./Tag.interface";
import { CrossWhite } from "../../icons";

const Wrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00bc82;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  margin: 5px;
`;

const Text = styled(Typography)`
  color: #fff;
`;

const Icon = styled(CrossWhite)`
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const Tag: FC<TagProps> = ({ onClick, text }) => {
  return (
    <Wrapper>
      <Body>
        <Text variant={TypographyVariant.BODY6}>{text}</Text>
        <Icon onClick={onClick} />
      </Body>
    </Wrapper>
  );
};
