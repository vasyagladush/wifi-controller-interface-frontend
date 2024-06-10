import { FC } from "react";
import styled from "styled-components";
import { Cross } from "../../../../../../../components/icons";
import {
  Button,
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "../../../../../../../components/ui-kit";
import { DeleteButtonWithChildren } from "../../../../../../../components/ui-kit/button/DeleteButton.stories";

const BottomMenuContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px -15px 20px rgba(108, 108, 138, 0.1);
  position: sticky;
  bottom: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  left: 0;
`;

const LeftSection = styled.div`
  padding: 25px 30px;
  display: flex;
  align-items: center;
  margin-right: auto;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 25px;
  }
`;

const RightSection = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const StyledCross = styled(Cross)`
  margin-right: 11px;
  :hover {
    path {
      stroke: #556CB1;
    }
    cursor: pointer;
  }
`;

const StyledTypography = styled(Typography)`
  line-height: 30px;
  padding-left: 11px;
  border-left: solid 1px #dbe3eb;
`;

const Buttons = styled.div`
  display: flex;
`;

const CancelButton = styled(Button)`
  margin-right: 10px;
`;

interface BottomMenuProps {
  items?: any;
  onCrossButton: () => void;
}

export const BottomMenu: FC<BottomMenuProps> = ({ items, onCrossButton }) => {
  const resetSelectedOrders = () => {
    onCrossButton();
  };

  const handleBulkArchive = () => {};

  return (
    <BottomMenuContainer>
      <LeftSection>
        <StyledCross onClick={resetSelectedOrders} />
        <StyledTypography color="#495B6C" variant={TypographyVariant.HEADLINE}>
          Selected variants:{" "}
          <span style={{ color: "#556CB1" }}>{items?.length}</span>
        </StyledTypography>
      </LeftSection>
      <RightSection>
        <Buttons>
          <CancelButton variant={ButtonVariant.TEXT}>Cancel</CancelButton>
          <DeleteButtonWithChildren onClick={handleBulkArchive}>
            Delete
          </DeleteButtonWithChildren>
        </Buttons>
      </RightSection>
    </BottomMenuContainer>
  );
};
