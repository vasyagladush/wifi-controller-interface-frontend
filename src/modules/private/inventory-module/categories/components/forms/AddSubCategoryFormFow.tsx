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

const Form = styled.form<{ hasNoSubRows: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cce4ff;
  padding: ${(props) =>
    props.hasNoSubRows ? "8px 15px 8px 72px" : "8px 15px 8px 142px"};
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

const CrossWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Top = styled.div`
  display: flex;
  gap: 8px;
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
  parent: any;
}
export const AddSubCategoryFormRow: React.FunctionComponent<
  AddCategoryFormRowProps
> = ({ handleTableUpdate, handleHideForm, parent }) => {
  const [file, setFile] = useState<File | null>(null);
  const { loading, createCategory } = useCreateCategory();
  const { refreshCategories } = useGetCategories();

  const { control, handleSubmit } = useForm<AddCategoryFormValues>({
    mode: "onSubmit",
    defaultValues: addCategoryFormDefaultValues,
    resolver: yupResolver(categoryCreationSchema),
  });

  const onSubmit = async (values: AddCategoryFormValues) => {
    await createCategory(values, file, parent.original._id);
    refreshCategories();
    handleHideForm();
    handleTableUpdate?.();
  };

  const hasNoSubRows = parent.subRows.length === 0;

  return (
    <td colSpan={4}>
      <Form hasNoSubRows={hasNoSubRows} onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Sub-category name *"
            />
          </Top>
          <StyledTextFormArea
            control={control}
            name="description"
            placeholder="Sub-category description"
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
