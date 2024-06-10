import { TypographyVariant } from "./Typography.interface";
import styled, { css } from "styled-components";

// Page name
const header1 = css`
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
`;

// Section name
const header2 = css`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
`;

// Table name
const header3 = css`
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
`;

// Section name 2
const header4 = css`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
`;

// Info, paragraphs
const headline = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

// Menu items
const body1 = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

// Input text
const body2 = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

// Table text, search
const body3 = css`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;

// Table text, search
const body4 = css`
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
`;

// Text
const body5 = css`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
`;

// Text
const body6 = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
`;

// Text, helper text
const body7 = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
`;

// Small text
const caption = css`
  font-weight: 400;
  font-size: 10px;
  line-height: 22px;
`;

const body13Regular = css`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
`;

// styleName: Body 13 medium;
const body13 = css`
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: right;
  :hover {
    cursor: pointer;
  }
`;

const getVariant = (variant: TypographyVariant) => {
  switch (variant) {
    case TypographyVariant.HEADER1:
      return header1;
    case TypographyVariant.HEADER2:
      return header2;
    case TypographyVariant.HEADER3:
      return header3;
    case TypographyVariant.HEADER4:
      return header4;
    case TypographyVariant.HEADLINE:
      return headline;
    case TypographyVariant.BODY1:
      return body1;
    case TypographyVariant.BODY2:
      return body2;
    case TypographyVariant.BODY3:
      return body3;
    case TypographyVariant.BODY4:
      return body4;
    case TypographyVariant.BODY5:
      return body5;
    case TypographyVariant.BODY6:
      return body6;
    case TypographyVariant.BODY7:
      return body7;
    case TypographyVariant.CAPTION:
      return caption;
    case TypographyVariant.BODY13:
      return body13;
    case TypographyVariant.BODY13_REGULAR:
      return body13Regular;
  }
};

export const Typography = styled.p<{
  variant?: TypographyVariant;
  clickable?: boolean;
  hoverUnderline?: boolean;
}>`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  color: ${(props?: { color?: string }) => props?.color ?? "#2a3b89"};
  margin: 0;
  ${({ variant }) => (variant ? getVariant(variant) : "")}
  ${({ clickable }) => clickable && "cursor: pointer;"}

  ${({ hoverUnderline }) =>
    hoverUnderline && ":hover {text-decoration: underline;}"}
`;
