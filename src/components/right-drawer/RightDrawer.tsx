import styled from "styled-components";
import { type FC, type MouseEvent } from "react";
import { IRightDrawerProps } from "./RightDrawer.interface";
import { AnimateAppearanceWrapper } from "../animate-appearence/AnimateAppearanceWrapper";
import { Outlet, useNavigate } from "react-router-dom";

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
`;

const DrawerContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30vw;
  height: 100%;
  overflow-x: auto;
  background: #ffffff;
  z-index: 11;
`;

export const RightDrawer: FC<IRightDrawerProps> = ({ autoClose }) => {
  const navigate = useNavigate();
  const onBackgroundClick = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <StyledAnimateAppearanceWrapper>
      {autoClose && <Dimmer onClick={onBackgroundClick} />}
      <DrawerContent>
        <Outlet />
      </DrawerContent>
    </StyledAnimateAppearanceWrapper>
  );
};
