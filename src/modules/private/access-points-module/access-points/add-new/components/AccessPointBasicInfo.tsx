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
import { AccessPointFormValues } from "../types";
import { DatePickerFormField } from "../../../../../../components/form-fields/DatePickerFormField";

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
  control: Control<AccessPointFormValues>;
}

const BasicInfo: FC<IBasicInfoProps> = ({
  control,
}) => {
  return (
    <Container>
      <Typography color="#556CB1" variant={TypographyVariant.HEADER2}>
        Access point basic information
      </Typography>

      <GridSection>
        <TextFormInput
          control={control}
          name="name"
          label="Name"
          required
          placeholder="Name"
          disabled={true}
        />
        <TextFormInput
          control={control}
          name="deviceId"
          label="Device ID"
          required
          placeholder="ID"
          disabled={true}
        />
        <TextFormInput
          control={control}
          name="ip"
          label="IP Address"
          required
          placeholder="192.168.0.1"
          disabled={true}
        />
      </GridSection>
    </Container>
  );
};
export default BasicInfo;
