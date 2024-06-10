import { useState } from "react";
import { Plus } from "../../../../../../components/icons";
import { TypographyVariant } from "../../../../../../components/ui-kit";
import { AddCategoryFormRow } from "../forms/AddCategoryFormRow";
import { AddCategory, CreationButton, CustomCreation } from "../../styles";

interface CategoryTableCreationProps {
  handleTableUpdate?: () => void;
}

export const CategoryTablePatentCreation: React.FunctionComponent<
  CategoryTableCreationProps
> = ({ handleTableUpdate }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showParentForm = () => {
    setIsFormVisible(true);
  };

  const hideParentForm = () => {
    setIsFormVisible(false);
  };

  return (
    <CustomCreation>
      {!isFormVisible ? (
        <td colSpan={4}>
          <CreationButton onClick={showParentForm}>
            <Plus color="#027aff" />
            <AddCategory variant={TypographyVariant.BODY6}>
              Add category
            </AddCategory>
          </CreationButton>
        </td>
      ) : (
        <AddCategoryFormRow
          handleTableUpdate={handleTableUpdate}
          handleHideForm={hideParentForm}
        />
      )}
    </CustomCreation>
  );
};
