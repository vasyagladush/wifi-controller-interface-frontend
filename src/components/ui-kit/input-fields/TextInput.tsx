import InputMask, { Props } from "react-input-mask";
import styled, { css } from "styled-components";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { ITextInputProps, TextInputErrorVariant } from "./TextInput.interface";
import { CalendarIcon } from "../../icons";

const borderVariants = {
  error: css`
    border-color: #ef6355;
  `,
  success: css`
    border-color: #3B892A;
  `,
  default: css`
    border-color: #dbe3eb;
  `,
  active: css`
    border-color: #027aff;
    box-shadow: 0 0 0 3px rgba(2, 120, 255, 0.153);
  `,
};

const Wrapper = styled.div<{ disabled?: boolean }>`
  ${({ disabled }) => disabled && "pointer-events: none;"}
`;

const Input = styled.input<{ currency?: boolean }>`
  padding-left: ${(props) => props.currency && "12px"};
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  padding: 0;
  color: #0e233e;
  &:disabled {
    background: #f4f7f9;
  }
  ::placeholder {
    color: #9898ad;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    padding: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    padding: 0;
  }
`;

interface WrapperTextFieldProps {
  variant?: TextInputErrorVariant;
  disabled?: boolean;
  datePicker?: boolean;
}

const WrapperTextField = styled.div<WrapperTextFieldProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  height: 36px;
  padding: 2px 12px;
  box-sizing: border-box;
  background: ${({ disabled }) => (disabled ? "#f4f7f9" : "#fff")};
  ${({ variant }) => borderVariants[variant ?? TextInputErrorVariant.DEFAULT]};
  &:focus-within {
    ${({ variant }) =>
      variant === TextInputErrorVariant.ERROR
        ? borderVariants[variant]
        : borderVariants[TextInputErrorVariant.ACTIVE]}
  }
  ${({ datePicker }) => datePicker && "padding: 0 0 0 12px;"}
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const StyledInputMask = styled(InputMask)<Props>`
  border: none;
  width: 100%;
  outline: none;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #0e233e;

  &:disabled {
    background: #f4f7f9;
  }
  ::placeholder {
    color: #9898ad;
  }
`;

const CurrencyInputWrapper = styled.div<WrapperTextFieldProps>`
  width: 100%;
  display: flex;
  height: 36px;
  background: #ffffff;
  border: 1px solid #c2cedb;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  ${({ variant }) => borderVariants[variant ?? TextInputErrorVariant.DEFAULT]};
  &:focus-within {
    ${({ variant }) =>
      variant === TextInputErrorVariant.ERROR
        ? borderVariants[variant]
        : borderVariants[TextInputErrorVariant.ACTIVE]}
  }
`;

const WrapperCurrency = styled.div`
  display: flex;
  width: 42px;
  border-right: 1px solid #dbe3eb;
  align-items: center;
  justify-content: center;
  font-family: Ubuntu;
  background-color: #f4f5f9;
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

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-flex;
  }
`;

const FieldLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const DatepickerWrapper = styled.div`
  width: 46px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f9;
  border-left: 1px solid #dbe3eb;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

export const TextInput: React.FunctionComponent<ITextInputProps> = ({
  rightIcon,
  leftIcon,
  disabled,
  variant,
  mask,
  currency,
  label,
  error,
  disableErrorMessage,
  required,
  ref,
  className,
  requiredDateInput,
  datePicker,
  ...rest
}) => {
  const wrapperProps = {
    className,
    disabled,
    ...(datePicker ? rest : {}),
  };
  return (
    <Wrapper {...wrapperProps}>
      {label && (
        <FieldLabel>
          <LabelWrapper>
            <Typography variant={TypographyVariant.HEADER3}>
              {label}
              {(required ?? requiredDateInput === "true") && (
                <span style={{ marginLeft: "3px", color: "red" }}>*</span>
              )}
            </Typography>{" "}
          </LabelWrapper>
        </FieldLabel>
      )}
      {currency ? (
        <CurrencyInputWrapper variant={variant} disabled={disabled}>
          <WrapperCurrency>£</WrapperCurrency>
          <Input currency={currency} disabled={disabled} {...rest} />
        </CurrencyInputWrapper>
      ) : (
        <WrapperTextField
          className="wrapperTextField"
          variant={variant}
          disabled={disabled}
          datePicker={datePicker}
        >
          {leftIcon != null && <IconWrapper>{leftIcon()}</IconWrapper>}
          {mask ? (
            <StyledInputMask
              mask={mask}
              maskChar={null}
              disabled={disabled}
              {...rest}
            />
          ) : (
            <Input disabled={disabled} {...rest} ref={ref} />
          )}
          {rightIcon != null && <IconWrapper>{rightIcon()}</IconWrapper>}
          {datePicker && (
            <DatepickerWrapper>
              <CalendarIcon />
            </DatepickerWrapper>
          )}
        </WrapperTextField>
      )}
      {error && !disableErrorMessage && <InputError>{error}</InputError>}
    </Wrapper>
  );
};
