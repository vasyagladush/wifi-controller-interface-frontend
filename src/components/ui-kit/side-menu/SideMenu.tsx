import { type SideMenuProps } from "./SideMenu.interface";

import styled from "styled-components";
import React, { type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { EposMenu } from "./components/EposMenu";
import { SettingsMenu } from "./components/SettingsMenu";

const Wrapper = styled.div<{ isHidden?: boolean }>`
  position: relative;
  display: flex;
  height: calc(100% - 21px);
  min-height: 400px;
  border-top: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  display: ${(props) => (props.isHidden ? "none" : "initial")};
  @media (max-width: 576px) {
    display: none;
  }
`;

export const SideMenu: React.FunctionComponent<SideMenuProps> = ({
  menuItems,
  settingsMenuItems,
  isHidden,
  hasPaymentsOnlySubscription,
}) => {
  const navigate = useNavigate();

  const navigateToRoute =
    (routeName?: string) => (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      navigate(routeName ?? "");
    };

  const isSettings = window.location.pathname.includes("private/settings/");
  return (
    <Wrapper isHidden={isHidden}>
      {!isSettings ? (
        <EposMenu navigateToRoute={navigateToRoute} menuItems={menuItems} />
      ) : (
        <SettingsMenu
          navigateToRoute={navigateToRoute}
          menuItems={settingsMenuItems}
          hasPaymentsOnlySubscription={hasPaymentsOnlySubscription}
        />
      )}
    </Wrapper>
  );
};
