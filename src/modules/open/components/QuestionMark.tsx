/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styled from "styled-components";
import { Question } from "../../../components/icons";

const Wrapper = styled.span`
  display: flex;
  align-items: center;

  :hover {
    svg {
      transition: 300ms;
      color: #3B892A;
    }
  }
`;

const StyledQuestionIcon = styled(Question)`
  margin-left: 3px;
  cursor: pointer;
  color: #2a3b89;
`;

export interface QuestionMarkProps {
  id: string;
  label: string;
  tooltipText: string;
  width?: number;
}

export const QuestionMark: React.FunctionComponent<QuestionMarkProps> = ({
  id,
  label,
  tooltipText,
  width,
}) => {
  return (
    <Wrapper>
      {label}{" "}
      <StyledQuestionIcon
        id={id}
        data-place="top"
        data-tooltip-content={tooltipText}
      />
      <Tooltip
        place="top"
        anchorId={id}
        style={{
          backgroundColor: "#3B892A",
          zIndex: "99",
          width: `${width ? `${width}px` : "initial"}`,
        }}
      />
    </Wrapper>
  );
};
