import styled from "styled-components";
import { Typography } from "../../../../../components/ui-kit";
import { ImageIcon } from "../../../../../components/icons";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPic = styled.img`
  width: 54px;
  height: 54px;
  background: #dbe3eb;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 10px;
`;

const GrayBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 5px;
  background-color: #f4f5f9;
  margin-right: 10px;
  svg {
    scale: 2;
  }
`;

interface CellProps {
  image?: string;
  name: string;
}

const PicAndNameCell: React.FunctionComponent<CellProps> = ({
  image,
  name,
}) => {
  return (
    <Wrapper>
      <div>
        {image ? (
          <ProductPic src={image} />
        ) : (
          <GrayBg>
            <ImageIcon />
          </GrayBg>
        )}
      </div>
      <Typography>{name}</Typography>
    </Wrapper>
  );
};

export default PicAndNameCell;
