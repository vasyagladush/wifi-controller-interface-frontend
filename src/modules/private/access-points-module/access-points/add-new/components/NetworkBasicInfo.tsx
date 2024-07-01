import { Control, UseFormWatch, useWatch } from "react-hook-form";
import { NewAccessPointFormValues } from "../types";
import {
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

interface NetworkBasicInfoProps {
  control: Control<NewAccessPointFormValues>;
}

const NetworkBasicInfo: React.FunctionComponent<NetworkBasicInfoProps> = ({
  control,
}) => {
  const countryCodeValue = useWatch({ control, name: "network.countryCode" });

  return (
    <Container>
      <Label color="#556CB1" variant={TypographyVariant.HEADER2}>
        Network basic information
      </Label>
      <ViewRow>
        <TextFormInput
          name={"network.name"}
          control={control}
          label="Name"
          placeholder="Network name"
          required
        />
        <TextFormInput
          name={"network.ssid"}
          control={control}
          label="SSID"
          placeholder="1"
        />
      </ViewRow>
      <ViewRow>
        <TextFormInput
          name={"network.channels"}
          control={control}
          label="Channels"
          placeholder="1-12"
        />
        <TextFormInput
          name={"network.secType"}
          control={control}
          label={
            <QuestionMark
              id="networkSecType"
              label="Security Type"
              tooltipText="Something about security type"
            />
          }
          placeholder="Security Type"
        />
        <DropdownFormField
          name="countryCode"
          value={countryCodeValue}
          placeholder="Select country code"
          control={control}
          label="Country Code"
          items={dropdownMappedCountryCodes}
          required
          fullWidth
          withCountryFlags
          withSearch
        />
      </ViewRow>
    </Container>
  );
};

export default NetworkBasicInfo;
