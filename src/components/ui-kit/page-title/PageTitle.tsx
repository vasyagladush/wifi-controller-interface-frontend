import { type FC } from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { ArrowLeft } from "../../icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 576px) {
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  padding-right: 5px;
  cursor: pointer;
`;

const StyledTypography = styled(Typography)`
  @media (max-width: 576px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }
`;

const SubTitle = styled(Typography)`
  margin-top: 5px;
  font-weight: 300;
  color: #495b6c;
  @media (max-width: 576px) {
    text-align: center;
  }
`;

interface TitleProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  smallTitle?: boolean;
  className?: string;
}

export const PageTitle: FC<TitleProps> = ({
  title,
  subtitle,
  onBack,
  className,
  smallTitle,
}) => {
  return (
    <Container className={className}>
      {onBack ? (
        <Row>
          <StyledArrowLeft onClick={onBack} />
          <StyledTypography
            variant={
              smallTitle ? TypographyVariant.HEADER2 : TypographyVariant.HEADER1
            }
          >
            {title}
          </StyledTypography>
        </Row>
      ) : (
        <StyledTypography
          variant={
            smallTitle ? TypographyVariant.HEADER2 : TypographyVariant.HEADER1
          }
        >
          {title}
        </StyledTypography>
      )}
      {subtitle && (
        <SubTitle variant={TypographyVariant.HEADLINE}>{subtitle}</SubTitle>
      )}
    </Container>
  );
};
