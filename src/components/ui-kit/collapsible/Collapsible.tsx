import styled from "styled-components";
import { cloneElement, FC, useState } from "react";
import { ICollapsibleProps } from "./Collapsible.interface";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { LeftArrow } from "../../icons";

const HeaderWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;

const ArrowIcon = styled(LeftArrow)<{ isExpanded?: boolean }>`
  fill: #2a3b89;
  transform: rotate(-180deg);
  ${({ isExpanded }) => isExpanded && "transform: rotate(-90deg);"}
`;

const DefaultHeader: FC<{ label: string; expanded?: boolean }> = ({
  label,
  expanded,
}) => {
  return (
    <Header>
      <Typography variant={TypographyVariant.HEADER4}>{label}</Typography>
      <ArrowIcon isExpanded={expanded} />
    </Header>
  );
};

export const Collapsible: FC<ICollapsibleProps> = ({
  children,
  defaultOpen,
  Header,
  label,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderWrapper onClick={handleToggle}>
        {Header ? (
          cloneElement(<Header />, { label, open })
        ) : (
          <DefaultHeader expanded={open} label={label} />
        )}
      </HeaderWrapper>
      {open && children}
    </>
  );
};
