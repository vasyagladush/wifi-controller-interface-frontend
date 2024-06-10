import styled from "styled-components";
import React, { FC } from "react";
import { Control } from "react-hook-form";

import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { NewProductFormValues } from "../types";
import { CheckboxFormField } from "../../../../../../components/form-fields";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px;
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin-top: 10px;
`;

const Description = styled(Typography)`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const StyledCheckboxFormField = styled(CheckboxFormField)`
  margin-top: 10px;
`;

const Span = styled.span`
  font-weight: 500;
`;

export interface SyncSettinsProps {
  control: Control<NewProductFormValues>;
  isOptionsEditMode: boolean;
}

const ProductSyncSettings: FC<SyncSettinsProps> = ({
  control,

  isOptionsEditMode,
}) => {
  return (
    <Container>
      <Typography color="#2a3b89" variant={TypographyVariant.HEADER2}>
        Product and image sync settings
      </Typography>
      <Description color="#495b6c" variant={TypographyVariant.BODY13_REGULAR}>
        {" "}
        By ticking the boxes below, you indicate you want to update product
        descriptions and images in all connected sales channels (all channels
        under <Span>Settings</Span> &gt; <Span>Integrations</Span> &gt;&nbsp;
        <Span>eCommerce</Span>). This is a product level setting and applies to
        all variants. If you want to update product descriptions and images on
        individual stores, we recommend changing those on those store directly.
      </Description>
      <StyledCheckboxFormField
        label="Update product descriptions on the connected sales channels"
        name="isSyncingDescription"
        control={control}
        disabled={isOptionsEditMode}
      />
      <StyledCheckboxFormField
        label="Update images on the connected sales channels"
        name="isSyncingImages"
        control={control}
        disabled={isOptionsEditMode}
      />
      <StyledCheckboxFormField
        label="Update categories on the connected sales channels"
        name="isSyncingCategories"
        control={control}
        disabled={isOptionsEditMode}
      />
    </Container>
  );
};
export default ProductSyncSettings;
