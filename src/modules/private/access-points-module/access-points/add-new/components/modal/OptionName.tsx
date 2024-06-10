import React, { Fragment } from "react";
import { Control, useFieldArray, useWatch } from "react-hook-form";
import OptionValues from "./OptionValues";
import { TextFormInput } from "../../../../../../../components/form-fields";
import {
  Button,
  ButtonVariant,
  DeleteButton,
  Typography,
  TypographyVariant,
} from "../../../../../../../components/ui-kit";
import styled from "styled-components";
import { OptionsFormValues } from "../OptionsControl";

const Label = styled(Typography)`
  margin-top: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const StyledDeleteButton = styled(DeleteButton)`
  margin-left: 10px;
`;

const OptionItem = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 35px;
  :first-child {
    margin-top: 0;
  }
`;

const StyledButton = styled(Button)`
  /* margin-top: 20px; */
  margin-right: 10px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const OptionsWrapper = styled.div``;

const AddButton = styled(Typography)`
  margin: 12px 0;
`;

const Error = styled(Typography)`
  margin-top: 5px;
`;

interface OptionNameProps {
  control: Control<OptionsFormValues>;
  isEditMode?: boolean;
  loading: boolean;
  errors?: any;
  toggleEditMode: (val: boolean) => void;
  handleReset: () => void;
}

const OptionName: React.FunctionComponent<OptionNameProps> = ({
  control,
  isEditMode,
  loading,
  toggleEditMode,
  handleReset,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
    keyName: "id",
  });

  const watchOptions = useWatch({ control, name: "options" });

  const hasLessThanTwoValues = watchOptions?.findIndex(
    (option) => option.values && option.values.length < 2
  );

  return (
    <>
      {isEditMode && (
        <OptionsWrapper>
          {fields.map((item: any, index) => {
            return (
              <OptionItem key={item.id}>
                <InputWrapper>
                  <TextFormInput
                    control={control}
                    name={`options[${index}].name`}
                    label="Option name"
                  />
                  <div>
                    <StyledDeleteButton
                      disabled={fields.length === 1}
                      type="button"
                      onClick={() => {
                        remove(index);
                      }}
                    />
                  </div>
                </InputWrapper>

                <Label variant={TypographyVariant.HEADER3}>Option values</Label>
                <OptionValues nestIndex={index} {...{ control }} />
                {index === hasLessThanTwoValues && (
                  <Error variant={TypographyVariant.BODY6} color="#ef6355;">
                    Should contain at least 2 values{" "}
                  </Error>
                )}
              </OptionItem>
            );
          })}
          {fields.length < 3 && (
            <AddButton
              variant={TypographyVariant.BODY4}
              color="#38B6FF"
              onClick={() => {
                append({ name: "", values: [] });
                toggleEditMode(true);
              }}
              clickable
            >
              + Add an option
            </AddButton>
          )}

          <ButtonsWrapper>
            {!!fields.length && (
              <>
                <StyledButton
                  disabled={!!(hasLessThanTwoValues !== -1)}
                  type="submit"
                  variant={ButtonVariant.CONTAINED}
                  loading={loading}
                >
                  Save
                </StyledButton>
                <Button
                  disabled={loading}
                  type="button"
                  variant={ButtonVariant.OUTLINED}
                  onClick={() => {
                    toggleEditMode(false);
                    handleReset();
                  }}
                >
                  Cancel
                </Button>
              </>
            )}
          </ButtonsWrapper>
        </OptionsWrapper>
      )}
    </>
  );
};

export default OptionName;
