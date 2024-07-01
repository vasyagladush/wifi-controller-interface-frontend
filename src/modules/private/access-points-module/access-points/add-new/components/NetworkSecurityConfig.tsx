import { Control, UseFormWatch, useWatch } from "react-hook-form";
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

const WIRELESS_SECURITY_TYPE_DROPDOWN_MAP = [
  { label: "Option 1", value: "0" },
  { label: "Option 2", value: "1" },
];
const MAC_ACL_TYPE_DROPDOWN_MAP = [
  { label: "Option 1", value: "0" },
  { label: "Option 2", value: "1" },
];

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

interface NetworkSecurityConfigProps {
  control: Control<AccessPointFormValues>;
}

const NetworkSecurityConfig: React.FunctionComponent<
  NetworkSecurityConfigProps
> = ({ control }) => {
  const wirelessSecurityTypeValue = useWatch({
    control,
    name: "network.security.wirelessSecurityType",
  });

  const macACLTypeValue = useWatch({
    control,
    name: "network.security.macACLType",
  });

  return (
    <Container>
      <Label color="#556CB1" variant={TypographyVariant.HEADER2}>
        Network security configuration
      </Label>
      <ViewRow>
        <DropdownFormField
          label="Wireless Security Type"
          placeholder="Wireless Security Type"
          name="network.security.wirelessSecurityType"
          control={control}
          items={WIRELESS_SECURITY_TYPE_DROPDOWN_MAP}
          value={wirelessSecurityTypeValue}
        />
        <DropdownFormField
          label="MAC ACL Type"
          placeholder="MAC ACL Type"
          name="network.security.macACLType"
          control={control}
          items={MAC_ACL_TYPE_DROPDOWN_MAP}
          value={macACLTypeValue}
        />
      </ViewRow>
      <ViewRow>
        <TextFormInput
          name={"network.security.eap"}
          control={control}
          label="EAP"
          placeholder="EAP"
        />
        <TextFormInput
          name={"network.security.radius"}
          control={control}
          label="Radius"
          placeholder="Radius"
        />
      </ViewRow>
    </Container>
  );
};

export default NetworkSecurityConfig;
