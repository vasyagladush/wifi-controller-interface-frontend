import { type FC } from "react";
import styled, { css } from "styled-components";

import { type CheckboxProps } from "./Checkbox.interface";
import { Check } from "../../icons";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";

const CheckedStyle = css`
  background: #6CB155;
  &:hover {
    box-shadow: 0 0 0 2px rgba(44, 208, 158, 0.2);
  }
`;

const UncheckedStyle = css`
  background: #ffffff;
  border: 1px solid #dbe3eb;
  &:hover {
    border: 1px solid #6CB155;
    box-shadow: 0 0 0 2px rgba(44, 208, 158, 0.2);
  }
`;

const StyledCheckbox = styled.div<{ checked?: boolean; disabled?: boolean }>`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  ${({ checked }) => (checked ? CheckedStyle : UncheckedStyle)}
  ${({ disabled }) => disabled && "background: #00000010;"}
  box-sizing: border-box;
  margin-right: 8px;
`;

const HiddenCheckBox = styled.input`
  display: none;
`;

const Label = styled.label<{ disabled?: boolean }>`
  display: flex;
  /* align-items: center; */
  cursor: pointer;
  ${({ disabled }) => disabled && "pointer-events: none;"}
`;

const CheckBoxWrapper = styled.div`
  padding-top: 2px;
`;

const InputError = styled.div`
  display: block;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #ef6355;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Checkbox: FC<CheckboxProps> = ({
  className,
  checked,
  label,
  disabled,
  error,
  ...rest
}) => {
  return (
    <Label className={className} disabled={disabled}>
      <HiddenCheckBox type="checkbox" {...rest} checked={checked} />
      <CheckBoxWrapper>
        <StyledCheckbox checked={checked} disabled={disabled}>
          {checked && <Check />}
        </StyledCheckbox>
      </CheckBoxWrapper>
      {label && (
        <Info>
          <Typography variant={TypographyVariant.BODY2}>{label}</Typography>
          {error && <InputError>{error}</InputError>}
        </Info>
      )}
    </Label>
  );
};
