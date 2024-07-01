import { Control, UseFormWatch } from "react-hook-form";
import { AccessPointFormValues } from "../types";
import {
  CheckboxFormField,
  DropdownFormField,
  TextFormInput,
} from "../../../../../../components/form-fields";
import styled from "styled-components";
import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { dropdownMappedCountryCodes } from "../../../../../../constants/dropdown-countries";
import { QuestionMark } from "../../../../../../components/ui-kit/tooltip/QuestionMark";
import { ViewRow } from "./ViewRow";

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

const Label = styled(Typography)`
  margin-bottom: 20px;
`;

const StyledCheckBoxFormField = styled(CheckboxFormField)`
  margin-top: 20px;
`;

interface NetworkWirelessConfigProps {
  control: Control<AccessPointFormValues>;
}

const NetworkWirelessConfig: React.FunctionComponent<
  NetworkWirelessConfigProps
> = ({ control }) => {
  return (
    <Container>
      <Label color="#556CB1" variant={TypographyVariant.HEADER2}>
        Network wireless configuration
      </Label>
      <ViewRow>
        <TextFormInput
          name={"network.wireless.beaconInterval"}
          control={control}
          label="Beacon Interval"
          placeholder="1"
        />
        <TextFormInput
          name={"network.wireless.rtsCtsThreshold"}
          control={control}
          label="RTS/CTS Threshold"
          placeholder="1"
        />
      </ViewRow>
      <StyledCheckBoxFormField
        label="HT/VHT on/off"
        name="network.wireless.vht"
        control={control}
      />
      <Typography variant={TypographyVariant.BODY7} style={{ marginTop: 6 }}>
        Description if needed
      </Typography>
      <StyledCheckBoxFormField
        label="ACS on/off"
        name="network.wireless.acs"
        control={control}
      />
      <Typography variant={TypographyVariant.BODY7} style={{ marginTop: 6 }}>
        Description if needed
      </Typography>
    </Container>
  );
};

export default NetworkWirelessConfig;
