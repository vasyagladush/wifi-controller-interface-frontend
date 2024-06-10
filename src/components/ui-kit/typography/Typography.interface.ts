export enum TypographyVariant {
  HEADER1 = "header1", // Page name
  HEADER2 = "header2", // Section name
  HEADER3 = "header3", // Table name
  HEADER4 = "header4", // Section name 2
  HEADLINE = "headline", // Info, paragraphs
  BODY1 = "body1", // Menu items
  BODY2 = "body2", // Input text
  BODY3 = "body3", // Table text, search
  BODY4 = "body4", // Table text, search
  BODY5 = "body5", // Text
  BODY6 = "body6", // Text
  BODY7 = "body7", // Text, helper text
  BODY13_REGULAR = "body13Regular",
  BODY13 = "body13", // Text, helper text
  CAPTION = "caption", // Small text
}

export interface ITypographyProps {
  variant?: TypographyVariant;
  clickable?: boolean;
  color?: string;
}
