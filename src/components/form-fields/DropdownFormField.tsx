import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Controller } from "react-hook-form";
import {
  InputDropdown,
  DropdownInputBorderVariant,
  InputItem,
} from "../ui-kit";
import { FlagIcon, type FlagIconCode } from "react-flag-kit";
import { IDropdownFormFieldProps } from "./DropdownFormField.interface";

const Container = styled.div`
  padding-top: 10px;
`;

const FlagContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const StyledFlagIcon = styled(FlagIcon)`
  height: 50%;
`;

const CountryFlagIcon: React.FunctionComponent<{
  code: FlagIconCode;
}> = ({ code }) =>
  code ? (
    <FlagContainer>
      <StyledFlagIcon code={code} />
    </FlagContainer>
  ) : null;

export const DropdownFormField: FC<IDropdownFormFieldProps> = ({
  items,
  label,
  name,
  control,
  leftIcon,
  required,
  className,
  fullWidth,
  placeholder,
  defaultItem,
  withCountryFlags,
  withSearch,
  disabled,
  industries,
  value,
  button,
  onExternalChange,
  disableResponsiveMaxHeight,
  disableSearchByValue,
  ...inputProps
}) => {
  const [localValue, setLocalValue] = useState<InputItem>({
    label: "",
    value: "",
  });

  const handleChange =
    (onChange: (val: string) => void) => (value: InputItem) => {
      setLocalValue(value);
      onChange(value.value ?? "");
      onExternalChange?.(value.value);
    };

  const [triggerValue, setTriggerValue] = useState(value);

  useEffect(() => {
    setTriggerValue(value);
  }, [value]);

  useEffect(() => {
    if (industries) {
      const inputString = triggerValue ?? "";

      const [label, subLabel] = inputString?.split(" / ");

      const found: any = items.find((item) => item.label === label);

      if (found) {
        const foundItem = found.items.find(
          (item: any) => item.label === subLabel
        );

        if (foundItem) {
          const { label, value } = foundItem;

          setLocalValue({
            label: `${value} / ${label}`,
            value: `${value} / ${label}`,
          });
        }
      }
    } else {
      const found = items.find((i) => {
        if ("value" in i) return i.value === triggerValue;
      });

      if (found) {
        setLocalValue(found as any);
      } else {
        setLocalValue({
          label: "",
          value: "",
        });
      }
    }
  }, [value, triggerValue, industries, items, control]);

  return (
    <Container className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          const borderVariant = () => {
            if (error != null) {
              return DropdownInputBorderVariant.ERROR;
            } else {
              return DropdownInputBorderVariant.DEFAULT;
            }
          };
          return (
            <InputDropdown
              fullWidth={fullWidth}
              error={error?.message}
              label={label}
              items={items}
              placeholder={placeholder}
              defaultItem={defaultItem}
              required={required}
              withCountryFlags={withCountryFlags}
              leftIcon={
                withCountryFlags
                  ? () => <CountryFlagIcon code={field.value?.value} />
                  : leftIcon
              }
              borderVariant={borderVariant()}
              withSearch={withSearch}
              disableSearchByValue={disableSearchByValue}
              disabled={disabled}
              {...inputProps}
              {...field}
              onChange={handleChange(field.onChange)}
              value={localValue}
              button={button}
              disableResponsiveMaxHeight={disableResponsiveMaxHeight}
            />
          );
        }}
      />
    </Container>
  );
};
