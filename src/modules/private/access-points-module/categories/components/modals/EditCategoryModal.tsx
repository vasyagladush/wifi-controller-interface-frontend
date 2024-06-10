import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  Button,
  SingleImageInput,
  ModalHeader,
  ButtonVariant,
} from "../../../../../../components/ui-kit";
import { EditData } from "../table";
import {
  DropdownFormField,
  TextFormInput,
  TextFormArea,
} from "../../../../../../components/form-fields";
import {
  addCategoryFormDefaultValues,
  type AddCategoryFormValues,
} from "../../types";
import { categoryCreationSchema } from "../../validation";
import { useEditCategory } from "../../hooks/useEditCategory";
import { useGetCategories } from "../../../hooks/useGetCategories";

const Wrapper = styled.div`
  width: 550px;
`;

const Top = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const TopForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 100%;
`;

const StyledTextFormInput = styled(TextFormInput)`
  padding-top: 0;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const CancelButton = styled(Button)`
  margin-right: 10px;
`;

interface EditCategoryModalProps {
  handleClose: () => void;
  data: EditData;
}

export const EditCategoryModal: React.FunctionComponent<
  EditCategoryModalProps
> = ({ handleClose, data }) => {
  const { data: categories } = useGetCategories();
  const { editCategory, loading } = useEditCategory();
  const { control, handleSubmit, setValue, reset, watch } =
    useForm<AddCategoryFormValues>({
      mode: "onChange",
      defaultValues: addCategoryFormDefaultValues,
      resolver: yupResolver(categoryCreationSchema),
    });

  const watchParent = watch("parent");

  const [file, setFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | undefined>(undefined);

  const mappedCategories = useMemo(() => {
    const sortedCategories = categories
      .sort((a, b) => {
        return (
          new Date(String(b.createdAt)).getTime() -
          new Date(String(a.createdAt)).getTime()
        );
      })
      .filter((el) => el.parent === null);
    return sortedCategories.map((el) => ({
      label: el.name,
      value: el._id,
    }));
  }, [categories]);

  useEffect(() => {
    setValue("description", data.description || "");
    setValue("name", data.name || "");
    setValue("parent", data.parent);
    setLogoUrl(data.logoUrl);
  }, [data, categories]);

  const closeModal = () => {
    handleClose();
    reset({ ...addCategoryFormDefaultValues });
    setLogoUrl(undefined);
    setFile(null);
  };

  const onEditSubmit = async (values: AddCategoryFormValues) => {
    await editCategory(data.id, values, file, file === null && !logoUrl);

    closeModal();
  };

  return (
    <Wrapper>
      <ModalHeader
        title={data.isSubCategory ? "Edit sub-category" : "Edit category"}
        handleClose={() => {
          closeModal();
        }}
      />
      <Form onSubmit={handleSubmit(onEditSubmit)}>
        <Top>
          <div>
            <SingleImageInput
              value={{ fileValue: file, urlValue: logoUrl }}
              buttonWidth={200}
              buttonHeight={200}
              handleFile={(file: File | null) => {
                setFile(file);
                setLogoUrl(undefined);
              }}
            />
          </div>

          <TopForm>
            <StyledTextFormInput
              control={control}
              name="name"
              label="Category name"
              required
            />

            {data.isSubCategory && (
              <DropdownFormField
                value={watchParent}
                fullWidth
                control={control}
                name="parent"
                label="Parent category"
                items={mappedCategories}
              />
            )}

            <TextFormArea
              control={control}
              name="description"
              label="Description"
              placeholder="Type here..."
            />
          </TopForm>
        </Top>

        <Buttons>
          <CancelButton
            type="button"
            onClick={closeModal}
            variant={ButtonVariant.OUTLINED}
          >
            Cancel
          </CancelButton>
          <Button
            loading={loading}
            type="submit"
            variant={ButtonVariant.CONTAINED}
          >
            Save
          </Button>
        </Buttons>
      </Form>
    </Wrapper>
  );
};
