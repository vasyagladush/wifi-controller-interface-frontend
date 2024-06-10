import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Cross } from "../../../../../../components/icons";
import {
  Button,
  ButtonVariant,
  SingleImageInput,
} from "../../../../../../components/ui-kit";
import {
  TextFormArea,
  TextFormInput,
} from "../../../../../../components/form-fields";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryCreationSchema } from "../../validation";
import {
  addCategoryFormDefaultValues,
  AddCategoryFormValues,
} from "../../types";
import { useCreateCategory } from "../../hooks/useCreateCategory";
import { useGetCategories } from "../../../hooks/useGetCategories";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cce4ff;
  padding: 8px 15px 8px 40px;
`;

const StyledTextFormInput = styled(TextFormInput)`
  padding-top: 0;
`;

const StyledTextFormArea = styled(TextFormArea)`
  padding-top: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  padding: 0 10px;
`;

const Top = styled.div`
  display: flex;
  gap: 8px;
`;

const CrossWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ImagePicker = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCross = styled(Cross)`
  cursor: pointer;
`;

interface AddCategoryFormRowProps {
  handleHideForm: () => void;
  handleTableUpdate?: () => void;
}
export const AddCategoryFormRow: React.FunctionComponent<
  AddCategoryFormRowProps
> = ({ handleHideForm, handleTableUpdate }) => {
  const [file, setFile] = useState<File | null>(null);
  const { loading, createCategory } = useCreateCategory();
  const { refreshCategories } = useGetCategories();

  const { control, handleSubmit } = useForm<AddCategoryFormValues>({
    mode: "onSubmit",
    defaultValues: addCategoryFormDefaultValues,
    resolver: yupResolver(categoryCreationSchema),
  });

  const onSubmit = async (values: AddCategoryFormValues) => {
    await createCategory(values, file);
    refreshCategories();
    handleHideForm();
    handleTableUpdate?.();
  };

  return (
    <td colSpan={4}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ImagePicker>
          <SingleImageInput
            handleFile={(file) => {
              setFile(file);
            }}
            value={{ fileValue: file }}
            buttonWidth={54}
            buttonHeight={54}
          />
        </ImagePicker>
        <InputWrapper>
          <Top>
            <StyledTextFormInput
              control={control}
              name="name"
              placeholder="Category name *"
            />
          </Top>

          <StyledTextFormArea
            control={control}
            name="description"
            placeholder="Category description"
          />
        </InputWrapper>
        <Buttons>
          <Button
            loading={loading}
            type="submit"
            variant={ButtonVariant.CONTAINED}
          >
            Add
          </Button>
          <CrossWrapper>
            <StyledCross onClick={handleHideForm} />
          </CrossWrapper>
        </Buttons>
      </Form>
    </td>
  );
};
