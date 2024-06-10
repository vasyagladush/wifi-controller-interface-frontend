import { type ChangeEvent, type FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FlagIcon, type FlagIconCode } from "react-flag-kit";
import { ArrowUpBlue, ArrowDownGrey, SearchIcon, CheckBlue } from "../../icons";
import { countries, Country } from "../../../constants/countries";
import { createPortal } from "react-dom";
import { DropdownInputBorderVariant, ICountryDropdownProps } from ".";
import { DropDownHeaderProps } from "../drop-down/Dropdown.interface";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";

const borderVariants = {
  error: css`
    border-color: #ef6355;
  `,
  default: css`
    border-color: #dbe3eb;
  `,
  active: css`
    border-color: #027aff;
    box-shadow: 0 0 0 3px rgba(2, 120, 255, 0.153);
  `,
};

const CheckIcon = styled(CheckBlue)`
  padding-right: 3px;
`;

const DropDown = styled.div<DropDownHeaderProps>`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;

  cursor: pointer;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dbe3eb;
  ${({ disabled }) =>
    disabled && "background-color: #F4F5F9; span { color: #9898ad;}"}
  border-radius: 5px;
  padding: 6px 10px 6px 12px;
  min-height: 18px;
  position: relative;
  ${({ variant }) =>
    borderVariants[variant ?? DropdownInputBorderVariant.DEFAULT]};
  ${({ isOpen }) =>
    isOpen
      ? css`
          border: solid 1px rgba(2, 122, 255, 1);
          box-shadow: 0px 0px 0px 3px rgba(2, 122, 255, 0.15);
        `
      : ""}
`;

const ValueSelect = styled.span<{ disabled?: boolean }>`
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  color: #2a3b89;
`;

const DropDownListContainer = styled.div<{
  width?: number;
  top?: number;
  left?: number;
}>`
  position: absolute;
  z-index: 15;
  ${({ top }) => top && `top: ${top + 45}px;`};
  ${({ left }) => left && `left: ${left}px;`}
  width: ${({ width }) => width && `${width}px`};
  max-height: 250px;
  overflow: auto;

  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(129, 129, 165, 0.15);
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
  padding: 12px 10px 12px 12px;
  cursor: pointer;

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
  color: #2a3b89;
`;

const InputSection = styled.div<{ fullWidth?: boolean; disabled?: boolean }>`
  position: relative;
  height: 36px;
  width: 100%;
  ${({ disabled }) => disabled && "pointer-events: none;"}
  align-items: center;
  border-radius: 5px;
`;

const Container = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 5px;
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

const FlagContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const StyledFlagIcon = styled(FlagIcon)`
  height: 50%;
`;

const SearchInputWrapper = styled.div`
  margin: 12px 0;
  position: relative;
  padding: 0 12px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  left: 23px;
  top: 9px;
  position: absolute;
`;

const SearchInput = styled.input`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #2a3b89;

  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: 6px 10px 6px 33px;
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &:focus-within {
    border: solid 1px #027aff;
  }

  ::placeholder {
    color: #8181a5;
  }
`;

const CountryFlagIcon: React.FunctionComponent<{
  code: FlagIconCode;
}> = ({ code }) => (
  <FlagContainer>
    <StyledFlagIcon code={code} />
  </FlagContainer>
);

export const CountryDropdown: FC<ICountryDropdownProps> = ({
  onChange,
  fullWidth,
  label,
  value,
  required,
  error,
  withSearch,
  borderVariant,
  disabled,
  uniqueId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState<string>("");
  const ref = useRef(null);
  const valueRef = useRef(null);

  const dropdownElement = document.getElementById(uniqueId ?? "dropdown");
  const rect = dropdownElement?.getBoundingClientRect();

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

  const handleExpand = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: Country) => () => {
    onChange(item);
    setSearchString("");
    setIsOpen(!isOpen);
  };

  const filterItems = (item: Country) => {
    if (item.countryName.toLowerCase().includes(searchString.toLowerCase())) {
      return true;
    } else if (item.code) {
      return item.code
        .toString()
        .toLowerCase()
        .includes(searchString.toLowerCase());
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <Container fullWidth={fullWidth}>
      {label && (
        <StyledTypography variant={TypographyVariant.HEADER3}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </StyledTypography>
      )}

      <InputSection disabled={disabled} fullWidth={fullWidth}>
        <DropDown
          id={uniqueId ?? "dropdown"}
          disabled={disabled}
          variant={borderVariant}
          ref={ref}
          isOpen={isOpen}
          onClick={handleExpand}
        >
          <ValueSelect disabled={disabled} ref={valueRef}>
            <CountryFlagIcon code={value.country} />
            {value.countryName}
          </ValueSelect>
          {isOpen ? <ArrowUpBlue /> : <ArrowDownGrey />}
        </DropDown>

        {isOpen &&
          createPortal(
            <DropDownListContainer
              width={rect?.width}
              left={rect?.left}
              top={rect?.top}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <DropDownList>
                {withSearch && (
                  <SearchInputWrapper>
                    <SearchInput
                      value={searchString}
                      onChange={handleSearch}
                      placeholder="Search..."
                    />

                    <StyledSearchIcon />
                  </SearchInputWrapper>
                )}
                {countries.filter(filterItems).map((item, index) => {
                  return (
                    <div key={index}>
                      <Category onClick={handleItemClick(item)}>
                        <CategoryTitleWrapper>
                          <CountryFlagIcon code={item.country} />
                          <CategoryTitle>{item.countryName}</CategoryTitle>
                        </CategoryTitleWrapper>
                        {value.country === item?.country && <CheckIcon />}
                      </Category>
                    </div>
                  );
                })}
              </DropDownList>
            </DropDownListContainer>,
            document.body
          )}
      </InputSection>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
