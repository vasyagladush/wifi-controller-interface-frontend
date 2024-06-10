import { Tooltip } from "react-tooltip";
import { type TooltipTextProps } from "./Tooltip.interface";
import "react-tooltip/dist/react-tooltip.css";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

export const TooltipText: React.FunctionComponent<TooltipTextProps> = ({
  children,
  id,
  text,
  offset,
  noArrow,
  dataPlace,
  dataEvent,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <a
        id={id}
        data-tooltip-html={text}
        data-tooltip-events={dataEvent && [dataEvent]}
      >
        {children}
        <Tooltip
          place="top"
          anchorId={id}
          offset={offset}
          data-place={dataPlace}
          noArrow={noArrow}
          clickable
          style={{
            fontSize: "12px",
            lineHeight: "12px",
            backgroundColor: "#556CB1",
            borderRadius: "24px",
            position: "absolute",
          }}
        />
      </a>
    </Wrapper>
  );
};
