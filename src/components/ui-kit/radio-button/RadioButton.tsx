import { type FC } from "react";
import styled from "styled-components";
import { type RadioButtonProps } from "./RadioButton.interface";

const ItemWrapper = styled.div<{ checked?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    label {
      border: 1px solid #3B892A;
      box-shadow: 0 0 0 2px rgba(44, 208, 158, 0.2);
      ${({ checked }) =>
        checked &&
        `
    box-shadow: none;
    border: 6px solid #3B892A;
  `}
    }
  }

  ${({ disabled }) => disabled && "pointer-events: none;"}
`;

const RadioButtonLabel = styled.label<{
  checked?: boolean;
  disabled?: boolean;
}>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid #c2cedb;
  ${({ checked }) =>
    checked &&
    `
    border: 6px solid #3B892A;
  `}
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disabled }) => disabled && "background: #00000010;"}
`;

const RadioButtonInput = styled.input<{ checked?: boolean }>`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  min-width: 20px;
  min-height: 20px;
  cursor: pointer;
  margin: 0 7px 0 0;
  ${({ checked }) =>
    checked &&
    `&:checked + ${RadioButtonLabel} {
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
      }
    }`};
`;

const Label = styled.label`
  border: none !important;
  box-shadow: none !important;
  cursor: pointer;
`;

export const RadioButton: FC<RadioButtonProps> = ({
  labelComponent,
  inputProps,
  checked,
  disabled,
  ...rest
}) => {
  return (
    <ItemWrapper checked={checked} disabled={disabled} {...rest}>
      <RadioButtonInput
        {...inputProps}
        type="radio"
        checked={checked}
        id={inputProps?.id}
      />
      <RadioButtonLabel checked={checked} disabled={disabled} />

      <Label htmlFor={inputProps?.id}>{labelComponent}</Label>
    </ItemWrapper>
  );
};
