import styled from "styled-components";
import { Controller } from "react-hook-form";
import { Checkbox } from "../ui-kit";
import { ICheckboxFormFieldProps } from "./CheckboxFormField.interface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxFormField: React.FunctionComponent<
  ICheckboxFormFieldProps
> = ({ label, name, control, rightIcon, leftIcon, className, ...rest }) => (
  <Container className={className}>
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Checkbox
          label={label}
          checked={field.value}
          error={error?.message}
          {...field}
          {...rest}
        />
      )}
    />
  </Container>
);
