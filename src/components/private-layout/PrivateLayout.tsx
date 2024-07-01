import { useEffect, useMemo } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../../constants/routes";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import Header from "../header";
import {
  AccessPoint,
  Console,
  Monitor,
} from "../icons";
import { LoadingBlock } from "../loading-block/LoadingBlock";
import { SideMenu } from "../ui-kit";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const SideMenuAndContent = styled.div`
  display: flex;
  height: calc(100vh - 76px);
  margin-top: 76px;
`;

const Div = styled.div<{ hasNoAccess?: boolean }>`
  position: relative;
  background-color: #f4f5f9;
  flex: 1;
  overflow: ${(props) => (props.hasNoAccess ? "hidden" : "auto")};
`;

const Content = styled.div`
  flex: 1;
  background-color: #f4f5f9;
  padding: 30px;
  @media (max-width: 1180px) {
    padding: 20px 15px 15px 15px;
  }

  @media only screen and (max-width: 576px) {
    padding: 15px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
`;

export const PrivateLayout = () => {
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      {
        label: "Access points",
        icon: <AccessPoint name="access-point" />,
        isActive:
          [
            AppRoutes.Private.AccessPoints.AP_LIST,
            AppRoutes.Private.AccessPoints.AP_CREATE,
            AppRoutes.Private.AccessPoints.AP_EDIT,
          ].includes(location.pathname as any) ||
          location.pathname.includes(AppRoutes.Private.AccessPoints.AP_EDIT),
        defaultOpen: location.pathname.includes("private/access-points"),
        route: AppRoutes.Private.AccessPoints.AP_LIST,
      },
      {
        label: "Monitor",
        icon: <Monitor name="monitor" />,
        isActive:
          [AppRoutes.Private.Monitor.MONITOR].includes(
            location.pathname as any
          ) || location.pathname.includes(AppRoutes.Private.Monitor.MONITOR),
        defaultOpen: location.pathname.includes("private/monitor"),
        route: AppRoutes.Private.Monitor.MONITOR,
      },
      {
        label: "Console",
        icon: <Console name="console" />,
        isActive:
          [AppRoutes.Private.Console.CONSOLE].includes(
            location.pathname as any
          ) || location.pathname.includes(AppRoutes.Private.Console.CONSOLE),
        defaultOpen: location.pathname.includes("private/console"),
        route: AppRoutes.Private.Console.CONSOLE,
      },
    ],
    [location.pathname]
  );

  const settingsMenuItems = useMemo(
    () => [
      {
        label: "API Keys",
        isActive: location.pathname === AppRoutes.Private.Settings.API_KEYS,
        route: AppRoutes.Private.Settings.API_KEYS,
      },
    ],
    [location.pathname] // [location.pathname, policies]
  );
  const navigate = useNavigate();
  const { checkSignInStatus, loading } = useAuthCheck();
  const asyncCheck = async () => {
    const { user } = await checkSignInStatus();
    if (!user) {
      navigate(AppRoutes.Open.Auth.SIGN_IN_START);
    }
  };

  useEffect(() => {
    asyncCheck();
  }, []);

  const handleIsSideMenuHidden = () => {
    return false;
  };

  return (
    <Wrapper>
      <Header />
      <LoadingBlock loading={loading}>
        <SideMenuAndContent>
          <ProSidebarProvider>
            <SideMenu
              isHidden={handleIsSideMenuHidden()}
              menuItems={menuItems}
              settingsMenuItems={settingsMenuItems}
            />
          </ProSidebarProvider>
          <Div id="scrollableDiv">
            <Content>
              <Outlet />
            </Content>
          </Div>
        </SideMenuAndContent>
      </LoadingBlock>
    </Wrapper>
  );
};
