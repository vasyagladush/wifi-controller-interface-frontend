import { Control, Controller } from "react-hook-form";
import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { CountryDropdown, DropdownInputBorderVariant } from "../ui-kit";
import { Country, countries } from "../../constants/countries";
import { FlagIconCode } from "react-flag-kit";

const Container = styled.div`
  padding-top: 10px;
`;

interface CountryDropdownFormFieldProps {
  name: string;
  className?: string;
  control: Control<any>;
  label: string;
  fullWidth?: boolean;
  required?: boolean;
  value?: string;
  withSearch?: boolean;
  uniqueId?: string;
  disabled?: boolean;
}

export const CountryDropDownFormField: FC<CountryDropdownFormFieldProps> = ({
  name,
  className,
  control,
  label,
  fullWidth,
  required,
  withSearch,
  value,
  uniqueId,
  disabled,
}) => {
  const [internalValue, setInternalValue] = useState<Country>({
    country: "GB",
    countryName: "United Kingdom",
    code: "+44",
  });
  const handleChange =
    (onChange: (value: FlagIconCode) => void) => (val: Country) => {
      setInternalValue(val);
      onChange(val.country);
    };

  useEffect(() => {
    const found = countries.find((c) => c.country === value);

    if (found) {
      setInternalValue(found);
    }
  }, [value, control]);

  return (
    <Container className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          const variant = () => {
            if (error != null) {
              return DropdownInputBorderVariant.ERROR;
            } else {
              return DropdownInputBorderVariant.DEFAULT;
            }
          };
          return (
            <CountryDropdown
              fullWidth={fullWidth}
              value={internalValue}
              label={label}
              onChange={handleChange(field.onChange)}
              borderVariant={variant()}
              error={error?.message}
              required={required}
              withSearch={withSearch}
              uniqueId={uniqueId}
              disabled={disabled}
            />
          );
        }}
      />
    </Container>
  );
};
