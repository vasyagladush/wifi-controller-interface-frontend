import styled from "styled-components";
import { Typography } from "../../../../../components/ui-kit";
import { ImageIcon } from "../../../../../components/icons";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface CellProps {
  image?: string;
  name: string;
}

const NameCell: React.FunctionComponent<CellProps> = ({ image, name }) => {
  return (
    <Wrapper>
      <Typography>{name}</Typography>
    </Wrapper>
  );
};

export default NameCell;
