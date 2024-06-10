import styled from "styled-components";
import React, { FC, useMemo } from "react";
import { Control, useWatch } from "react-hook-form";
import {
  CheckboxFormField,
  DropdownFormField,
  TextFormInput,
} from "../../../../../../components/form-fields";
import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { NewProductFormValues } from "../types";
import { DatePickerFormField } from "../../../../../../components/form-fields/DatePickerFormField";
import { useCategoriesContext } from "../../../context/CategoriesContextProvider";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px;
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;

const StyledDropdownFormField = styled(DropdownFormField)`
  display: flex;
  flex: 1;
`;

const ViewRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const AddRemoveWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
`;

const CategoryWrapper = styled.div``;

const StyledCheckBoxFormField = styled(CheckboxFormField)`
  margin-top: 25px;
`;

const CategoryDropdownFormField = styled(DropdownFormField)<{
  widthPaddingTop?: boolean;
}>`
  padding-top: ${(props) => (props.widthPaddingTop ? "27px" : 0)};
`;

export interface IBasicInfoProps {
  control: Control<NewProductFormValues>;
  currentCategories: Array<{ category?: string }> | undefined;
  isOptionsEditMode: boolean;
  append: () => void;
  remove: (index: number) => void;
}

const BasicInfo: FC<IBasicInfoProps> = ({
  control,
  currentCategories,
  isOptionsEditMode,
  append,
  remove,
}) => {
  const { categories } = useCategoriesContext();

  const categoriesDropdownItems = useMemo(() => {
    const mappedCategories = categories.flatMap((category) => {
      const mainCategoryItem = {
        label: category.name,
        value: category._id,
      };

      if (category.subCategories && category.subCategories.length > 0) {
        const subCategoryItems = category.subCategories.map((subCategory: any) => ({
          label: subCategory.name,
          value: subCategory._id,
        }));

        return [mainCategoryItem, ...subCategoryItems];
      }

      return [mainCategoryItem];
    });

    return mappedCategories;
  }, [categories]);

  const isTrackable = useWatch({ control, name: "isTrackable" });

  const handleAddCategory = () => {
    append();
  };

  return (
    <Container>
      <Typography color="#2a3b89" variant={TypographyVariant.HEADER2}>
        Product basic information
      </Typography>

      <GridSection>
        <TextFormInput
          control={control}
          name="name"
          label="Name"
          required
          placeholder="Name"
          disabled={isOptionsEditMode}
        />
        <DatePickerFormField
          name="publishedDate"
          control={control}
          label="Published date"
          disabled={isOptionsEditMode}
        />

        {currentCategories?.map((item, index) => {
          const filteredOptions = categoriesDropdownItems.filter(
            (option) =>
              !currentCategories.some(
                (category, otherIndex) =>
                  category.category === option.value && otherIndex !== index
              )
          );
          return (
            <CategoryWrapper key={item.category ?? index}>
              <CategoryDropdownFormField
                name={`categories.${index}.category`}
                fullWidth
                label={index === 0 ? "Category" : undefined}
                value={item.category}
                control={control}
                items={filteredOptions}
                withSearch
                placeholder="Select category"
                widthPaddingTop={currentCategories.length >= 1 && index === 1}
                disabled={isOptionsEditMode}
              />
              {index !== 0 && !isOptionsEditMode && (
                <AddRemoveWrapper>
                  <Typography
                    variant={TypographyVariant.BODY4}
                    color="#38B6FF"
                    onClick={() => {
                      remove(index);
                    }}
                    clickable
                  >
                    - Remove category
                  </Typography>
                </AddRemoveWrapper>
              )}
              {currentCategories.length <= 2 &&
                index === 0 &&
                !isOptionsEditMode && (
                  <AddRemoveWrapper>
                    <Typography
                      variant={TypographyVariant.BODY4}
                      color="#38B6FF"
                      onClick={handleAddCategory}
                      clickable
                    >
                      + Add category
                    </Typography>
                  </AddRemoveWrapper>
                )}
            </CategoryWrapper>
          );
        })}
      </GridSection>

      <StyledCheckBoxFormField
        label="Track quantity"
        name="isTrackable"
        control={control}
        disabled={isOptionsEditMode}
      />
      <Typography variant={TypographyVariant.BODY7} style={{ marginTop: 6 }}>
        Set the Low stock threshold and High stock threshold. Anything between
        these levels will be marked as Medium stock
      </Typography>
      {isTrackable && (
        <ViewRow>
          <TextFormInput
            name={"statusSettings.lowStockThreshold"}
            control={control}
            label="Low stock level"
            required
            disabled={isOptionsEditMode}
          />
          <TextFormInput
            name={"statusSettings.highStockThreshold"}
            control={control}
            label="High stock level"
            required
            disabled={isOptionsEditMode}
          />
        </ViewRow>
      )}
      <StyledCheckBoxFormField
        label="Continue selling when out of stock"
        name="isSellable"
        control={control}
        disabled={isOptionsEditMode}
      />
    </Container>
  );
};
export default BasicInfo;
