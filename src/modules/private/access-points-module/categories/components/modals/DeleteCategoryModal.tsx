import styled from "styled-components";
import {
  Button,
  ButtonVariant,
  TypographyVariant,
  DeleteButton,
  Typography,
  ModalHeader,
  InputDropdown,
  Item,
  InputItem,
} from "../../../../../../components/ui-kit";
import { useMemo, useState } from "react";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../../hooks/useNotification";
import { useDeleteCategory } from "../../hooks/useDeleteCategory";
import { useGetCategories } from "../../../hooks/useGetCategories";

const Wrapper = styled.div`
  width: 550px;
`;

const Content = styled.div`
  padding: 30px;
`;

const Fields = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const CancelButton = styled(Button)`
  margin-right: 10px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 10px;
  :nth-child(2n) {
    margin-bottom: 20px;
  }
`;

const FieldItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

const ProductsCount = styled.span`
  color: #027aff;
`;

interface DeleteCategoryModalProps {
  handleClose: () => void;
  dataForDelition?: {
    productsCount?: number;
    name?: string;
    id: string;
    depth: number;
  };
}

export const DeleteCategoryModal: React.FunctionComponent<
  DeleteCategoryModalProps
> = ({ handleClose, dataForDelition: dataForDeletion }) => {
  const { data: categories } = useGetCategories();
  const { showNotification } = useNotification();
  const { loading, deleteCategory } = useDeleteCategory();
  const [selectedCategoryToMove, setSelectedCategoryToMove] = useState<Item>({
    label: "",
    value: "",
  });
  const [selectedSubCategoryToMove, setSelectedSubCategoryToMove] =
    useState<Item>({
      label: "",
      value: "",
    });

  if (!dataForDeletion) return null;

  const mappedCategories = useMemo(() => {
    const sorted = categories
      .sort((a, b) => {
        return (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any);
      })
      .filter((el) => el.parent === null);
    return sorted
      .filter((el) => {
        return el._id !== dataForDeletion?.id;
      })
      .map((el) => ({ label: el.name, value: el._id }));
  }, [categories]);

  const mappedSubCategories = useMemo(() => {
    const subCategoriesList = categories
      .filter((el) => el._id === selectedCategoryToMove.value)
      .map((el) => el.subCategories)
      .flat();
    return subCategoriesList
      .filter((el) => {
        return el._id !== dataForDeletion?.id;
      })
      .map((sub) => {
        return { label: sub.name, value: sub._id };
      });
  }, [selectedCategoryToMove]);

  const onCategoryDelete = async () => {
    const nextId =
      selectedSubCategoryToMove.value !== ""
        ? selectedSubCategoryToMove.value
        : selectedCategoryToMove.value;
    await deleteCategory(dataForDeletion.id, nextId ?? "");
    handleClose();
    showNotification("Successfully deleted", NotificationTypes.SUCCESS);
  };

  const onCategoryChange = (e: InputItem) => {
    setSelectedCategoryToMove(e);
    setSelectedSubCategoryToMove({ label: "", value: "" });
  };
  return (
    <Wrapper>
      <ModalHeader
        title={
          dataForDeletion.depth === 0
            ? "Delete category"
            : "Delete sub-category"
        }
        handleClose={handleClose}
      />
      <Content>
        {dataForDeletion?.productsCount?.toString() === "0" ? (
          <>
            <Typography variant={TypographyVariant.HEADER2}>
              {dataForDeletion.depth === 0
                ? "Are you sure you want to delete this category and all associated sub-categories?"
                : "Are you sure you want to delete this sub-category?"}
            </Typography>
            <Buttons>
              <CancelButton
                onClick={handleClose}
                variant={ButtonVariant.OUTLINED}
              >
                Cancel
              </CancelButton>
              <DeleteButton loading={loading} onClick={onCategoryDelete}>
                Delete
              </DeleteButton>
            </Buttons>
          </>
        ) : (
          <>
            <StyledTypography variant={TypographyVariant.HEADER2}>
              To remove a category, first move the products
            </StyledTypography>
            <StyledTypography variant={TypographyVariant.BODY2}>
              {dataForDeletion?.name} category contains{" "}
              <ProductsCount>
                {dataForDeletion?.productsCount} products
              </ProductsCount>
              . Please choose category you want to move the products to before
              delete
            </StyledTypography>
            <StyledTypography variant={TypographyVariant.HEADER2}>
              Move products to:
            </StyledTypography>
            <Fields>
              <FieldItem>
                <InputDropdown
                  value={selectedCategoryToMove}
                  label="Category"
                  placeholder="Choose..."
                  fullWidth
                  onChange={(e: InputItem) => {
                    onCategoryChange(e);
                  }}
                  items={mappedCategories}
                />
              </FieldItem>
              <FieldItem>
                <InputDropdown
                  value={selectedSubCategoryToMove}
                  label="Sub-category (optional)"
                  placeholder="Choose..."
                  fullWidth
                  onChange={setSelectedSubCategoryToMove}
                  items={mappedSubCategories}
                  disabled={
                    !selectedCategoryToMove.value ||
                    mappedSubCategories.length === 0
                  }
                />
              </FieldItem>
            </Fields>
            <Buttons>
              <CancelButton
                onClick={handleClose}
                variant={ButtonVariant.OUTLINED}
              >
                Cancel
              </CancelButton>
              <DeleteButton
                loading={loading}
                disabled={selectedCategoryToMove.value === ""}
                onClick={onCategoryDelete}
              >
                Move and delete
              </DeleteButton>
            </Buttons>
          </>
        )}
      </Content>
    </Wrapper>
  );
};
