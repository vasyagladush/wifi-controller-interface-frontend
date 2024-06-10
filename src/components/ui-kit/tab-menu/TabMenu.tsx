import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { TabMenuProps } from "./TabMenu.interface";

const TabsWrapper = styled.div<{ withoutLine?: boolean }>`
  display: flex;
  border-bottom: ${({ withoutLine }) =>
    !withoutLine ? "1px solid #dbe3eb" : "none"};
  width: 100%;
  justify-content: flex-start;
  gap: 30px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    border-bottom: none;
    margin-bottom: 30px;
  }
`;

const ItemActiveCss = css`
  border-bottom: 2px solid #6CB155;
`;

const MenuItemText = styled(Typography)<{ active?: boolean; hidden?: boolean }>`
  padding: 2px 0;
  cursor: pointer;
  ${({ active }) => active && ItemActiveCss};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  ${({ hidden }) => hidden && "display: none;"}
`;

export const TabMenu: React.FunctionComponent<TabMenuProps> = ({
  menus,
  startWithIndex = 0,
  withoutLine,
  className,
}) => {
  const [currentIndexMenuActive, setCurrentIndexMenuActive] = useState(
    startWithIndex ?? 0
  );

  useEffect(() => {
    if (startWithIndex) {
      setCurrentIndexMenuActive(startWithIndex);
    }
  }, [startWithIndex]);

  return (
    <div>
      <TabsWrapper withoutLine={withoutLine} className={className}>
        {menus.map((menu, index) => (
          <MenuItemText
            hidden={menu.hidden}
            key={index}
            variant={TypographyVariant.BODY4}
            active={index === currentIndexMenuActive}
            onClick={() => {
              menu.additionalHandler?.();
              setCurrentIndexMenuActive(index);
            }}
          >
            {menu.name}
          </MenuItemText>
        ))}
      </TabsWrapper>
      {menus.map((el, index) => (
        <div key={index}>
          {" "}
          {currentIndexMenuActive === index && el.component}
        </div>
      ))}
    </div>
  );
};
