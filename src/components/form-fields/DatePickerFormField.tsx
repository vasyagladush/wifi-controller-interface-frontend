import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import { DatePicker, TextInput, TextInputErrorVariant } from "../ui-kit";
import { DatePickerFormFieldProps } from "./DatePickerFormField.interface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const StyledTextInput = styled(TextInput)`
  input {
    height: 90%;
  }
`;

export const DatePickerFormField: React.FunctionComponent<
  DatePickerFormFieldProps
> = ({
  label,
  name,
  control,
  icon,
  disabled,
  required,
  requiredDateInput,
  className,
  customFormat,
  rows,
  includeDateIntervals,
  excludeDates,
  filterDate,
  minDate,
  ...inputProps
}) => (
  <Container className={className}>
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <DatePicker
            disabled={disabled}
            includeDateIntervals={includeDateIntervals}
            excludeDates={excludeDates}
            filterDate={filterDate}
            customFormat={customFormat}
            minDate={minDate}
            customInput={
              <StyledTextInput
                {...inputProps}
                {...field}
                label={label}
                error={error?.message}
                variant={
                  error != null
                    ? TextInputErrorVariant.ERROR
                    : TextInputErrorVariant.DEFAULT
                }
                required={required}
                disabled={disabled}
                requiredDateInput={requiredDateInput}
                datePicker
              />
            }
            {...inputProps}
            {...field}
          />
        </>
      )}
    />
  </Container>
);
