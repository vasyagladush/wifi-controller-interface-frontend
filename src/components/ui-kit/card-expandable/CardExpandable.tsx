import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowDown1 } from "../../icons";
import { TypographyVariant } from "../typography/Typography.interface";
import { Typography } from "../typography/Typography";

const CardWrapper = styled.section<{ withoutBorder?: boolean }>`
  border-radius: 10px;
  padding: 20px 20px 26px 30px;
  margin-top: 20px;
  background: #ffffff;
  ${({ withoutBorder }) =>
    withoutBorder
      ? "padding: 0;"
      : "box-shadow: 0px 2px 15px rgba(108, 108, 138, 0.15);"}
`;

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => (props[`aria-expanded`] ? `13px` : `0`)};
  gap: 10px;
`;

const CardTitleWrapper = styled.div`
  flex: 1 0 auto;
  @media (max-width: 900px) {
    flex: initial;
  }
`;

const CardTitleText = styled(Typography)`
  text-transform: uppercase;
`;

const AccordionButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(194, 206, 219, 0.58);
  border: 1px solid #dbe3eb;
`;

const Arrow = styled(ArrowDown1)`
  padding-top: 3px;
  transform: ${(props) =>
    props[`aria-expanded`] ? `rotateZ(0deg)` : `rotate(270deg)`};
  ${(props) =>
    props[`aria-expanded`] ? "path {fill: #027AFF;}" : "path {fill: #495B6C;}"}
`;

const CardContent = styled.div`
  padding-right: 10px;
`;

const CardTitle: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) =>
  typeof children === `string` ? (
    <CardTitleText variant={TypographyVariant.HEADER2}>
      {children}
    </CardTitleText>
  ) : (
    <>{children}</>
  );

interface CardProps {
  title?: string | JSX.Element;
  collapsedTitle?: string | JSX.Element;
  isAccordion?: boolean;
  defaultExpanded?: boolean;
  children: React.ReactNode;
  className?: string;
  withoutCircle?: boolean;
  withoutBorder?: boolean;
  disableAccordion?: boolean;
}

export const CardExpandable: React.FunctionComponent<CardProps> = ({
  title,
  collapsedTitle,
  isAccordion,
  defaultExpanded,
  children,
  className,
  withoutCircle,
  withoutBorder,
  disableAccordion,
}) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded ?? false);
  useEffect(() => {
    if (!defaultExpanded) {
      setExpanded(typeof window !== `undefined` && window.innerWidth < 900);
    }
  }, []);

  useEffect(() => {
    defaultExpanded ? setExpanded(true) : setExpanded(false);
  }, [defaultExpanded]);

  const handleTriggerClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <CardWrapper className={className} withoutBorder={withoutBorder}>
      <CardHeader aria-expanded={!isAccordion || isExpanded}>
        {isAccordion && withoutCircle && (
          <Arrow
            onClick={disableAccordion ? undefined : handleTriggerClick}
            aria-expanded={isExpanded}
          />
        )}
        <CardTitleWrapper>
          {!isExpanded ? (
            <CardTitle>{collapsedTitle ?? title}</CardTitle>
          ) : (
            <CardTitle>{title}</CardTitle>
          )}
        </CardTitleWrapper>

        {isAccordion && !withoutCircle && (
          <AccordionButton
            type="button"
            onClick={disableAccordion ? undefined : handleTriggerClick}
          >
            <Arrow aria-expanded={isExpanded} />
          </AccordionButton>
        )}
      </CardHeader>
      {(!isAccordion || isExpanded) && <CardContent>{children}</CardContent>}
    </CardWrapper>
  );
};
