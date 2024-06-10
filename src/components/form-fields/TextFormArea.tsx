import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import { TextAreaComponent, TextAreaErrorVariant } from "../ui-kit";
import { TextFormFieldProps } from "./TextFormArea.interface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const TextFormArea: React.FunctionComponent<TextFormFieldProps> = ({
  label,
  name,
  control,
  icon,
  disabled,
  required,
  className,
  rows,
  ...inputProps
}) => (
  <Container className={className}>
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextAreaComponent
            label={label}
            error={error?.message}
            required={required}
            rows={rows}
            disabled={disabled}
            variant={
              error != null
                ? TextAreaErrorVariant.ERROR
                : TextAreaErrorVariant.DEFAULT
            }
            {...inputProps}
            {...field}
          />
        </>
      )}
    />
  </Container>
);
