import { ChangeEvent, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { CounterProps } from "./Counter.interface";
import { TypographyVariant } from "../typography/Typography.interface";
import { Typography } from "../typography/Typography";
import { Plus, Minus } from "../../icons";
import { TextInput } from "../input-fields";

const PlusIcon = styled(Plus)`
  color: #8181a5;
  transform: scale(1.5);
`;
const MinusIcon = styled(Minus)`
  color: #8181a5;
  transform: scale(1.5);
`;

const Body = styled.div<{ disabled?: boolean }>`
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  button {
    ${({ disabled }) =>
      disabled &&
      "box-shadow: none; border: none; background-color: #dbe3eb; pointer-events: none; svg {color: #ffffff;}"}
  }
`;

const Button = styled.button<{ disabled?: boolean }>`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #dbe3eb;
  border-radius: 3px;
  padding: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    border: 1px solid #3B892A;
    box-shadow: 0 0 0 2px rgba(44, 208, 158, 0.2);
    svg {
      color: #2a3b89;
    }
  }
  ${({ disabled }) =>
    disabled &&
    "box-shadow: none; border: none; background-color: #dbe3eb; pointer-events: none; svg {color: #ffffff;}"}
`;

const StyledTextInput = styled(TextInput)`
  width: 40px;
  input {
    text-align: center;
  }
  .wrapperTextField {
    padding: 0 5px;
  }
`;

export const Counter: FC<CounterProps> = ({
  setCount,
  count,
  min,
  max,
  disabled,
  withCountInput,
  className,
}) => {
  const [number, setNumber] = useState<number>(count);

  useEffect(() => {
    if (withCountInput) {
      setCount(number);
    }
  }, [number]);

  useEffect(() => {
    if (withCountInput) {
      setNumber(count);
    }
  }, [count]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (Number(value) === 0 || Number(value) < 1) {
      setNumber(0);
      setCount(0);
    } else {
      setNumber(Number(value));
      setCount(Number(value));
    }
  };

  const onInputBlur = () => {
    if (number === 0 || count === 0) {
      if (min) {
        setNumber(min);
      }
    }

    if (max) {
      if (count >= max) {
        setNumber(max);
      }
    }
    if (min) {
      if (count <= min) {
        setNumber(min);
      }
    } else {
      setNumber(count);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    setNumber(number - 1);
  };
  return (
    <Body className={className} disabled={disabled}>
      <Button disabled={count <= (min ?? 0)} onClick={handleDecrement}>
        <MinusIcon />
      </Button>
      {withCountInput ? (
        <StyledTextInput
          value={number !== 0 ? number : ""}
          type="number"
          onBlur={onInputBlur}
          onChange={handleInputChange}
        />
      ) : (
        <Typography variant={TypographyVariant.BODY5}>{count}</Typography>
      )}

      <Button
        disabled={max ? count >= max : undefined}
        onClick={handleIncrement}
      >
        <PlusIcon />
      </Button>
    </Body>
  );
};
