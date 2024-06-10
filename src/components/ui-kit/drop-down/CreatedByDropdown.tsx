import { type FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import {
  CreatedByItemTypes,
  DropDownHeaderProps,
  IDropdownProps,
  Item,
} from "./Dropdown.interface";
import {
  ArrowDownGrey,
  CheckBlue,
  Key,
  QuickbooksIcon,
  ShopifyIcon,
  WoocommerceIcon,
  XeroIcon,
  Zapier,
} from "../../icons";
import { Avatar } from "../avatar/Avatar";
import { AvatarSizeVariant } from "../avatar/Avatar.interface";

const DropDown = styled.div<DropDownHeaderProps>`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;

  cursor: pointer;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: 6px 10px 6px 12px;
  min-height: 18px;
  position: relative;
  transition: 200ms;

  ${({ disabled }) =>
    disabled &&
    "pointer-events: none; color: #8181A5; border: solid 1px rgba(0, 0, 0, 0); background-color: #F4F5F9;"}

  &:hover {
    border: solid 1px rgba(0, 0, 0, 0);
    box-shadow: 0 0 10px rgba(129, 129, 165, 0.3);
  }
`;

const ValueSelect = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  color: #556CB1;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  top: 43px;
  width: 100%;
  z-index: 99;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
  max-height: 300px;
  overflow: scroll;
`;

const DropDownList = styled.ul`
  box-sizing: border-box;
  padding: 0;
  background: #fff;
  margin: 3px 0;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px 12px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f4f7f9;
  }
`;

const CategoryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: 10px;
`;

const CategoryTitle = styled(Typography)`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #556CB1;
`;

const InputSection = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  height: 36px;
  width: 100%;

  align-items: center;
  border-radius: 5px;
`;

const GrayAvatarBg = styled.div<{ type?: CreatedByItemTypes }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) =>
    props.type === CreatedByItemTypes.WOOCOMMERCE ||
    props.type === CreatedByItemTypes.ZAPIER ||
    props.type === CreatedByItemTypes.SHOPIFY
      ? "#fff"
      : "#adb5bd"};
  width: 38px;
  height: 38px;
`;

const StyledZapierIcon = styled(Zapier)`
  transform: scale(0.5);
  width: 70px;
  height: 70px;
`;

const StyledShopifyIcon = styled(ShopifyIcon)`
  transform: scale(0.7);
`;

const StyledQuickbooksIcon = styled(QuickbooksIcon)``;

const StyledXeroIcon = styled(XeroIcon)`
  width: 70px;
  height: 70px;
`;

export const CreatedByDropdown: FC<IDropdownProps> = ({
  items,
  onChange,
  fullWidth,
  disabled,
  defaultItem,
  withoutAvatar,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>({
    label: defaultItem?.label ?? items?.[0]?.label,
    value: defaultItem?.value ?? items?.[0]?.value,
  });

  const ref = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (ref.current !== e.target && e.target !== valueRef.current) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: Item) => () => {
    if (item.value === selectedItem.value) {
      setIsOpen(!isOpen);
    } else {
      onChange(item);
      setSelectedItem(item);
      setIsOpen(!isOpen);
    }
  };

  return (
    <InputSection fullWidth={fullWidth}>
      <DropDown disabled={disabled} ref={ref} onClick={handleExpand}>
        <ValueSelect ref={valueRef}>
          {selectedItem.avatar && (
            <Avatar
              size={AvatarSizeVariant.SMALL}
              avatarSrc={selectedItem.avatar}
            />
          )}
          {selectedItem.label}
        </ValueSelect>
        <ArrowDownGrey />
      </DropDown>

      {isOpen && (
        <DropDownListContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <DropDownList>
            {items.map((item, index) => {
              return (
                <Category key={index} onClick={handleItemClick(item)}>
                  {item.value &&
                  item.type === CreatedByItemTypes.TEAM_MEMBER &&
                  !withoutAvatar ? (
                    <Avatar
                      size={AvatarSizeVariant.SMALL}
                      avatarSrc={item.avatar}
                      disableDropdown
                    />
                  ) : item?.type === CreatedByItemTypes.API_KEY ? (
                    <GrayAvatarBg>
                      <Key />
                    </GrayAvatarBg>
                  ) : item?.type === CreatedByItemTypes.WOOCOMMERCE ? (
                    <GrayAvatarBg type={item?.type}>
                      <WoocommerceIcon />
                    </GrayAvatarBg>
                  ) : item?.type === CreatedByItemTypes.ZAPIER ? (
                    <GrayAvatarBg type={item?.type}>
                      <StyledZapierIcon />
                    </GrayAvatarBg>
                  ) : item?.type === CreatedByItemTypes.SHOPIFY ? (
                    <GrayAvatarBg type={item?.type}>
                      <StyledShopifyIcon />
                    </GrayAvatarBg>
                  ) : item?.type === CreatedByItemTypes.XERO ? (
                    <GrayAvatarBg type={item?.type}>
                      <StyledXeroIcon />
                    </GrayAvatarBg>
                  ) : item?.type === CreatedByItemTypes.QUICKBOOKS ? (
                    <GrayAvatarBg type={item?.type}>
                      <StyledQuickbooksIcon />
                    </GrayAvatarBg>
                  ) : (
                    item?.type
                  )}
                  <CategoryTitleWrapper>
                    <CategoryTitle>{item.label}</CategoryTitle>
                  </CategoryTitleWrapper>
                  {selectedItem?.value === item.value && <CheckBlue />}
                </Category>
              );
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </InputSection>
  );
};
