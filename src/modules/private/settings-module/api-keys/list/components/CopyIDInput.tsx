import React, { FC, useState } from "react";
import styled from "styled-components";
import { TooltipText } from "../../../../../../components/ui-kit";
import Copy from "../../../../../../components/icons/Copy";
import EyeBlock from "../../../../../../components/icons/EyeBlock";
import EyeBlockVisible from "../../../../../../components/icons/EyeBlockVisible";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  height: 36px;
  color: #2a3b89;
  border-top: 1px solid #dbe3eb;
  border-bottom: 1px solid #dbe3eb;
  border-left: 1px solid #dbe3eb;
  border-right: 0;
  border-radius: 5px 0 0 5px;
  padding: 7px 8px;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const SecretInput = styled.input`
  width: 100%;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  height: 36px;
  color: #2a3b89;
  border-top: 1px solid #dbe3eb;
  border-bottom: 1px solid #dbe3eb;
  border-left: 0;
  border-right: 0;
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
  background-color: #2a3b89;
  color: #ffffff;
  border-radius: 0 5px 5px 0;
  transition: 0.1s;
  cursor: pointer;
  margin: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  :hover {
    background-color: #2a3b89;
  }
`;

const EyeButton = styled.button`
  padding: 9px 16px;
  border: none;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  background-color: #dbe3eb;
  color: #ffffff;
  border-radius: 5px 0 0 5px;
  transition: 0.1s;
  cursor: pointer;
  margin: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const StyledTooltipText = styled(TooltipText)`
  font-family: "Ubuntu";
`;

interface InputProps {
  text?: string;
  className?: string;
  hideText?: boolean;
}

export const CopyIDInput: FC<InputProps> = ({ text, className, hideText }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!text) return;
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  if (hideText) {
    return (
      <Container
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
        className={className}
      >
        <EyeButton onClick={toggleVisibility}>
          {!visible ? <EyeBlock /> : <EyeBlockVisible />}
        </EyeButton>
        <SecretInput
          value={text ?? "nothing here"}
          readOnly
          type={visible ? "text" : "password"}
        />
        <StyledTooltipText
          id={text ?? "copyId"}
          text="Copied to clipboard"
          offset={15}
          dataEvent="click"
          data-tooltip-delay-hide={1000}
        >
          <CopyButton onClick={handleCopy}>
            <Copy fill={"white"} />
          </CopyButton>
        </StyledTooltipText>
      </Container>
    );
  }

  return (
    <Container
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
      className={className}
    >
      <Input value={text ?? "nothing here"} readOnly />
      <StyledTooltipText
        id={text ?? "copyId"}
        text="Copied to clipboard"
        offset={15}
        dataEvent="click"
        data-tooltip-delay-hide={1000}
      >
        <CopyButton onClick={handleCopy}>
          <Copy fill={"white"} />
        </CopyButton>
      </StyledTooltipText>
    </Container>
  );
};
