import { FC, useState } from "react";
import styled, { css } from "styled-components";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { IFilterTabsProps } from "./FilterTabs.interface";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #dbe3eb;
  width: 100%;
  justify-content: flex-start;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: none;
    margin-bottom: 30px;
  }
`;

const ItemActiveCss = css`
  border-bottom: 2px solid #6CB155;
`;

const MenuItemText = styled(Typography)<{ active?: boolean }>`
  padding: 2px 0;
  margin: 0 25px;
  cursor: pointer;
  ${({ active }) => active && ItemActiveCss};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 900px) {
    margin: 0;
  }
`;

export const FilterTabs: FC<IFilterTabsProps> = ({
  menus,
  startWithIndex,
  clickHandler,
}) => {
  const [currentIndexMenuActive, setCurrentIndexMenuActive] =
    useState(startWithIndex);

  const handleClickMenuItem = (
    index: number,
    handler?: () => void,
    value?: string
  ) => {
    setCurrentIndexMenuActive(index);
    if (handler) {
      handler();
    }
    clickHandler?.(value);
  };

  return (
    <Container>
      {menus.map((menu, index: number) => (
        <MenuItemText
          key={index}
          variant={TypographyVariant.BODY4}
          active={index === currentIndexMenuActive}
          onClick={() => {
            handleClickMenuItem(index, menu.handler, menu.value);
          }}
        >
          {menu.name}
        </MenuItemText>
      ))}
    </Container>
  );
};
