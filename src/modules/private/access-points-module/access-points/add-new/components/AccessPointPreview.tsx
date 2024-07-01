import { Control, useWatch } from "react-hook-form";
import { NewAccessPointFormValues } from "../types";
import styled from "styled-components";
import {
  Status,
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { AccessPoint, ImageIcon } from "../../../../../../components/icons";

const Preview = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 30px;
`;

const PreviewContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 160px;
  gap: 10px;
  p {
    word-wrap: break-word;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  width: 70px;
  height: 55px;
  border-radius: 5px;
  margin-right: 15px;
  background-color: transparent;
`;

const Name = styled(Typography)`
  margin-bottom: 5px;
`;

const NetworksCount = styled(Typography)`
  color: #495b6c;
  margin-top: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 5px;

  z-index: 2;
  svg {
    scale: 3.5;
  }
`;

const NetworkName = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
`;

interface AccessPointPreviewInterface {
  control: Control<NewAccessPointFormValues>;
  networksLength: number;
}

const AccessPointPreview: React.FunctionComponent<AccessPointPreviewInterface> = ({
  control,
  networksLength,
}) => {
  const deviceId = useWatch({ control, name: "deviceId" });
  const nameValue = useWatch({ control, name: "name" });
  const networkName = useWatch({
    control,
    name: "network.name",
  });

  return (
    <Preview>
      <ImageWrapper>
        <IconWrapper>
          <AccessPoint style={{ color: "#00bc82" }} />
        </IconWrapper>
      </ImageWrapper>

      <PreviewContent>
        <Names>
          <Name variant={TypographyVariant.HEADER2}>
            {!nameValue ?? nameValue !== "" ? "Access point name" : nameValue}
          </Name>
          <NetworkName>{networkName}</NetworkName>
        </Names>
        <Name variant={TypographyVariant.BODY13_REGULAR}>
          Device ID: {!deviceId ?? deviceId !== undefined ? 0 : deviceId}
        </Name>
        {}{" "}
        {networksLength > 1 && (
          <NetworksCount variant={TypographyVariant.BODY1}>
            {networksLength} networks
          </NetworksCount>
        )}
      </PreviewContent>
    </Preview>
  );
};

export default AccessPointPreview;
