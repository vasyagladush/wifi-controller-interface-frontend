import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "../../icons";
import { TooltipText } from "../tooltip/Tooltip";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  box-sizing: border-box;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbe3eb;
  padding: 0 8px;
  border-radius: 5px 0 0 5px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  height: 36px;
  color: #556CB1;
  border-top: 1px solid #dbe3eb;
  border-bottom: 1px solid #dbe3eb;
  padding: 7px 8px;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const CopyButton = styled.button`
  padding: 9px 16px;
  border: none;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  background-color: #027aff;
  color: #ffffff;
  border-radius: 0 5px 5px 0;
  transition: 0.1s;
  cursor: pointer;
  margin: 0;

  :hover {
    background-color: #0254d9;
  }
`;

const StyledTooltipText = styled(TooltipText)`
  font-family: "Ubuntu";
`;

interface CopyInputProps {
  link?: string;
  className?: string;
}

export const CopyInput: FC<CopyInputProps> = ({ link, className }) => {
  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!link) return;
    const el = document.createElement("textarea");
    el.value = link;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <Container className={className}>
      <IconBox>
        <Link />
      </IconBox>
      <Input value={link ?? "N/A"} readOnly />
      <StyledTooltipText
        id="copyPaymentLink"
        text="Copied to clipboard"
        offset={15}
        dataEvent="click"
        data-tooltip-delay-hide={1000}
      >
        <CopyButton onClick={handleCopy}>Copy</CopyButton>
      </StyledTooltipText>
    </Container>
  );
};
