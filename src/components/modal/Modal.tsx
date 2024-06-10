import { createPortal } from "react-dom";
import styled from "styled-components";
import { type FC, type MouseEvent } from "react";
import { type IModalProps } from "./Modal.interface";
import { AnimateAppearanceWrapper } from "../animate-appearence/AnimateAppearanceWrapper";

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
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    background: #ffffff;
  }
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 5px;
  z-index: 9;
`;

export const Modal: FC<IModalProps> = ({
  onHide,
  children,
  canHideOnBackground = true,
}) => {
  const onBackgroundClick = (event: MouseEvent<HTMLInputElement>) => {
    if (canHideOnBackground) {
      event.preventDefault();
      onHide();
    }
  };

  return createPortal(
    <StyledAnimateAppearanceWrapper>
      <Background>
        <Dimmer onClick={onBackgroundClick} />
        <ModalContent>{children}</ModalContent>
      </Background>
    </StyledAnimateAppearanceWrapper>,
    document.body
  );
};
