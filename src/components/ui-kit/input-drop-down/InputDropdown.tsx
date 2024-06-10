import { type ChangeEvent, type FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Typography } from "../typography/Typography";
import {
  DeepItem,
  DropdownInputBorderVariant,
  IInputDropdownProps,
  InputItem,
  UniversalItem,
} from "./InputDropdown.interface";
import { TypographyVariant } from "../typography/Typography.interface";
import { FlagIcon, type FlagIconCode } from "react-flag-kit";
import {
  ArrowUpBlue,
  ArrowDown1,
  ArrowDownGrey,
  SearchIcon,
  CheckBlue,
} from "../../icons";
import { DropDownHeaderProps } from "../drop-down/Dropdown.interface";

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
  width: 10px;
`;

const DropDown = styled.div<DropDownHeaderProps>`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;

  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#F4F5F9" : "#ffffff")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: 6px 10px 6px 12px;
  min-height: 22px;
  position: relative;
  ${({ variant }) =>
    borderVariants[variant ?? DropdownInputBorderVariant.DEFAULT]};
  ${({ isOpen }) =>
    isOpen
      ? css`
          border: solid 1px rgba(2, 122, 255, 1);
          box-shadow: 0 0 0 3px rgba(2, 122, 255, 0.15);
        `
      : ""}
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const ValueSelect = styled.span<{ isPlaceholder?: boolean }>`
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  color: ${({ isPlaceholder }) => (isPlaceholder ? "#9898AD" : "#2a3b89")};
`;

const DropDownListContainer = styled.div<{ fullWidth?: boolean }>`
  position: absolute;
  background-color: #fff;
  top: 43px;
  width: 100%;
  z-index: 1;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
`;

const DropDownList = styled.ul`
  box-sizing: border-box;
  padding: 0;
  background: #fff;
  margin: 3px 0;
  max-height: 250px;
  overflow: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2cd19d80;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #eeeeee;
  }
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

const CategoryTitle = styled(Typography)<{ hasDeepItem: boolean }>`
  font-style: normal;

  font-weight: ${(props) => (props.hasDeepItem ? 500 : 400)};
  font-size: 13px;
  line-height: 15px;
  color: #2a3b89;
`;

const InputSection = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  height: 36px;
  width: 100%;
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

const StyledArrowDown = styled(ArrowDown1)`
  transform: ${(props) =>
    props["aria-expanded"] ? "rotate(180deg)" : "rotateZ(0deg)"};
`;

const SubMenuItem = styled.div`
  font-size: 12px;
  padding: 5px 30px;
  font-family: Ubuntu;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  color: #2a3b89;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    background: #f4f7f9;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-flex;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  border-top: 1px solid #027aff2b;
  position: sticky;
  bottom: 0;
  background-color: #fff;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  border-right: 1px solid #027aff2b;
  padding: 10px 0;
  :last-child {
    border-right: none;
  }
