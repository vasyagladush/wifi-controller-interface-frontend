import styled from "styled-components";
import { ImageIcon, LeftArrow } from "../../../../../components/icons";
import {
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import { components } from "../../../../../util/backend-api-types";

const Wrapper = styled.div<{ depth: number }>`
  display: flex;
  align-items: center;
  position: relative;
  ${({ depth }) => depth === 0 ? "margin-left: 10px;" : "margin-left: 20px;"}
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ExpandNetworksBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    p {
      text-decoration: underline;
    }
  }
`;

export const IconForNetworksBtn = styled(LeftArrow)<{ isExpanded?: boolean }>`
  color: #8181a5;
  scale: 0.7;
  transform: rotate(${({ isExpanded }) => (isExpanded ? "-270deg" : "-90deg")});
`;

interface ExpandableTreeCellProps {
  name: string;
  networksLength?: number;
  handleClick: () => void;
  onNameClick: (() => void) | undefined;
  isExpanded: boolean;
  depth: number;
}

export const ExpandableAccessPointAndNetworksTreeCell: React.FunctionComponent<
  ExpandableTreeCellProps
> = ({
  name,
  depth,
  handleClick,
  isExpanded,
  onNameClick,
  networksLength,
}) => {
  return (
    <Wrapper depth={depth}>
      <Name>
        { (
          <>
            {" "}
            <Typography
              variant={TypographyVariant.BODY13_REGULAR}
              onClick={onNameClick}
              color="#027AFF"
              hoverUnderline
            >
              {name}
            </Typography>
          </>
        )}

        {!!networksLength && (
          <ExpandNetworksBtn onClick={handleClick}>
            <Typography variant={TypographyVariant.BODY13}>
              {networksLength} network{networksLength > 1 && "s"}
            </Typography>
            <IconForNetworksBtn isExpanded={isExpanded} />
          </ExpandNetworksBtn>
        )}
      </Name>
    </Wrapper>
  );
};
