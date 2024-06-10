import { DeepMap, FieldErrors, FieldValues } from "react-hook-form";
import {
  ValidationContainer,
  ValidationItem,
  ValidationText,
  ValidationTitle,
  ValidationWrapper,
} from "../styles";

type FormErrors = DeepMap<FieldValues, FieldErrors>;
export interface PasswordValidationProps {
  isValidationContainerVisible: boolean;
  passwordValidation: Record<string, string>;
  errors: FormErrors;
}

export const PasswordValidation: React.FunctionComponent<
  PasswordValidationProps
> = ({ isValidationContainerVisible, passwordValidation, errors }) => {
  return (
    <ValidationWrapper active={isValidationContainerVisible}>
      <ValidationContainer>
        <ValidationTitle>Your password should contain:</ValidationTitle>
        {Object.keys(passwordValidation).map((key) => {
          return (
            <ValidationItem key={key}>
              {errors?.password?.types?.matches?.indexOf(key) >= 0 ? (
                <img alt="" src="/icon/error.svg" />
              ) : (
                <img alt="" src="/icon/success.svg" />
              )}
              <ValidationText>{passwordValidation[key]}</ValidationText>
            </ValidationItem>
          );
        })}
      </ValidationContainer>
    </ValidationWrapper>
  );
};
