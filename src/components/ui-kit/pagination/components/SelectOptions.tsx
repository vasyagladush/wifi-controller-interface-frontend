import { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { ArrowDownBlack } from "../../../icons";

const Container = styled.div`
  position: relative;
`;

const DropDownHeader = styled.div<{
  isOpen?: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 5px;
  padding: 7px 10px 7px 12px;
  width: 68px;
  position: relative;
  box-sizing: border-box;
  border-color: ${({ isOpen }) => (isOpen ? "#027aff" : "#DBE3EB")};
`;

const ArrowDown = styled(ArrowDownBlack)`
  color: #556CB1;
`;

const ArrowUp = styled(ArrowDownBlack)`
  color: #027aff;
  transform: rotate(180deg);
  margin-bottom: 2px;
`;

const ValueSelect = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #556CB1;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 101;
`;

const DropDownList = styled.ul`
  border: 1px solid #dbe3eb;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0;
  background: #fff;
  max-height: 300px;
  overflow: auto;
`;

const MenuItem = styled.li`
  list-style: none;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-transform: capitalize;
  color: #556CB1;
  padding: 7px 8px 7px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background: #f4f7f9;
  }
`;

interface SelectOptionsProps {
  value: number;
  onPaginationChange: (pageValue: number, limitValue: number) => void;
}

const SelectDropDown: FC<SelectOptionsProps> = ({
  value,
  onPaginationChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const valueRef = useRef(null);

  const options = [10, 25, 50, 100]; // Can change

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (ref.current !== e.target && e.target !== valueRef.current) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  return (
    <Container>
      <DropDownHeader isOpen={isOpen} onClick={handleExpand} ref={ref}>
        <ValueSelect ref={valueRef}>{value}</ValueSelect>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((el) => (
              <MenuItem
                key={el}
                onClick={() => {
                  onPaginationChange(1, el);
                }}
              >
                {el}
              </MenuItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </Container>
  );
};

export default SelectDropDown;
