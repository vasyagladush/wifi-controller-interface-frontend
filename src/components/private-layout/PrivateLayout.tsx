import { useEffect, useMemo } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../../constants/routes";
import { useModalManager } from "../../context/ModalManager";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import Header from "../header";
import { Dot, MenuItemShoppingBag } from "../icons";
import { LoadingBlock } from "../loading-block/LoadingBlock";
import { SideMenu } from "../ui-kit";
import { useUserContext } from "../../context/UserContextProvider";

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
  const { user } = useUserContext();
  const { addModal, modals } = useModalManager();
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      {
        label: "Inventory",
        icon: <MenuItemShoppingBag name="shopping-bag" />,
        isActive:
          [
            AppRoutes.Private.Inventory.PRODUCT_LIST,
            AppRoutes.Private.Inventory.PRODUCT_LIST_STOCK,
            AppRoutes.Private.Inventory.PRODUCT_CREATE,
            AppRoutes.Private.Inventory.PRODUCT_EDIT,
            AppRoutes.Private.Inventory.CATEGORIES,
          ].includes(location.pathname as any) ||
          location.pathname.includes(AppRoutes.Private.Inventory.PRODUCT_EDIT),
        defaultOpen: location.pathname.includes("private/inventory"),
        // hidden: !checkAccessByPolicies(
        //   [
        //     Policies.PRODUCT.ADMIN_ACCESS,
        //     Policies.CATEGORY.ADMIN_ACCESS,
        //     Policies.BRAND.ADMIN_ACCESS,
        //     Policies.PRODUCT.VIEW_PRODUCTS,
        //     Policies.CATEGORY.VIEW_CATEGORIES,
        //     Policies.BRAND.VIEW_BRANDS,
        //   ],
        //   [
        //     Policies.PRODUCT.VIEW_PRODUCTS,
        //     Policies.CATEGORY.VIEW_CATEGORIES,
        //     Policies.BRAND.VIEW_BRANDS,
        //   ]
        // ),
        subItems: [
          {
            label: "Product list",
            icon: <Dot name="dot" />,
            isActive:
              location.pathname.includes(
                AppRoutes.Private.Inventory.PRODUCT_LIST
              ) &&
              !location.pathname.includes(
                AppRoutes.Private.Inventory.PRODUCT_LIST_STOCK
              ),
            route: AppRoutes.Private.Inventory.PRODUCT_LIST,

            // hidden: !checkAccessByPolicies(
            //   [Policies.PRODUCT.ADMIN_ACCESS],
            //   [Policies.PRODUCT.VIEW_PRODUCTS]
            // ),
          },
          {
            label: "Categories",
            icon: <Dot name="dot" />,
            isActive:
              location.pathname === AppRoutes.Private.Inventory.CATEGORIES,
            route: AppRoutes.Private.Inventory.CATEGORIES,
            // hidden: !checkAccessByPolicies(
            //   [Policies.CATEGORY.ADMIN_ACCESS],
            //   [Policies.CATEGORY.VIEW_CATEGORIES]
            // ),
          },
        ],
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
        // hidden: !checkAccessByPolicies(
        //   [Policies.API_KEY.ADMIN_ACCESS],
        //   [Policies.API_KEY.VIEW_API_KEYS]
        // ),
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
