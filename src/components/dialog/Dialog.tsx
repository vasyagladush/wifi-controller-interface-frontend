import { createPortal } from "react-dom";
import styled from "styled-components";
import { FC, MouseEvent, useState } from "react";
import { IDialogProps } from "./Dialog.interface";
import { AnimateAppearanceWrapper } from "../animate-appearence/AnimateAppearanceWrapper";
import {
  Button,
  ButtonVariant,
  DeleteButton,
  ModalHeader,
  Typography,
  TypographyVariant,
} from "../ui-kit";

const StyledAnimateAppearanceWrapper = styled(AnimateAppearanceWrapper)`
  z-index: 15;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Dimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(14, 35, 62, 0.48);
  z-index: 13;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 13;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 550px;
  background: #ffffff;
  border-radius: 5px;
  z-index: 14;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 25px;
  gap: 10px;
`;

export const Dialog: FC<IDialogProps> = ({
  title,
  content,
  actions,
  hideDialog,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onBackgroundClick = () => {
    hideDialog();
  };

  const onActionClick =
    (actionHandler?: () => void) => (event: MouseEvent<HTMLElement>) => {
      setLoading(true);
      event.preventDefault();
      if (actionHandler) {
        actionHandler();
      }

      hideDialog();
      setLoading(false);
    };

  return createPortal(
    <StyledAnimateAppearanceWrapper>
      <Background>
        <Dimmer onClick={onBackgroundClick} />
        <ModalContent>
          <ModalHeader handleClose={onBackgroundClick} title={title} />
          <Content>
            <Typography variant={TypographyVariant.HEADLINE}>
              {content}
            </Typography>
            <Buttons>
              {actions.map((a) => {
                switch (a.type) {
                  case "primary":
                    return (
                      <Button
                        key={a.text}
                        onClick={onActionClick(a.handler)}
                        loading={loading}
                      >
                        {a.text}
                      </Button>
                    );
                  case "outline":
                    return (
                      <Button
                        key={a.text}
                        variant={ButtonVariant.OUTLINED}
                        onClick={onActionClick(a.handler)}
                        loading={loading}
                      >
                        {a.text}
                      </Button>
                    );
                  case "delete":
                    return (
                      <DeleteButton
                        key={a.text}
                        hideIcon
                        onClick={onActionClick(a.handler)}
                        loading={loading}
                      >
                        {a.text}
                      </DeleteButton>
                    );
                }
              })}
            </Buttons>
          </Content>
        </ModalContent>
      </Background>
    </StyledAnimateAppearanceWrapper>,
    document.body
  );
};
