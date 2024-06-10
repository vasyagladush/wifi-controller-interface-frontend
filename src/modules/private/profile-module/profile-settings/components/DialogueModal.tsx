import styled from "styled-components";
import { useModalManager } from "../../../../../context/ModalManager";
import {
  Button,
  ButtonVariant,
  ModalHeader,
} from "../../../../../components/ui-kit";

const Wrapper = styled.div`
  width: 550px;
  min-height: 150px;
  padding: 25px;
`;

const Btn = styled(Button)`
  width: 100px;
  white-space: nowrap;
  margin-right: 5%;
`;

const BtnsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: end;
  padding: 0 30px;
`;
const MainContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export interface DialogueModalProps {
  content: JSX.Element;
  ConfirmButton: JSX.Element;
  title: string;
}

const DialogueModal: React.FunctionComponent<DialogueModalProps> = ({
  content,
  ConfirmButton,
  title,
}) => {
  const { removeLastModal } = useModalManager();

  return (
    <Wrapper>
      <ModalHeader title={title} handleClose={removeLastModal} />
      <MainContainer>
        {content}
        <BtnsContainer>
          <Btn variant={ButtonVariant.OUTLINED} onClick={removeLastModal}>
            Cancel
          </Btn>
          {ConfirmButton}
        </BtnsContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default DialogueModal;
