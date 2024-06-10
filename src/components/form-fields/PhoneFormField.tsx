import { type FC } from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import {
  DropdownInputBorderVariant,
  PhoneInputValues,
  PhonenumberDropdown,
} from "../ui-kit";
import { IPhoneFormFieldProps } from "./PhoneFormField.interface";

const Container = styled.div`
  padding-top: 10px;
`;

export const PhoneFormField: FC<IPhoneFormFieldProps> = ({
  label,
  name,
  phoneCodeName,
  countryCodeName,
  control,
  rightIcon,
  leftIcon,
  disabled,
  required,
  className,
  ...inputProps
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { field: phoneCodeField } = useController({
    name: phoneCodeName,
    control,
  });
  const { field: countryCodeField } = useController({
    name: countryCodeName,
    control,
  });

  const onChange = (phone: PhoneInputValues) => {
    field.onChange(phone.number);
    phoneCodeField.onChange(phone.code);
    countryCodeField.onChange(phone.countryCode);
  };

  return (
    <Container className={className}>
      <PhonenumberDropdown
        variant={
          error
            ? DropdownInputBorderVariant.ERROR
            : DropdownInputBorderVariant.DEFAULT
        }
        required={required}
        disabled={disabled}
        label={label}
        error={error?.message}
        {...field}
        {...inputProps}
        onChange={onChange}
        value={{
          number: field.value,
          code: phoneCodeField.value,
          countryCode: countryCodeField.value,
        }}
      />
    </Container>
  );
};
