import {
  type ChangeEvent,
  type FC,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import styled, { css } from "styled-components";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import { Typography } from "../typography/Typography";
import { countries, Country } from "../../../constants/countries";
import {
  DropdownInputBorderVariant,
  IPhonenumberDropdownProps,
} from "./InputDropdown.interface";
import { TypographyVariant } from "../typography/Typography.interface";
import { ArrowDownGrey, ArrowUpBlue, CheckBlue, SearchIcon } from "../../icons";
import { DropDownHeaderProps } from "../drop-down/Dropdown.interface";

const borderVariants = {
  error: css`
    border: solid 1px #ef6355;
    z-index: 99;
    padding-left: 9px;
  `,
  default: css`
    border-color: #dbe3eb;
  `,
  active: css`
    border: solid 1px rgba(2, 122, 255, 1);
    box-shadow: 0 0 0 3px rgba(2, 122, 255, 0.15);
  `,
};

const StyledCheckBlue = styled(CheckBlue)`
  margin-left: 5px;
`;

const DropDownHeader = styled.div<DropDownHeaderProps>`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;

  cursor: pointer;
  background-color: #f4f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dbe3eb;
  border-radius: 5px 0 0 5px;
  padding: 6px 7px 6px 10px;
  min-height: 18px;
  position: relative;
  ${({ isOpen }) =>
    isOpen
      ? css`
          background-color: #ffffff;
          border: solid 1px rgba(2, 122, 255, 1);
          box-shadow: 0 0 0 3px rgba(2, 122, 255, 0.15);
          z-index: 100;
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
  background-color: #fff;
  top: 43px;
  width: 100%;
  z-index: 99;
  border: 1px solid #eeeeee;
  padding-top: 12px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
`;

const DropDownList = styled.ul`
  box-sizing: border-box;
  padding: 0;
  margin: 10px 0;
  background: #fff;
  overflow: auto;
  max-height: 206px;
`;

const SearchInput = styled.input`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #556CB1;

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

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
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
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #556CB1;
`;

const CategoryCode = styled(CategoryTitle)`
  color: #8181a5;
  margin-left: 5px;
`;

const FlagContainer = styled.div<{ isCategoryItem?: boolean }>`
  ${({ isCategoryItem }) =>
    isCategoryItem ? "margin-right: 5px;" : "margin-right: 2px;"}
  display: flex;
  align-items: center;
`;

const StyledFlagIcon = styled(FlagIcon)`
  width: 22px;
  height: 16px;
`;

const InputSection = styled.div`
  position: relative;
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const Search = styled.input<{
  variant?: DropdownInputBorderVariant;
  disabled?: boolean;
}>`
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
  background-color: ${(props) => (props.disabled ? "#f4f7f9" : "#ffffff")};
  border: 1px solid #dbe3eb;
  border-left: none;
  border-radius: 0 5px 5px 0;
  outline: none;
  ${({ variant }) =>
    borderVariants[variant ?? DropdownInputBorderVariant.DEFAULT]};
  &:focus-within {
    ${({ variant }) =>
      variant === DropdownInputBorderVariant.ERROR
        ? borderVariants[variant]
        : borderVariants[DropdownInputBorderVariant.ACTIVE]}
    padding-left: 9px;
    z-index: 99;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  left: 23px;
  top: 9px;
  position: absolute;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const CountryCode = styled.span`
  margin: 0 5px 0 2px;
`;

const CountryFlagIcon: React.FunctionComponent<{
  code: FlagIconCode;
  isCategoryItem?: boolean;
}> = ({ code, isCategoryItem }) => (
  <FlagContainer isCategoryItem={isCategoryItem}>
    <StyledFlagIcon code={code} />
  </FlagContainer>
);

export const PhonenumberDropdown: FC<IPhonenumberDropdownProps> = ({
  onChange,
  label,
  required,
  variant,
  value,
  disabled,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchCountry, setSearchCountry] = useState<string>("");

  const [selectedCountry, setSelectedCountry] = useState<Country>({
    countryName: "United Kingdom",
    code: "+44",
    country: "GB",
  });
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  useEffect(() => {
    if (value) {
      setEnteredNumber(value.number);
      const initialCountry = countries.find(
        (country) => country.code === value?.code
      );
      setSelectedCountry({
        countryName: initialCountry?.countryName ?? "United Kingdom",
        code: initialCountry?.code ?? "+44",
        country: initialCountry?.country ?? "GB",
      });
    }
  }, [value]);

  const ref = useRef(null);
  const valueRef = useRef(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (
        ref.current !== e.target &&
        e.target !== valueRef.current &&
        e.target !== searchRef.current
      ) {
        setIsOpen(false);
        setSearchCountry("");
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCountry(event.target.value);
  };

  const handlePhonenumber = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredNumber(event.target.value);
    onChange({
      code: selectedCountry.code,
      number: event.target.value,
      countryCode: selectedCountry.country,
    });
  };

  const handleItemClick = (country: Country) => () => {
    if (country.country === selectedCountry.country) {
      onChange({
        code: country.code,
        number: enteredNumber,
        countryCode: country.country,
      });
      setIsOpen(!isOpen);
    } else {
      setSelectedCountry(country);
      setSearchCountry("");
      onChange({
        code: country.code,
        number: enteredNumber,
        countryCode: country.country,
      });
      setIsOpen(!isOpen);
    }
  };

  const filterItems = (country: Country) => {
    if (
      country.countryName.toLowerCase().includes(searchCountry.toLowerCase())
    ) {
      return true;
    }
  };

  const handleExpand = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isOpen && !disabled) {
        e.stopPropagation();
        setIsOpen(true);
        setTimeout(() => {
          searchRef.current?.focus();
        }, 100);
      }
      if (isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen, disabled]
  );

  return (
    <Container>
      {label && (
        <StyledTypography variant={TypographyVariant.HEADER3}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </StyledTypography>
      )}

      <InputSection>
        <DropDownHeader ref={ref} isOpen={isOpen} onClick={handleExpand}>
          <ValueSelect ref={valueRef}>
            <CountryFlagIcon code={selectedCountry.country} />
            <CountryCode>{selectedCountry.code}</CountryCode>
          </ValueSelect>
          {isOpen ? <ArrowUpBlue /> : <ArrowDownGrey />}
        </DropDownHeader>

        {isOpen && (
          <DropDownListContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div style={{ position: "relative", padding: "0 14px" }}>
              <SearchInput
                value={searchCountry}
                onChange={handleSearch}
                placeholder="Search country"
              />
              <StyledSearchIcon />
            </div>
            <DropDownList>
              {countries.filter(filterItems).map((country, index) => {
                return (
                  <div key={index}>
                    <Category onClick={handleItemClick(country)}>
                      <CategoryTitleWrapper>
                        <CountryFlagIcon
                          isCategoryItem={isOpen}
                          code={country.country}
                        />
                        <CategoryTitle>{country.countryName}</CategoryTitle>
                        <CategoryCode>{country.code}</CategoryCode>
                      </CategoryTitleWrapper>
                      {selectedCountry.code === country.code && (
                        <StyledCheckBlue />
                      )}
                    </Category>
                  </div>
                );
              })}
            </DropDownList>
          </DropDownListContainer>
        )}
        <Search
          disabled={disabled}
          variant={variant}
          type="text"
          value={enteredNumber}
          onChange={handlePhonenumber}
        />
      </InputSection>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
