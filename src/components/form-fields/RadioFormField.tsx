import styled from "styled-components";
import { Controller } from "react-hook-form";
import { RadioButton } from "../ui-kit";
import { IRadioFormFieldProps } from "./RadioFormField.interface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
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

export const RadioFormField: React.FunctionComponent<IRadioFormFieldProps> = ({
  name,
  control,
  values,
  className,
  id,
  disabled,
  ...rest
}) => (
  <Container className={className}>
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            {values.map((v) => {
              return (
                <RadioButton
                  key={v.value}
                  onChange={field.onChange}
                  checked={field.value === v.value}
                  name={name}
                  inputProps={{ value: v.value, id: v.id }}
                  labelComponent={v.label}
                  disabled={disabled}
                  {...rest}
                />
              );
            })}
            {error && <InputError>{error.message}</InputError>}
          </>
        );
      }}
    />
  </Container>
);
