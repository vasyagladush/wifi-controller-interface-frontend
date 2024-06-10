import styled from "styled-components";
import {
  CheckboxFormField,
  DropdownFormField,
} from "../../../../../../components/form-fields";
// import { ProductStatus } from "@fena/toolkit-types";
import { Control, useWatch } from "react-hook-form";
import { NewProductFormValues, ProductIntegrationsSetup } from "../types";
import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";

const Wrapper = styled.div`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 30px;
`;

const StatusDropdownFormField = styled(DropdownFormField)`
  padding-top: 0;
`;

const Label = styled(Typography)`
  margin: 15px 0 5px 0;
`;

const StyledCheckboxFormField = styled(CheckboxFormField)`
  margin-bottom: 10px;
`;

interface StatusNChannelsProps {
  control: Control<NewProductFormValues>;
  availableIntegrationsSetup?: Array<[any, ProductIntegrationsSetup[]]>;
  isOptionsEditMode: boolean;
}

const StatusNChannels: React.FunctionComponent<StatusNChannelsProps> = ({
  control,
  availableIntegrationsSetup,
  isOptionsEditMode,
}) => {
  const statusItems = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  const statusValue = useWatch({ control, name: "status" });
  return (
    <Wrapper>
      <StatusDropdownFormField
        disabled={isOptionsEditMode}
        label="Product Status"
        required
        name="status"
        control={control}
        items={statusItems}
        placeholder="Active"
        value={statusValue}
      />
      <Label variant={TypographyVariant.HEADER3}>Sales channels:</Label>

      <StyledCheckboxFormField
        name="allowListingOnMobile"
        label={<Typography>Sync to Mobile</Typography>}
        control={control}
        disabled={isOptionsEditMode}
      />

      {availableIntegrationsSetup?.length ? (
        availableIntegrationsSetup?.map((parentEl, parentIndex) => {
          return (
            <div key={parentIndex}>
              <Typography variant={TypographyVariant.HEADER3}>
                {(parentEl[0] as string).charAt(0).toUpperCase() +
                  (parentEl[0] as string).slice(1)}
              </Typography>
              {parentEl[1].map((nestEl, nestIndex) => {
                return (
                  <StyledCheckboxFormField
                    key={nestEl.id}
                    name={`availableIntegrationsSetup.${parentIndex}.[1].${nestIndex}.enabled`}
                    label={<Typography>{nestEl.name}</Typography>}
                    control={control}
                    disabled={isOptionsEditMode}
                  />
                );
              })}
            </div>
          );
        })
      ) : (
        <Typography color="#495B6C" variant={TypographyVariant.BODY7}>
          No channels found
        </Typography>
      )}
    </Wrapper>
  );
};

export default StatusNChannels;
