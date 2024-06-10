import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import { TextFormFieldProps } from "./TextFormInput.interface";
import { TextInput, TextInputErrorVariant } from "../ui-kit";
import { ColorInput } from "../ui-kit/input-fields/ColorInput";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 10px;
`;

export const TextFormInput: React.FunctionComponent<TextFormFieldProps> = ({
  label,
  name,
  control,
  rightIcon,
  leftIcon,
  disabled,
  required,
  className,
  ref,
  onBlur,
  successBorder,
  disableErrorMessage,
  width,
  colorInput,
  clearColorInput,
  ...inputProps
}) => (
  <Container className={className}>
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, name, ref },
        fieldState: { error },
      }) => {
        const variant = () => {
          if (successBorder) {
            if (error != null) {
              return TextInputErrorVariant.ERROR;
            } else {
              return TextInputErrorVariant.SUCCESS;
            }
          } else {
            if (error != null) {
              return TextInputErrorVariant.ERROR;
            } else {
              return TextInputErrorVariant.DEFAULT;
            }
          }
        };
        return (
          <>
            {colorInput ? (
              <ColorInput
                width={width}
                disabled={disabled}
                variant={variant()}
                {...inputProps}
                onChange={onChange}
                clearColorInput={clearColorInput}
                value={value}
                onBlur={onBlur}
                name={name}
                label={label}
                error={error?.message}
                disableErrorMessage={disableErrorMessage}
                required={required}
              />
            ) : (
              <TextInput
                width={width}
                disabled={disabled}
                variant={variant()}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                {...inputProps}
                onChange={onChange}
                value={value}
                name={name}
                onBlur={onBlur}
                label={label}
                error={error?.message}
                disableErrorMessage={disableErrorMessage}
                required={required}
              />
            )}
          </>
        );
      }}
    />
  </Container>
);
