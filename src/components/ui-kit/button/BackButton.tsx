import styled from "styled-components";
import { ArrowLeft } from "../../icons";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { BackButtonProps } from "./BackButtonInterface";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: max-content;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  margin-right: 10px;
`;

const BackButton: React.FunctionComponent<BackButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      <StyledArrowLeft />
      {typeof label === "string" ? (
        <Typography variant={TypographyVariant.HEADER2}>{label}</Typography>
      ) : (
        label
      )}
    </Wrapper>
  );
};

export default BackButton;
