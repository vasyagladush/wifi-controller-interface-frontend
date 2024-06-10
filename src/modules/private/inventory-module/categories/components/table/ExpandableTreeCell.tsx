import styled from "styled-components";
import {
  Typography,
  SmallButton,
  TypographyVariant,
  SmallButtonVariant,
  SmallButtonContentType,
} from "../../../../../../components/ui-kit";
import { Tooltip } from "react-tooltip";
import { ImageIcon, Info } from "../../../../../../components/icons";

const Wrapper = styled.div<{ depth: number }>`
  display: flex;
  align-items: center;
  padding-left: ${(props) => `${props.depth * 8}rem`};
  position: relative;
`;

const SubCatVerticalLine = styled.span`
  position: absolute;
  left: 87px;
  border-left: 1px solid rgb(211, 211, 226);
  height: 98px;
  bottom: 28px;
  z-index: 0;
`;

// const MainCatVerticalLine = styled.span`
//   position: absolute;
//   left: 8px;
//   top: -33px;
//   border-left: 1px solid rgb(211, 211, 226);
//   height: 169px;
//   z-index: 1;
// `;

const SubCatHorizontalLine = styled.span`
  position: absolute;
  border-bottom: 1px solid rgb(211, 211, 226);
  width: 39px;
  top: 26px;
  left: 87px;
`;

const Img = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 5px;
  margin-right: 10px;
  z-index: 1;
  object-fit: contain;
  background: #fff;
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
  z-index: 1;
  svg {
    scale: 2;
  }
`;

const IconAndName = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(Info)`
  margin-left: 5px;
  color: #6c6c8a;
`;

const StyledSmallButtonDefault = styled(SmallButton)<{
  isExpanded?: boolean;
}>`
  margin-right: ${(props) => !props.isExpanded && "10px"};
`;

const MainCatHorizontalLine = styled.div`
  border-bottom: 1px solid rgb(211, 211, 226);
  width: 39px;
  margin: 0 2px;
`;

const SvgWrapper = styled.div<{ isVisible: boolean }>`
  display: flex;
  display: ${(props) => (props.isVisible ? "inital" : "none")};
`;
interface ExpandableTreeCellProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  handleClick: () => void;
  isExpanded: boolean;
  depth: number;
}

export const ExpandableTreeCell: React.FunctionComponent<
  ExpandableTreeCellProps
> = ({ id, description, name, imageSrc, handleClick, isExpanded, depth }) => {
  return (
    <Wrapper depth={depth}>
      {depth === 1 && <SubCatVerticalLine />}
      {/* {depth === 1 && <MainCatVerticalLine />} */}
      {depth === 0 && (
        <StyledSmallButtonDefault
          isExpanded={isExpanded}
          onClick={handleClick}
          variant={SmallButtonVariant.OUTLINED}
          contentType={
            isExpanded
              ? SmallButtonContentType.MINUS
              : SmallButtonContentType.PLUS
          }
        />
      )}
      {isExpanded && <MainCatHorizontalLine />}
      {depth === 1 && <SubCatHorizontalLine />}
      {imageSrc ? (
        <Img src={imageSrc} alt="image" />
      ) : (
        <GrayBg>
          <ImageIcon />
        </GrayBg>
      )}
      <IconAndName>
        <Typography variant={TypographyVariant.BODY3}>{name}</Typography>

        <SvgWrapper
          isVisible={!!description}
          id={id}
          data-place="top"
          data-tooltip-content={description}
        >
          <Icon />
        </SvgWrapper>
      </IconAndName>
      <Tooltip
        place="top"
        anchorId={id}
        style={{
          backgroundColor: "#2a3b89",
          zIndex: "99",
          borderRadius: "24px",
        }}
      />
    </Wrapper>
  );
};
