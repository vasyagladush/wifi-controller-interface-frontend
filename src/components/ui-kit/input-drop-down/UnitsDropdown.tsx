import { type ChangeEvent, type FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Typography } from "../typography/Typography";
import { IUnitsDropdownProps, UnitItem } from "./InputDropdown.interface";
import { TypographyVariant } from "../typography/Typography.interface";
import { ArrowDownGrey, ArrowUpBlue, CheckBlue } from "../../icons";
import { DropDownHeaderProps } from "../drop-down/Dropdown.interface";

const CheckIcon = styled(CheckBlue)`
  width: 10px;
`;

const DropDownHeader = styled.div<DropDownHeaderProps>`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  width: 60px;

  cursor: pointer;
  background-color: #f4f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dbe3eb;
  border-radius: 5px 0 0 5px;
  padding: 6px 10px 6px 12px;
  min-height: 18px;
  position: relative;
  ${({ isOpen }) =>
    isOpen
      ? css`
          background-color: #ffffff;
          border: solid 1px rgba(2, 122, 255, 1);
          box-shadow: 0 0 0 3px rgba(2, 122, 255, 0.15);
        `
      : ""}
`;

const ValueSelect = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  color: #556CB1;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  top: 43px;
  width: 56px;
  z-index: 99;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
`;

const DropDownList = styled.ul`
  box-sizing: border-box;
  padding: 0;
  background: #fff;
  margin: 3px 0;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 12px;
  cursor: pointer;
  border-bottom: solid 1px #eeeeee;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f4f7f9;
  }
`;

const CategoryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CategoryTitle = styled(Typography)`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #556CB1;
`;

const InputSection = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const ErrorMessage = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #ef6355;
  margin-top: 5px;
`;

const Search = styled.input<{ disabled?: boolean }>`
  width: 100%;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #556CB1;
  margin-left: -1px;
  padding: 7px 10px;
  box-sizing: border-box;

  border: 1px solid #dbe3eb;
  border-left: none;
  border-radius: 0 5px 5px 0;
  outline: none;
  ${({ disabled }) =>
    disabled ? "background-color: #F4F5F9;" : "background-color: #ffffff;"}

  &:focus-within {
    padding-left: 9px;
    border: solid 1px rgba(2, 122, 255, 1);
    box-shadow: 0 0 0 3px rgba(2, 122, 255, 0.15);
    z-index: 99;
  }
`;

const Container = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ disabled }) => disabled && "pointer-events: none;"}
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 3px;
`;

export const UnitsDropdown: FC<IUnitsDropdownProps> = ({
  onChange,
  items,
  defaultItem,
  defaultValue,
  label,
  value,
  unitValue,
  valueError,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enteredValue, setEnteredValue] = useState<UnitItem>({
    unit: defaultItem ?? unitValue ?? items[0],
    value: defaultValue ?? value ?? "",
  });

  const ref = useRef(null);
  const valueRef = useRef(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEnteredValue({
      value: value ?? "",
      unit: unitValue ?? enteredValue.unit,
    });
  }, [value, unitValue]);

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (
        ref.current !== e.target &&
        e.target !== valueRef.current &&
        e.target !== searchRef.current
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  const handleExpand = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 100);
    }
  };

  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue({ ...enteredValue, value: event.target.value });
    onChange({ unit: enteredValue.unit, value: event.target.value });
  };

  const handleItemClick = (unit: string) => () => {
    if (enteredValue.unit === unit) {
      setIsOpen(!isOpen);
    } else {
      setEnteredValue({ ...enteredValue, unit });
      onChange({ ...enteredValue, unit });
      setIsOpen(!isOpen);
    }
  };

  return (
    <Container disabled={disabled}>
      {label && (
        <StyledTypography variant={TypographyVariant.HEADER3}>
          {label}
        </StyledTypography>
      )}
      <InputSection>
        <DropDownHeader ref={ref} isOpen={isOpen} onClick={handleExpand}>
          <ValueSelect ref={valueRef}>{enteredValue.unit}</ValueSelect>
          {isOpen ? <ArrowUpBlue /> : <ArrowDownGrey />}
        </DropDownHeader>

        {isOpen && (
          <DropDownListContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <DropDownList>
              {items.map((unit, index) => {
                return (
                  <Category key={index} onClick={handleItemClick(unit)}>
                    <CategoryTitleWrapper>
                      <CategoryTitle>{unit}</CategoryTitle>
                    </CategoryTitleWrapper>
                    {enteredValue.unit === unit && <CheckIcon />}
                  </Category>
                );
              })}
            </DropDownList>
          </DropDownListContainer>
        )}
        <Search
          type="text"
          value={enteredValue.value}
          onChange={handleValue}
          disabled={disabled}
        />
      </InputSection>
      {valueError && <ErrorMessage>{valueError}</ErrorMessage>}
    </Container>
  );
};
