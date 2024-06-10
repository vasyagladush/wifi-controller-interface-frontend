import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { MenuItemInterface, SubItemInterface } from "../SideMenu.interface";
// import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { AppRoutes } from "../../../../constants/routes";
// import { Search } from "../../search";
import BackButton from "../../button/BackButton";
import { AppRoutes } from "../../../../constants/routes";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - 30px - 15px);
  min-height: 400px;
`;

const StyledBackButton = styled(BackButton)`
  margin-bottom: 15px;
`;

// const SearchWrapper = styled.div`
//   margin-bottom: 20px;
// `;

const SubMenuComponent = styled(SubMenu)<{ hidden?: boolean }>`
  ${({ hidden }) => hidden && "display: none !important;"}
`;

const MenuItemComponent = styled(MenuItem)<{ hidden?: boolean }>`
  ${({ hidden }) => hidden && "display: none !important;"}
`;

interface SettingsMenuProps {
  menuItems?: MenuItemInterface[];
  navigateToRoute: (route?: string) => any;
  hasPaymentsOnlySubscription?: boolean;
}

export const SettingsMenu: React.FunctionComponent<SettingsMenuProps> = ({
  menuItems,
  navigateToRoute,
  hasPaymentsOnlySubscription,
}) => {
  const navigate = useNavigate();
  // const [searchString, setSearchString] = useState<string>("");
  // const handleSettingsSearch = (searchString: string) => {
  //   setSearchString(searchString);
  // };
  const onBackFromSettings = () => {
    navigate(AppRoutes.Private.Inventory.PRODUCT_LIST);
    // navigate(-1);
  };
  return (
    <Wrapper>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            padding: "20px 15px 0 15px",
            zIndex: "1",
            "::-webkit-scrollbar": {
              width: "8px",
            },
            "::-webkit-scrollbar-track": {
              background: "#EEEEEE",
            },
            "::-webkit-scrollbar-thumb": {
              background: "#2cd19d80",
            },
          },
        }}
        backgroundColor="#fff"
      >
        {
          <>
            <StyledBackButton label="Settings" onClick={onBackFromSettings} />
            {/* <SearchWrapper> */}
            {/*  <Search onChangeHandler={handleSettingsSearch} /> */}
            {/* </SearchWrapper> */}
          </>
        }
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0) {
                return {
                  color: active ? "#3B892A" : "#495B6C",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  paddingLeft: 0,
                  paddingRight: "13px",
                  height: "35px",
                  fontSize: "14px",
                  fontWeight: "500",
                  "&:hover": {
                    color: active ? "#3B892A" : "#2a3b89",
                    backgroundColor: "#fff",
                  },
                };
              } else if (level === 1) {
                return {
                  color: active ? "#3B892A" : "#495B6C",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  paddingLeft: "13px",
                  paddingRight: "13px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  fontSize: "14px",
                  fontWeight: "500",
                  height: "initial",
                  "&:hover": {
                    backgroundColor: active ? "#fff" : "#F8F9FA",
                  },
                };
              } else if (level === 2) {
                return {
                  color: active ? "#3B892A" : "#495B6C",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  paddingLeft: "13px",
                  paddingRight: "13px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  fontSize: "14px",
                  fontWeight: "500",
                  height: "initial",
                  "&:hover": {
                    backgroundColor: active ? "#fff" : "#F8F9FA",
                  },
                };
              }
            },
            icon: ({ active, level }) => {
              if (level === 0) {
                return {
                  margin: "0 10px 0 0",
                  color: active ? "#3B892A" : "#ADB5BD",
                  width: "initial",
                  minWidth: "initial",
                };
              } else if (level === 1) {
                return {
                  margin: "0 11px 0 11px",
                  width: "initial",
                  minWidth: "initial",
                  color: active ? "#3B892A" : "#ADB5BD",
                };
              } else if (level === 2) {
                return {
                  margin: "0 11px 0 38px",
                  width: "initial",
                  minWidth: "initial",
                  color: active ? "#3B892A" : "#ADB5BD",
                };
              }
            },
            SubMenuExpandIcon: ({ active }) => {
              return {
                color: active ? "#3B892A" : "#495B6C",
                marginBottom: "3px",
              };
            },
          }}
        >
          {menuItems
            // ?.filter((el) => {
            //   return el.label.toLowerCase().includes(searchString.toLowerCase());
            // })
            ?.map((item: MenuItemInterface) => {
              const subItems = item.subItems;

              if (subItems) {
                return (
                  <SubMenuComponent
                    hidden={item.hidden}
                    key={item.label}
                    defaultOpen={item.defaultOpen}
                    active={item.isActive}
                    label={item.label}
                    icon={item.icon}
                  >
                    {subItems.map((subItem: SubItemInterface) => {
                      const subSubItems = subItem.subItems;

                      if (subSubItems) {
                        return (
                          <SubMenuComponent
                            hidden={subItem.hidden}
                            key={subItem.label}
                            defaultOpen={subItem.defaultOpen}
                            active={subItem.isActive}
                            label={subItem.label}
                            icon={subItem.icon}
                          >
                            {subSubItems.map((subSubItem: SubItemInterface) => (
                              <MenuItemComponent
                                hidden={subSubItem.hidden}
                                key={subSubItem.label}
                                active={subSubItem.isActive}
                                icon={subSubItem.icon}
                                onClick={navigateToRoute(subSubItem.route)}
                              >
                                {subSubItem.label}
                              </MenuItemComponent>
                            ))}
                          </SubMenuComponent>
                        );
                      }

                      return (
                        <MenuItemComponent
                          hidden={subItem.hidden}
                          key={subItem.label}
                          active={subItem.isActive}
                          icon={subItem.icon}
                          onClick={navigateToRoute(subItem.route)}
                        >
                          {subItem.label}
                        </MenuItemComponent>
                      );
                    })}
                  </SubMenuComponent>
                );
              }

              return (
                <MenuItemComponent
                  hidden={item.hidden}
                  key={item.label}
                  active={item.isActive}
                  icon={item.icon}
                  onClick={navigateToRoute(item.route)}
                >
                  {item.label}
                </MenuItemComponent>
              );
            })}
        </Menu>
      </Sidebar>
    </Wrapper>
  );
};
