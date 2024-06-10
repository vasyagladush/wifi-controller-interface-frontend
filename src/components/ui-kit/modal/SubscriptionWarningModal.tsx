import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { Button } from "../button";
import { ModalHeader } from "./ModalHeader";
import { TypographyVariant } from "../typography/Typography.interface";
import { useModalManager } from "../../../context/ModalManager";
import { BiCheckCircleWhite } from "../../icons";

const Wrapper = styled.div`
  width: 500px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const MainText = styled(Typography)`
  margin-top: 30px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SuccessIcon = styled.div<{ failure?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  box-shadow: ${(props) =>
    props.failure
      ? "0px 0px 0px 15px rgba(239, 99, 85, 0.11);"
      : "0px 0px 0px 15px rgba(44, 209, 158, 0.11)"};
  border-radius: 50%;
  background: ${(props) =>
    props.failure
      ? "#EF6355"
      : `linear-gradient(
    47deg,
    #6CB155 12.72%,
    #47ef90 85.89%,
    #3ce396 85.89%
  )`};
`;

const StyledBiCheckCircle = styled(BiCheckCircleWhite)``;

const SubscriptionWarningModal: React.FunctionComponent = () => {
  const { removeLastModal } = useModalManager();
  return (
    <Wrapper>
      <ModalHeader
        title="Subscription warning"
        handleClose={() => {
          removeLastModal();
        }}
      />
      <Content>
        <SuccessIcon failure>{<StyledBiCheckCircle />}</SuccessIcon>
        <MainText variant={TypographyVariant.BODY1}>
          Your subscription payment has been failed
        </MainText>

        <Buttons>
          <Button
            onClick={() => {
              removeLastModal();
            }}
          >
            Ok
          </Button>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default SubscriptionWarningModal;
