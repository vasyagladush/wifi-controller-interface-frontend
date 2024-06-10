import styled from "styled-components";
import { Typography } from "../../../../../components/ui-kit";

export const CustomCreation = styled.tr``;

export const CreationButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  border-bottom: 1px solid #cce4ff;
`;

export const AddCategory = styled(Typography)`
  color: #027aff;
  margin-left: 5px;
`;

export const SubCategoryCreationButton = styled(CreationButton)<{
  hasNoSubRows: boolean;
}>`
  padding-left: ${(props) => (props.hasNoSubRows ? "77px" : "142px")};
`;
