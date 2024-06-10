import { useState } from "react";
import { Plus } from "../../../../../../components/icons";
import { TypographyVariant } from "../../../../../../components/ui-kit";
import { AddSubCategoryFormRow } from "../forms/AddSubCategoryFormFow";
import {
  AddCategory,
  CustomCreation,
  SubCategoryCreationButton,
} from "../../styles";

interface CategoryTableSubCategoryCreationProps {
  handleTableUpdate?: () => void;
  row?: any;
}
export const CategoryTableSubCategoryCreation: React.FunctionComponent<
  CategoryTableSubCategoryCreationProps
> = ({ handleTableUpdate, row }) => {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);

  const showChildForm = (rowId: string) => {
    setSelectedRowId(rowId);
  };

  const hideChildForm = () => {
    setSelectedRowId(null);
  };

  const isRowSelected = row.id === selectedRowId;

  return (
    <CustomCreation>
      {!isRowSelected ? (
        <td colSpan={4}>
          <SubCategoryCreationButton
            hasNoSubRows={row.subRows.length === 0}
            onClick={() => {
              showChildForm(row.id);
            }}
          >
            <Plus color="#027aff" />
            <AddCategory variant={TypographyVariant.BODY6}>
              Add sub-category
            </AddCategory>
          </SubCategoryCreationButton>
        </td>
      ) : (
        <AddSubCategoryFormRow
          parent={row}
          handleHideForm={hideChildForm}
          handleTableUpdate={handleTableUpdate}
        />
      )}
    </CustomCreation>
  );
};
