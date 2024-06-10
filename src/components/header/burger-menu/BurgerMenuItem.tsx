import styled from "styled-components";
import { Typography, TypographyVariant } from "../../ui-kit";
import { FC, MouseEvent, ReactNode } from "react";
import { Dot } from "../../icons";

const BmItemWrapper = styled.div<{
  level: 1 | 2;
  hasChildren: boolean;
  lastItem?: boolean;
}>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 5px 0;
  ${({ level }) => level === 2 && "padding-left: 25px;"}
  &:last-child {
    ${({ hasChildren, lastItem }) =>
      !hasChildren && !lastItem && "border-bottom: 1px solid #dbe3eb;"}
  }
`;

const BmItemIconAndLabel = styled.div<{
  hasChildren: boolean;
  isActive?: boolean;
}>`
  display: flex;
  align-items: center;
  ${({ hasChildren }) => hasChildren && "padding: 5px 0;"}
  ${({ isActive }) => isActive && "svg {color:#3B892A;} p {color:#3B892A;}"}
`;

const BmIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adb5bd;
`;

const BmLabel = styled(Typography)`
  margin-left: 7px;
`;

interface BurgerMenuItemProps {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  icon?: JSX.Element;
  label: string;
  children?: ReactNode | ReactNode[];
  level?: 1 | 2;
  lastItem?: boolean;
  isActive?: boolean;
}

export const BurgerMenuItem: FC<BurgerMenuItemProps> = ({
  onClick,
  icon,
  label,
  children,
  level = 1,
  lastItem,
  isActive,
}) => {
  const hasChildren = !!children;
  return (
    <BmItemWrapper
      hasChildren={hasChildren}
      level={level}
      onClick={onClick}
      lastItem={lastItem}
    >
      <BmItemIconAndLabel isActive={isActive} hasChildren={hasChildren}>
        <BmIconWrapper>{icon ?? <Dot />}</BmIconWrapper>
        <BmLabel variant={TypographyVariant.HEADER4}>{label}</BmLabel>
      </BmItemIconAndLabel>
      {children}
    </BmItemWrapper>
  );
};
