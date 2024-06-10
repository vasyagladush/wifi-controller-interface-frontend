import styled from "styled-components";
import { ImageIcon, LeftArrow } from "../../../../../components/icons";
import {
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
// import { ProductVariantWithParentProduct } from "../../../../../util/types";

const Wrapper = styled.div<{ depth: number }>`
  display: flex;
  align-items: center;
  position: relative;
  ${({ depth }) => depth !== 0 && "margin-left: 10px;"}
`;

const Img = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 5px;
  margin-right: 10px;
  z-index: 2;
  object-fit: contain;
  background: #eee;
`;

const GrayBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 5px;
  background-color: #eee;
  margin-right: 10px;
  z-index: 2;
  svg {
    scale: 2;
  }
`;

const IconAndName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ExpandVariantsBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    p {
      text-decoration: underline;
    }
  }
`;

export const IconForVariantsBtn = styled(LeftArrow)<{ isExpanded?: boolean }>`
  color: #8181a5;
  scale: 0.7;
  transform: rotate(${({ isExpanded }) => (isExpanded ? "-270deg" : "-90deg")});
`;

interface ExpandableTreeCellProps {
  variant: any;
  variantsLength?: number;
  handleClick: () => void;
  onNameClick: (() => void) | undefined;
  isExpanded: boolean;
  depth: number;
  stockTable?: boolean;
}

export const ExpandableVariantsTreeCell: React.FunctionComponent<
  ExpandableTreeCellProps
> = ({
  variant,
  depth,
  handleClick,
  isExpanded,
  onNameClick,
  stockTable,
  variantsLength,
}) => {
  const imageSrc = variant.images?.[0]?.url;
  const productName = variant.parentProduct?.name;
  const variantName =
    depth === 1
      ? variant.productOptionConfig
          .map((config: any) => config.optionValue)
          .join(" / ")
      : undefined;
  return (
    <Wrapper depth={depth}>
      <div>
        {imageSrc ? (
          <Img src={imageSrc} alt="image" />
        ) : (
          <GrayBg>
            <ImageIcon />
          </GrayBg>
        )}
      </div>
      <IconAndName>
        <Typography
          variant={TypographyVariant.BODY13_REGULAR}
          onClick={onNameClick}
          color="#027AFF"
          hoverUnderline
        >
          {productName}
        </Typography>
        <Typography variant={TypographyVariant.BODY13_REGULAR} color="#2a3b89">
          {variantName}
        </Typography>

        {!!variantsLength && !stockTable && (
          <ExpandVariantsBtn onClick={handleClick}>
            <Typography variant={TypographyVariant.BODY13}>
              {variantsLength} variant{variantsLength > 1 && "s"}
            </Typography>
            <IconForVariantsBtn isExpanded={isExpanded} />
          </ExpandVariantsBtn>
        )}
      </IconAndName>
    </Wrapper>
  );
};
