import React from "react";
import { useFieldArray } from "react-hook-form";
import { TextFormInput } from "../../../../../../../components/form-fields";
import styled from "styled-components";
import {
  DeleteButton,
  Typography,
  TypographyVariant,
} from "../../../../../../../components/ui-kit";

const InputWrapper = styled.div`
  display: flex;
`;

const StyledDeleteButton = styled(DeleteButton)`
  margin-left: 10px;
  margin-top: 10px;
`;

const LongButton = styled.div<{ margin?: boolean }>`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #dbe3eb;
  margin-top: ${(props) => (props.margin ? "10px" : "5px")};
  cursor: pointer;
`;

const LongButtonText = styled(Typography)`
  color: #8181a5;
`;

const OptionValues = ({ nestIndex, control, register }: any) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `options[${nestIndex}].values`,
    keyName: "id",
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <InputWrapper key={item.id}>
            <TextFormInput
              control={control}
              name={`options[${nestIndex}].values[${k}]`}
            />

            <div>
              <StyledDeleteButton
                disabled={fields.length <= 2}
                type="button"
                onClick={() => {
                  remove(k);
                }}
              />
            </div>
          </InputWrapper>
        );
      })}

      <LongButton margin={!!fields.length}>
        <LongButtonText
          variant={TypographyVariant.BODY2}
          onClick={() => {
            append("");
          }}
        >
          Add a value
        </LongButtonText>
      </LongButton>
    </div>
  );
};

export default OptionValues;
