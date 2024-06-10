import { FC } from "react";
import styled, { css } from "styled-components";
import {
  ITextAreaComponent,
  TextAreaErrorVariant,
  WrapperTextAreaProps,
} from "./TextArea.interface";

const borderVariants = {
  error: css`
    border-color: #ef6355;
  `,
  success: css`
    border-color: #6CB155;
  `,
  default: css`
    border-color: #dbe3eb;
  `,
  active: css`
    border-color: #027aff;
    box-shadow: 0 0 0 3px rgba(2, 120, 255, 0.153);
  `,
};

const TextArea = styled.textarea`
  border: none;
  width: 100%;
  outline: none;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #0e233e;
  resize: vertical;
  &:disabled {
    background: #f4f7f9;
  }
  ::placeholder {
    color: #8181a5;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
  }
`;

const WrapperTextArea = styled.div<WrapperTextAreaProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  padding: 7px 12px;
  background: ${({ disabled }) => (disabled ? "#f4f7f9" : "#ffffff")};
  ${({ variant }) => borderVariants[variant ?? TextAreaErrorVariant.DEFAULT]}
  &:focus-within {
    ${({ variant }) =>
      variant === TextAreaErrorVariant.ERROR
        ? borderVariants[variant]
        : borderVariants[TextAreaErrorVariant.ACTIVE]}
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const InputError = styled.div`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #ef6355;
  padding-top: 5px;
`;

const FieldLabel = styled.label`
  display: block;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  margin-bottom: 5px;
  color: #556CB1;
`;

export const TextAreaComponent: FC<ITextAreaComponent> = ({
  variant,
  icon,
  disabled,
  label,
  error,
  required,
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      {label && (
        <FieldLabel>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </FieldLabel>
      )}
      <WrapperTextArea variant={variant} disabled={disabled}>
        <TextArea rows={rest.rows} disabled={disabled} {...rest} />
        {icon != null && <IconWrapper>{icon()}</IconWrapper>}
      </WrapperTextArea>
      {error && <InputError>{error}</InputError>}
    </div>
  );
};
