import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const StyledTextInput = styled.input<{
  isFilled: boolean;
  hasError: boolean;
}>`
  caret-color: transparent;
  outline: 0;
  border-width: 0 0 1px;

  border-bottom: ${({ isFilled, hasError }) =>
    hasError && isFilled
      ? "1px solid #EF6355"
      : !hasError && isFilled
      ? "1px solid #00BC82"
      : "1px solid #c2c4c6;"};
  width: 44px;
  height: 40px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 22px;
  text-align: center;
  margin-right: 10px;
  :nth-child(3n) {
    margin-right: 25px;
  }

  @keyframes inputFocus {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    50% {
      box-shadow: 0 3px 0 0px rgba(2, 122, 255, 0.5);
    }
    100% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
  }
  &:focus {
    animation: inputFocus 1s infinite;
  }
`;
const InputsContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
interface CodeInputProps {
  setCode: (code: string) => void;
  error?: boolean;
}
export const CodeInput: React.FC<CodeInputProps> = ({
  setCode,
  error = false,
}) => {
  const [codeValues, setCodeValues] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleCodeChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCode = [...codeValues];
    newCode[index] = event.target.value;
    setCodeValues(newCode);
    if (event.target.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (event.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    setCode(newCode.join(""));
  };

  const handlePaste = (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const clipboardData = event.clipboardData.getData("text");
    if (clipboardData.length === 6 && /^[0-9]+$/.test(clipboardData)) {
      const newCode = [...codeValues];
      newCode.splice(index, 6, ...clipboardData.split(""));
      setCodeValues(newCode);
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <InputsContainer>
      {codeValues.map((value, index) => (
        <StyledTextInput
          key={index}
          type="text"
          maxLength={1}
          value={value}
          isFilled={value !== ""}
          hasError={error}
          onChange={(event) => {
            handleCodeChange(index, event);
          }}
          onPaste={(event) => {
            handlePaste(index, event);
          }}
          ref={(el: HTMLInputElement) => inputRefs.current.push(el)}
        />
      ))}
    </InputsContainer>
  );
};
