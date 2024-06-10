import {
  type MenuItemInterface,
  type SubItemInterface,
} from "../SideMenu.interface";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  useProSidebar,
} from "react-pro-sidebar";
import styled from "styled-components";
import React, { useMemo } from "react";
import { LeftArrow, LockGrey } from "../../../icons";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - 30px - 15px);
  min-height: 400px;
`;

const ArrowWrapper = styled.div<{ collapsed: boolean }>`
  display: flex;
  position: absolute;
  top: 3px;
  right: 18px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  transform: ${(props) =>
    props.collapsed ? `rotate(180deg)` : `rotate(-360deg)`};
  ${({ collapsed }) => collapsed && "right: 25px;"}
  svg {
    :hover {
      color: #495b6c;
    }
  }
`;

const StyledLockGrey = styled(LockGrey)`
  margin-right: 6px;
`;

const SubMenuComponent = styled(SubMenu)<{
  hidden?: boolean;
  index?: number;
}>`
  ${({ hidden }) => hidden && "display: none !important;"}

  ${({ index }) => index === 1 && "margin-bottom: 20px !important;"} 
    
  ${({ index }) => index === 1 && "border-bottom: 1px solid #eee !important;"} 
   ${({ index }) => index === 1 && "padding-bottom: 30px !important;"}
`;

const MenuItemComponent = styled(MenuItem)<{
  hidden?: boolean;
}>`
  ${({ hidden }) => hidden && "display: none !important;"}
`;

const ItemWrapper = styled.div<{ disabled?: boolean }>`
  &:hover {
    button {
      display: block;
    }
  }
`;

const StyledLeftArrow = styled(LeftArrow)`
  color: #adb5bd;
`;
interface EposMenuProps {
  menuItems: MenuItemInterface[];
  navigateToRoute: (route?: string) => any;
}
export const EposMenu: React.FunctionComponent<EposMenuProps> = ({
  menuItems,
  navigateToRoute,
}) => {
  const CollapseArrowWrapper = React.memo(
    ({ onClick }: { onClick: () => void }) => {
      return (
        <ArrowWrapper collapsed={collapsed} onClick={onClick}>
          <StyledLeftArrow />
        </ArrowWrapper>
      );
    }
  );

  CollapseArrowWrapper.displayName = "CollapseArrowWrapper";

  const { collapseSidebar, collapsed } = useProSidebar();

  const handleCollapseMenu = () => {
    collapseSidebar();
  };

  const menuItemsMemo = useMemo(() => menuItems, [menuItems, collapsed]);

  return (
    <Wrapper>
      <CollapseArrowWrapper onClick={handleCollapseMenu} />
      <Sidebar
        transitionDuration={300}
        collapsedWidth="60px"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            padding: collapsed ? "30px 3px 0 3px" : "30px 15px 15px 15px",
            zIndex: "1",
            "::-webkit-scrollbar": {
              width: "5px",
            },
            "::-webkit-scrollbar-track": {
              background: "#EEEEEE",
            },
            "::-webkit-scrollbar-thumb": {
              background: "#2cd19d80",
            },
          },
          borderRight: "none",
        }}
        backgroundColor="#fff"
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: active ? "#2a3b89" : "#495B6C",
                  fontSize: "14px",
                  fontWeight: "500",
                  backgroundColor: active
                    ? "#DBF7EF"
                    : disabled
                    ? "#eeeff0"
                    : undefined,
                  borderRadius: "5px",
                  paddingLeft: collapsed ? "5px" : "13px",
                  paddingRight: "13px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  // height: collapsed ? "30px" : "50px",
                  "&:hover": {
                    backgroundColor: active ? "#DBF7EF" : "#F8F9FA",
                  },
                  "&:hover button": {
                    display: "block",
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
                  margin: collapsed ? "0 6px 0 6px" : "0 10px 0 0",
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
                  margin: "0 11px 0 27px",
                  width: "initial",
                  minWidth: "initial",
                  color: active ? "#3B892A" : "#ADB5BD",
                };
              }
            },
            label: ({ level }) => {
              if (level === 0) {
                return {
                  display: collapsed ? "none" : "initial",
                };
              } else if (level === 1 || level === 2) {
                return {
                  whiteSpace: "initial",
                };
              }
            },
            SubMenuExpandIcon: ({ active }) => {
              return {
                color: active ? "#3B892A" : collapsed ? "#adb5bd" : "#495B6C",
                marginBottom: "3px",
                left: collapsed ? "34px" : "initial",
                top: collapsed ? "47%" : "initial",
              };
            },
          }}
        >
          {menuItemsMemo.map((item: MenuItemInterface, index) => {
            const subItems = item.subItems;

            if (subItems) {
              return (
                <ItemWrapper key={index} disabled={item.disabled}>
                  <SubMenuComponent
                    hidden={item.hidden}
                    defaultOpen={item.defaultOpen}
                    active={item.isActive}
                    label={item.label}
                    icon={item.icon}
                    index={index}
                    suffix={item.disabled ? <LockGrey /> : null}
                  >
                    {subItems.map((subItem: SubItemInterface) => {
                      const subSubItems = subItem.subItems;

                      if (subSubItems) {
                        return (
                          <SubMenuComponent
                            aria-disabled={item.disabled}
                            hidden={subItem.hidden}
                            key={subItem.label}
                            defaultOpen={subItem.defaultOpen}
                            active={subItem.isActive}
                            label={subItem.label}
                            icon={subItem.icon}
                            suffix={item.disabled ? <LockGrey /> : null}
                          >
                            {subSubItems.map((subSubItem: SubItemInterface) => (
                              <MenuItemComponent
                                aria-disabled={item.disabled}
                                hidden={subSubItem.hidden}
                                key={subSubItem.label}
                                active={subSubItem.isActive}
                                icon={subSubItem.icon}
                                suffix={
                                  item.disabled ? <StyledLockGrey /> : null
                                }
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
                          aria-disabled={item.disabled}
                          key={subItem.label}
                          hidden={subItem.hidden}
                          active={subItem.isActive}
                          icon={subItem.icon}
                          suffix={item.disabled ? <StyledLockGrey /> : null}
                          onClick={navigateToRoute(subItem.route)}
                        >
                          {subItem.label}
                        </MenuItemComponent>
                      );
                    })}
                  </SubMenuComponent>
                </ItemWrapper>
              );
            }
            return (
              <ItemWrapper key={index} disabled={item.disabled}>
                <MenuItemComponent
                  hidden={item.hidden}
                  active={item.isActive}
                  icon={item.icon}
                  aria-disabled={item.disabled}
                  suffix={item.disabled ? <StyledLockGrey /> : null}
                  onClick={navigateToRoute(item.route)}
                >
                  {item.label}
                </MenuItemComponent>
              </ItemWrapper>
            );
          })}
        </Menu>
      </Sidebar>
    </Wrapper>
  );
};
