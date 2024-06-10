import styled from "styled-components";
import { CloseButton } from "../button";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";

const Wrapper = styled.div<{ hide?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px 12px 30px;
  border-bottom: 1px solid #eeeeee;
  ${({ hide }) => hide && "display: none"}
  @media (max-width: 576px) {
    padding-left: 16px;
  }
`;

const BtnWrapper = styled.div`
  margin-left: auto;
  @media (max-width: 576px) {
    margin-right: 10px;
  }
`;

export interface ModalHeaderProps {
  title?: string | JSX.Element;
  handleClose: () => void;
  className?: string;
  hide?: boolean;
}

export const ModalHeader: React.FunctionComponent<ModalHeaderProps> = ({
  title,
  handleClose,
  hide,
}) => {
  return (
    <Wrapper hide={hide}>
      {typeof title === "string" ? (
        <Typography variant={TypographyVariant.HEADER2}>{title}</Typography>
      ) : (
        title
      )}
      <BtnWrapper>
        <CloseButton onClick={handleClose} />
      </BtnWrapper>
    </Wrapper>
  );
};
