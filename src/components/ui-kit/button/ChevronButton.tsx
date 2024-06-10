import { type FC } from "react";
import { Direction, type IChevronProps } from "./Button.interface";
import styled from "styled-components";
import { LeftArrow } from "../../icons";

const Icon = styled(LeftArrow)<{ direction: Direction }>`
  color: #2a3b89;
  ${({ direction }) =>
    direction === Direction.RIGHT && "transform: rotate(-180deg);"}
`;

const Body = styled.button`
  width: 36px;
  height: 36px;
  box-sizing: border-box;

  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  background-color: #ffffff;
  border: 1px solid #dbe3eb;

  &:hover {
    svg {
      fill: #027aff;
    }
  }

  &:disabled {
    pointer-events: none;
    svg {
      fill: #adb5bd;
    }
  }
`;

export const ChevronButton: FC<IChevronProps> = ({
  disabled,
  onClick,
  direction = Direction.LEFT,
  ...rest
}) => {
  return (
    <Body disabled={disabled} onClick={onClick} {...rest}>
      <Icon direction={direction} />
    </Body>
  );
};
