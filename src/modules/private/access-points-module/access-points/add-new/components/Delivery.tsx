import React, { type FC } from "react";
import styled from "styled-components";
import { Control, useWatch } from "react-hook-form";
import { NewProductFormValues } from "../types";
import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import {
  DropdownFormField,
  TextFormInput,
} from "../../../../../../components/form-fields";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  //margin-left: 40px;
  margin-top: 10px;
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;

const ViewRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  div {
    flex: 1;
  }
`;

const deliveryTime = [
  { label: "Same day", value: "Same day" },
  { label: "Next day", value: "Same day" },
  { label: "48 hours", value: "Same day" },
  { label: "3-5 days", value: "Same day" },
  { label: "5+ days", value: "Same day" },
  { label: "Pickup only", value: "Same day" },
];
export interface IDeliveryInfoProps {
  control: Control<NewProductFormValues>;
  isOptionsEditMode: boolean;
}

const DeliveryInfo: FC<IDeliveryInfoProps> = ({
  control,
  isOptionsEditMode,
}) => {
  const deliveryTimeValue = useWatch({
    control,
    name: "variant.deliveryInfo.deliveryTime",
  });

  const heightUnitValue = useWatch({
    control,
    name: "variant.deliveryInfo.heightUnit",
  });

  const widthUnitValue = useWatch({
    control,
    name: "variant.deliveryInfo.widthUnit",
  });

  const lengthUnitValue = useWatch({
    control,
    name: "variant.deliveryInfo.lengthUnit",
  });

  const weightUnitValue = useWatch({
    control,
    name: "variant.deliveryInfo.weightUnit",
  });

  const volumeUnitValue = useWatch({
    control,
    name: "variant.deliveryInfo.volumeUnit",
  });
  return (
    <Container>
      <Typography
        variant={TypographyVariant.HEADER2}
        style={{ color: "#556CB1" }}
      >
        Delivery
      </Typography>
      {/* <ViewRow style={{ alignItems: "center" }}>
        <UnitsDropDownFormField
          label={"Height"}
          name={"variant.deliveryInfo.height"}
          unitName={"variant.deliveryInfo.heightUnit"}
          unitValue={heightUnitValue}
          unitType={UnitTypes.LENGTH}
          control={control}
          disabled={isOptionsEditMode}
        />
        <UnitsDropDownFormField
          label={"Width"}
          name={"variant.deliveryInfo.width"}
          unitName={"variant.deliveryInfo.widthUnit"}
          unitValue={widthUnitValue}
          unitType={UnitTypes.LENGTH}
          control={control}
          disabled={isOptionsEditMode}
        />
        <UnitsDropDownFormField
          label={"Length"}
          name={"variant.deliveryInfo.length"}
          unitName={"variant.deliveryInfo.lengthUnit"}
          unitValue={lengthUnitValue}
          unitType={UnitTypes.LENGTH}
          control={control}
          disabled={isOptionsEditMode}
        />
      </ViewRow> */}
      <ViewRow style={{ alignItems: "center" }}>
        {/* <UnitsDropDownFormField
          label={"Weight"}
          name={"variant.deliveryInfo.weight"}
          unitName={"variant.deliveryInfo.weightUnit"}
          unitValue={weightUnitValue}
          unitType={UnitTypes.WEIGHT}
          control={control}
          disabled={isOptionsEditMode}
        />
        <UnitsDropDownFormField
          label={"Volume"}
          name={"variant.deliveryInfo.volume"}
          unitName={"variant.deliveryInfo.volumeUnit"}
          unitValue={volumeUnitValue}
          unitType={UnitTypes.VOLUME}
          control={control}
          disabled={isOptionsEditMode}
        /> */}
        <TextFormInput
          name={"variant.deliveryInfo.packagingItems"}
          control={control}
          label="Packaging items"
          disabled={isOptionsEditMode}
        />
        <DropdownFormField
          fullWidth
          disableResponsiveMaxHeight
          label="Delivery time"
          name="variant.deliveryInfo.deliveryTime"
          control={control}
          items={deliveryTime}
          value={deliveryTimeValue}
          disabled={isOptionsEditMode}
        />
      </ViewRow>
    </Container>
  );
};
export default DeliveryInfo;
