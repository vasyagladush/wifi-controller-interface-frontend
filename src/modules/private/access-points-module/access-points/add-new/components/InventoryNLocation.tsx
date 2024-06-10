import React, { FC } from "react";
import styled from "styled-components";
import { Control } from "react-hook-form";
import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { TextFormInput } from "../../../../../../components/form-fields";
import { NewProductFormValues } from "../types";

const InventoryBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin-top: 10px;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;
const InventoryLocationBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 182px;
  margin-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 30px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;

const ViewRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

interface IInventoryLocationProps {
  control: Control<NewProductFormValues>;
  editingWithPoliciesAvailable?: boolean;
  isOptionsEditMode: boolean;
}

const InventoryNLocation: FC<IInventoryLocationProps> = ({
  control,
  editingWithPoliciesAvailable,
  isOptionsEditMode,
}) => {
  return (
    <>
      {editingWithPoliciesAvailable && (
        <InventoryBox>
          <Typography
            variant={TypographyVariant.HEADER2}
            style={{ color: "#556CB1" }}
          >
            Inventory
          </Typography>
          <ViewRow>
            <TextFormInput
              name={"variant.sku"}
              control={control}
              label="SKU"
              placeholder="PlK81789"
              disabled={isOptionsEditMode}
            />
            <TextFormInput
              name={"variant.inventoryInfo.qty"}
              control={control}
              label="Stock quantity"
              disabled={isOptionsEditMode}
            />
            <TextFormInput
              name={"variant.inventoryInfo.barcode"}
              control={control}
              label="Barcode"
              disabled={isOptionsEditMode}
            />
          </ViewRow>
        </InventoryBox>
      )}
      <InventoryLocationBox>
        <Typography
          variant={TypographyVariant.HEADER2}
          style={{ color: "#556CB1", marginBottom: 10 }}
        >
          Inventory location
        </Typography>
        <ViewRow>
          <TextFormInput
            name={"variant.inventoryInfo.room"}
            control={control}
            label="Room"
            disabled={isOptionsEditMode}
          />
          <TextFormInput
            name={"variant.inventoryInfo.shelf"}
            control={control}
            label="Shelf"
            disabled={isOptionsEditMode}
          />
        </ViewRow>
      </InventoryLocationBox>
    </>
  );
};

export default InventoryNLocation;
