import styled, { css } from "styled-components";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { ITextInputProps, TextInputErrorVariant } from "./TextInput.interface";
import { Cross } from "../../icons";

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

interface WrapperTextFieldProps {
  variant?: TextInputErrorVariant;
  disabled?: boolean;
}

const WrapperTextField = styled.div<WrapperTextFieldProps>`
  position: relative;
  /* //   transition: 0.5s ease; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  height: 36px;
  padding: 2px 12px 2px 0;
  box-sizing: border-box;
  background-color: ${({ disabled }) => (disabled ? "#f4f5f9" : "#fbfcfd")};
  ${({ variant }) => borderVariants[variant ?? TextInputErrorVariant.DEFAULT]};
  &:focus-within {
    ${({ variant }) =>
      variant === TextInputErrorVariant.ERROR
        ? borderVariants[variant]
        : borderVariants[TextInputErrorVariant.ACTIVE]}
  }
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

const ColorView = styled.div<{ color: string }>`
  width: 38px;
  height: 34px;
  background-color: ${({ color }) =>
    color ? (color.includes("#") ? color : "#" + color) : "transparent"};
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
`;

const ColorString = styled.input`
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: transparent;
  width: 100%;
  height: 34px;
  border: none;
  color: #2a3b89;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  :focus {
    outline: none;
  }

  :disabled {
    background: #f4f7f9;
  }
  ::placeholder {
    color: #9898ad;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const StyledCross = styled(Cross)`
  position: absolute;
  right: 12px;
  cursor: pointer;
  path {
    stroke: #abababff;
  }
`;

export const ColorInput: React.FunctionComponent<ITextInputProps> = ({
  disabled,
  variant,
  label,
  error,
  disableErrorMessage,
  required,
  className,
  value,
  onChange,
  onBlur,
  clearColorInput,
}) => {
  return (
    <Wrapper className={className}>
      {label && (
        <FieldLabel>
          <LabelWrapper>
            <Typography variant={TypographyVariant.HEADER3}>
              {label}
              {required && (
                <span style={{ marginLeft: "3px", color: "red" }}>*</span>
              )}
            </Typography>
          </LabelWrapper>
        </FieldLabel>
      )}

      <WrapperTextField
        className="wrapperTextField"
        variant={variant}
        disabled={disabled}
      >
        <ColorView color={value as string} />
        <ColorString
          value={value}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
        />
        <StyledCross onClick={clearColorInput} />
      </WrapperTextField>

      {error && !disableErrorMessage && <InputError>{error}</InputError>}
    </Wrapper>
  );
};
