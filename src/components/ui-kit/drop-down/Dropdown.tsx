import { type FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import {
  DropDownHeaderProps,
  IDropdownProps,
  Item,
} from "./Dropdown.interface";
import { ArrowDownGrey, CheckBlue } from "../../icons";

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
  color: #2a3b89;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  width: calc(100% - 2px);
  top: 43px;
  background: #fff;
  z-index: 99;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
  width: 100%;
`;

const DropDownList = styled.ul`
  box-sizing: border-box;
  padding: 0;
  margin: 3px 0;
  max-height: 330px;
  overflow: auto;
`;

const Category = styled.div<{ hidden?: boolean }>`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
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
`;

const CategoryTitle = styled(Typography)`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #2a3b89;
`;

const InputSection = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  height: 36px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "164px")};

  align-items: center;
  border-radius: 5px;
`;

const LeftIconWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;

export const Dropdown: FC<IDropdownProps> = ({
  items,
  onChange,
  fullWidth,
  leftIcon,
  disabled,
  defaultItem,
  className,
  actionsDropdown,
  actionsLabel,
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

  useEffect(() => {
    if (defaultItem) {
      setSelectedItem(defaultItem);
    }
  }, [defaultItem]);

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: Item) => () => {
    if (!actionsDropdown) {
      if (item.value === selectedItem.value) {
        setIsOpen(!isOpen);
      } else {
        onChange(item);
        setSelectedItem(item);
        setIsOpen(!isOpen);
      }
    } else {
      item.onClick?.();
      setIsOpen(!isOpen);
    }
  };

  return (
    <InputSection fullWidth={fullWidth} className={className}>
      <DropDown disabled={disabled} ref={ref} onClick={handleExpand}>
        <ValueSelect ref={valueRef}>
          {leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
          {actionsDropdown ? actionsLabel : selectedItem.label}
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
                <Category
                  key={index}
                  onClick={handleItemClick(item)}
                  hidden={item.hidden}
                >
                  <CategoryTitleWrapper>
                    <CategoryTitle>{item.label}</CategoryTitle>
                  </CategoryTitleWrapper>
                  {!actionsDropdown && selectedItem?.value === item.value && (
                    <CheckBlue />
                  )}
                </Category>
              );
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </InputSection>
  );
};
