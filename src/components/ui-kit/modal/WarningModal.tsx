import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { Button, ButtonVariant } from "../button";
import { ModalHeader } from "./ModalHeader";
import { TypographyVariant } from "../typography/Typography.interface";

const Wrapper = styled.div`
  width: 500px;
`;

const Content = styled.div`
  padding: 30px;
`;

const MainText = styled(Typography)``;

const Description = styled(Typography)`
  margin-top: 5px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const CancelButton = styled(Button)`
  margin-right: 10px;
`;

interface ModalProps {
  headerTitle: string;
  mainText: string;
  description?: string;
  cancelButtonText: string;
  deleteButtonText: string;
  onCancel: () => void;
  onContinue: () => void;
  loading?: boolean;
}

const WarningModal: React.FunctionComponent<ModalProps> = ({
  headerTitle,
  mainText,
  description,
  cancelButtonText,
  deleteButtonText,
  onCancel,
  onContinue,
  loading,
}) => {
  return (
    <Wrapper>
      <ModalHeader title={headerTitle} handleClose={onCancel} />
      <Content>
        <MainText variant={TypographyVariant.BODY1}>{mainText}</MainText>
        <Description variant={TypographyVariant.BODY2}>
          {description}
        </Description>
        <Buttons>
          <CancelButton onClick={onCancel} variant={ButtonVariant.OUTLINED}>
            {cancelButtonText}
          </CancelButton>
          <Button onClick={onContinue} loading={loading}>
            {deleteButtonText}
          </Button>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default WarningModal;
