import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { Control, UseFormSetValue, useWatch } from "react-hook-form";
import {
  TextFormInput,
} from "../../../../../../components/form-fields";
import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { NewProductFormValues } from "../types";

const ViewRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px;
  margin-top: 10px;
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;

interface IPricingProps {
  control: Control<NewProductFormValues>;
  isOptionsEditMode: boolean;
  setValue: UseFormSetValue<NewProductFormValues>;
}

const Pricing: FC<IPricingProps> = ({
  control,
  isOptionsEditMode,
  setValue,
}) => {
  const cost = useWatch({ control, name: "variant.pricing.cost" });
  const vat = useWatch({ control, name: "variant.pricing.VAT" });
  const vatPrice = useWatch({
    control,
    name: "variant.pricing.priceWithVAT",
  });

  useEffect(() => {
    const costNumber = parseFloat(cost);
    const vatPriceNumber = parseFloat(vatPrice || "0");
    const excVat = (vatPriceNumber / (1 + Number(vat) / 100)).toFixed(2);
    const excVATNum = parseFloat(excVat);
    const markup = (((excVATNum - costNumber) / costNumber) * 100).toFixed(2);
    const mark = parseFloat(markup);

    setValue("variant.pricing.price", excVat, { shouldValidate: true });

    if (cost && vatPriceNumber && !isNaN(mark)) {
      setValue("variant.pricing.markup", mark.toString(), {
        shouldValidate: true,
      });
    } else {
      setValue("variant.pricing.markup", "", {
        shouldValidate: true,
      });
    }
  }, [vatPrice, cost, vat]);

  return (
    <Container>
      <Typography
        variant={TypographyVariant.HEADER2}
        style={{ color: "#2a3b89" }}
      >
        Pricing
      </Typography>
      <ViewRow>
        <TextFormInput
          name="variant.pricing.markup"
          control={control}
          label="Markup (%)"
          disabled
        />
      </ViewRow>
      <ViewRow>
        <TextFormInput
          name="variant.pricing.VAT"
          control={control}
          label="VAT (%)"
          required
          placeholder="10"
          disabled={isOptionsEditMode}
        />
      </ViewRow>

      <ViewRow>
        <TextFormInput
          name="variant.pricing.minOrderQty"
          control={control}
          label="Minimum order quantity"
          required
          placeholder="1"
          disabled={isOptionsEditMode}
        />
        <TextFormInput
          name="variant.pricing.maxOrderQty"
          control={control}
          label="Maximum order quantity"
          required
          placeholder="10"
          disabled={isOptionsEditMode}
        />
      </ViewRow>
      <ViewRow>
        <TextFormInput
          name="variant.pricing.wholeSaleQty"
          control={control}
          label="Wholesale quantity"
          placeholder="100"
          disabled={isOptionsEditMode}
        />
      </ViewRow>
    </Container>
  );
};
export default Pricing;