`;

const CountryFlagIcon: React.FunctionComponent<{
  code: FlagIconCode;
}> = ({ code }) => (
  <FlagContainer>
    <StyledFlagIcon code={code} />
  </FlagContainer>
);

export const InputDropdown: FC<IInputDropdownProps> = ({
  items,
  onChange,
  fullWidth,
  label,
  value,
  required,
  error,
  withCountryFlags,
  withSearch,
  leftIcon,
  placeholder,
  borderVariant,
  disabled,
  button,
  disableResponsiveMaxHeight,
  disableSearchByValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState<string>("");
  const [expandedItemIndex, setExpandedItemIndex] = useState<number>();
  const [placeholderText, setPlaceholderText] = useState<string>();
  const [maxHeight, setMaxHeight] = useState(250);
  const ref = useRef<HTMLDivElement>(null);
  const valueRef = useRef(null);

  const updateMaxHeight = () => {
    if (ref.current && !disableResponsiveMaxHeight) {
      const dropDownRect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const distanceToBottom = windowHeight - dropDownRect.bottom - 20;
      setMaxHeight(Math.min(distanceToBottom, 250));
    }
  };

  useEffect(() => {
    setPlaceholderText(placeholder);
  }, []);

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (ref.current !== e.target && e.target !== valueRef.current) {
        setIsOpen(false);
        setSearchString("");
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  const handleExpand = () => {
    !disabled && setIsOpen(!isOpen);
    updateMaxHeight();
    setSearchString("");
  };

  const handleItemClick = (item: InputItem) => () => {
    onChange(item);
    setIsOpen(!isOpen);
  };

  const filterItems = (item: UniversalItem): boolean => {
    if (item.label?.toLowerCase().includes(searchString.toLowerCase())) {
      return true;
    } else if (item.value && !disableSearchByValue) {
      return item.value
        .toString()
        .toLowerCase()
        .includes(searchString.toLowerCase());
    } else if ((item as DeepItem).items) {
      return (item as DeepItem).items.filter(filterItems).length > 0;
    }
    return false;
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const handlerSubItemExpand = (val: number) => () => {
    setExpandedItemIndex(val);
  };

  return (
    <Container fullWidth={fullWidth}>
      {label && (
        <LabelWrapper>
          <StyledTypography variant={TypographyVariant.HEADER3}>
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </StyledTypography>
        </LabelWrapper>
      )}

      <InputSection fullWidth={fullWidth}>
        <DropDown
          variant={borderVariant}
          ref={ref}
          isOpen={isOpen}
          onClick={handleExpand}
          disabled={disabled}
        >
          <ValueSelect
            ref={valueRef}
            isPlaceholder={!value?.label && !!placeholderText}
          >
            {leftIcon != null && <IconWrapper>{leftIcon()}</IconWrapper>}
            {value?.label
              ? value?.label.length >= 42
                ? `${value?.label.slice(0, 42)}...`
                : value?.label
              : placeholderText}
          </ValueSelect>
          {isOpen ? <ArrowUpBlue /> : <ArrowDownGrey />}
        </DropDown>

        {isOpen && (
          <DropDownListContainer
            fullWidth={fullWidth}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <DropDownList style={{ maxHeight }}>
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
              {items.filter(filterItems).map((item, index) => {
                const isDeepItem = (item as any)?.value === undefined;
                return (
                  <div key={index}>
                    <Category
                      onClick={
                        isDeepItem
                          ? handlerSubItemExpand(
                              index === expandedItemIndex ? -1 : index
                            )
                          : handleItemClick(item as any)
                      }
                    >
                      <CategoryTitleWrapper>
                        {withCountryFlags && (
                          <CountryFlagIcon code={(item as any)?.value} />
                        )}
                        <CategoryTitle hasDeepItem={isDeepItem}>
                          {item.label}
                        </CategoryTitle>
                      </CategoryTitleWrapper>
                      {isDeepItem ? (
                        <StyledArrowDown
                          aria-expanded={expandedItemIndex === index}
                        />
                      ) : (
                        value?.value === item?.value && <CheckIcon />
                      )}
                    </Category>
                    {isDeepItem &&
                      (item as DeepItem).items.map((subItem) => {
                        return (
                          expandedItemIndex === index && (
                            <SubMenuItem
                              onClick={handleItemClick({
                                label: `${item.label} / ${subItem.label}`,
                                value: `${item.label} / ${subItem.label}`,
                              })}
                              key={subItem.label}
                            >
                              {subItem.label}
                              {value?.label?.slice(
                                value?.label?.indexOf("/") + 2
                              ) === subItem?.label && <CheckIcon />}
                            </SubMenuItem>
                          )
                        );
                      })}
                  </div>
                );
              })}
              {button && (
                <ButtonWrapper>
                  {button.map((el) => {
                    return (
                      <Btn key={el.label}>
                        <Typography
                          variant={TypographyVariant.BODY4}
                          color="#38B6FF"
                          onClick={el.onClick}
                          clickable
                        >
                          {el.label}
                        </Typography>
                      </Btn>
                    );
                  })}
                </ButtonWrapper>
              )}
            </DropDownList>
          </DropDownListContainer>
        )}
      </InputSection>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
