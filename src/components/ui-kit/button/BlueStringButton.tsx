import styled from "styled-components";
import { BlueStringButtonProps } from "./BlueStringButtonInterface";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  color: #027aff;
  cursor: pointer;
  :disabled {
    color: #adb5bd;
    cursor: default;
  }
`;

const BlueStringButton: React.FunctionComponent<BlueStringButtonProps> = ({
  label,
  disabled,
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick}>
      <Button disabled={disabled}>{label}</Button>
    </Wrapper>
  );
};

export default BlueStringButton;
