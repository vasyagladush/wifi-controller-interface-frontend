import React from "react";
import { type Control } from "react-hook-form";
import styled from "styled-components";
import {
  TextFormInput,
  TextFormArea,
  DropdownFormField,
  CheckboxFormField,
} from "../../../../../../components/form-fields";
import { CategoryApiType } from "../../../../../../util/types";

const Wrapper = styled.div``;

const AddCategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

interface AddCategoryFormProps {
  control: Control<any>;
  categories: CategoryApiType[];
  isSubCategory: boolean;
}

export const AddCategoryForm: React.FunctionComponent<AddCategoryFormProps> = ({
  control,
  categories,
  isSubCategory,
}) => {
  const mappedCategories = categories.map((el) => ({
    label: el.name,
    value: el._id,
  }));
  return (
    <Wrapper>
      <TextFormInput control={control} name="name" label="Category name" />
      <TextFormArea
        control={control}
        name="description"
        label="Description"
        placeholder="Type here..."
      />
      <DropdownFormField
        fullWidth
        control={control}
        name="subCategory"
        label="Category"
        placeholder="Choose..."
        items={mappedCategories}
        disabled={!isSubCategory}
      />
      <AddCategoryWrapper>
        <CheckboxFormField
          name="isSubCategory"
          control={control}
          label="Add as sub-category"
          checked={isSubCategory}
        />
      </AddCategoryWrapper>
    </Wrapper>
  );
};
