/* eslint-disable no-extra-boolean-cast */
import { type FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { DropDownHeaderProps } from "./Dropdown.interface";
import { ArrowDownGrey, SearchIcon } from "../../icons";
import { IBrandsDropdownProps } from "./BrandsDropdown.interface";
import { Checkbox } from "../checkbox/Checkbox";
import { TypographyVariant } from "../typography/Typography.interface";
import { BrandApiType } from "../../../util/types";
import { Button, ButtonVariant } from "../button";

const Container = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  border-radius: 5px;
  padding: 6px 10px 6px 12px;
  min-height: 18px;
  position: relative;
  transition: 200ms;
  width: 100%;
  box-sizing: border-box;

  ${({ disabled }) =>
    disabled &&
    "pointer-events: none; color: #8181A5; border: solid 1px rgba(0, 0, 0, 0); background-color: #F4F5F9;"}

  &:hover {
    border: solid 1px rgba(0, 0, 0, 0);
    box-shadow: 0 0 10px rgba(129, 129, 165, 0.3);
  }
`;

const ValueSelect = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  color: #2a3b89;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  width: calc(100% - 2px);
  top: 43px;
  background: #fff;
  z-index: 11;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
`;

const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 6px 10px 10px 12px;
  margin: 3px 0;
  max-height: 300px;
  overflow: auto;
`;

const InputSection = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  position: relative;
  height: 36px;
  width: 100%;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
`;

const StyledCheckbox = styled(Checkbox)`
  div {
    padding: 0;
  }
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

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-flex;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 5px;
`;

const ClearButton = styled(Button)`
  height: auto;
  position: absolute;
  top: 35px;
  right: 0;
  border: none;
  padding: 0;
  color: #8181a5;
  transition: 0.2s;
  :hover {
    box-shadow: none;
    color: #2a3b89;
  }
`;

export const BrandsDropdown: FC<IBrandsDropdownProps> = ({
  brands,
  selectedBrands,
  setSelectedBrands,
  fullWidth = true,
  disabled,
  className,
  label,
  externalSearchHandler,
  hideClearButton,
}) => {
  const [searchString, setSearchString] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (ref.current !== e.target && e.target !== valueRef.current) {
        setIsOpen(false);
        setSearchString("");
        externalSearchHandler?.(undefined);
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  const handleExpand = () => {
    setIsOpen(!isOpen);
    externalSearchHandler?.(undefined);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
    externalSearchHandler?.(event.target.value);
  };

  const handleCheckboxChange = (item: BrandApiType) => {
    setSelectedBrands((prev) => {
      return prev.find((el) => el._id === item._id)
        ? prev.filter((el) => el._id !== item._id)
        : [...prev, item];
    });
  };

  const filterItems = (item: BrandApiType): boolean => {
    if (item.name?.toLowerCase().includes(searchString.toLowerCase())) {
      return true;
    }
    return false;
  };

  return (
    <Container fullWidth={fullWidth} className={className}>
      {label && (
        <LabelWrapper>
          <StyledTypography variant={TypographyVariant.HEADER3}>
            {label}
          </StyledTypography>
        </LabelWrapper>
      )}

      <InputSection fullWidth={fullWidth}>
        <DropDown disabled={disabled} ref={ref} onClick={handleExpand}>
          <ValueSelect ref={valueRef}>
            {!!selectedBrands.length
              ? `Has selected brand${selectedBrands.length > 1 ? "s" : ""}`
              : "Select brands"}
          </ValueSelect>
          <ArrowDownGrey />
        </DropDown>
        {!hideClearButton && (
          <ClearButton
            variant={ButtonVariant.TEXT}
            onClick={() => {
              setSelectedBrands([]);
            }}
          >
            clear
          </ClearButton>
        )}

        {isOpen && (
          <DropDownListContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SearchInputWrapper>
              <SearchInput
                autoFocus
                value={searchString}
                onChange={handleSearch}
                placeholder="Search..."
              />
              <StyledSearchIcon />
            </SearchInputWrapper>
            <DropDownList>
              {brands.filter(filterItems).map((item) => {
                return (
                  <StyledCheckbox
                    label={
                      <Typography
                        variant={TypographyVariant.BODY1}
                        style={{ fontWeight: 400 }}
                        color={item.productsCount === 0 ? "#8181A5" : undefined}
                      >
                        {`${item.name} (${item.productsCount})`}
                      </Typography>
                    }
                    onChange={() => {
                      handleCheckboxChange(item);
                    }}
                    disabled={item.productsCount === 0}
                    checked={
                      !!selectedBrands?.find(
                        (selectedBrand) => selectedBrand._id === item._id
                      )
                    }
                    key={item._id}
                  />
                );
              })}
            </DropDownList>
          </DropDownListContainer>
        )}
      </InputSection>
    </Container>
  );
};
