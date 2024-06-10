import React, {
  type ChangeEvent,
  type FC,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { type ISearchProps } from "./Search.interface";
import { Search } from "../../icons";

const Container = styled.div`
  width: 250px;
  background-color: #ffffff;
  border: solid 1px #dbe3eb;
  border-radius: 5px;
  display: flex;
  &:focus-within {
    border: solid 1px #027aff;
    box-shadow: 0 0 0 3px rgba(2, 122, 255, 0.15);
  }
`;

const SearchInput = styled.input`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #2a3b89;
  background: transparent;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 10px 14px 10px 0;
  width: 100%;
  height: 36px;
  margin: 0;
  outline: none;
  box-sizing: border-box;
  &::placeholder {
    color: #6c6c8a;
  }
`;

const SearchButton = styled.button`
  border: none;
  background: transparent;
  border-radius: 5px 0 0 5px;
  padding: 10px 7px 10px 12px;
  width: 36px;
  height: 36px;
  box-sizing: border-box;

  svg {
    fill: #6c6c8a;
  }
`;

const Results = styled.ul`
  position: absolute;
  width: 252px;
  margin-left: -1px;
  margin-top: 46px;
  min-height: 39px;
  max-height: 132px;
  overflow: scroll;

  box-sizing: border-box;
  padding: 2px 0;
  background: #ffffff;
  border: 1px solid #dbe3eb;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
  border-radius: 5px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px;
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
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #2a3b89;
`;

const GreySpan = styled(CategoryTitle)`
  display: inline;
  color: #8181a5;
`;

export const SearchWithoutButton: FC<ISearchProps> = ({
  onChangeHandler,
  placeholder,
  data,
  ...rest
}) => {
  const [searchString, setSearchString] = useState("");
  const [showResults, setShowResults] = useState(false);

  const resultsRef = useRef(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (ref.current !== e.target && resultsRef.current !== e.target) {
        setShowResults(false);
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  const filtered = data?.filter((item) => {
    if (
      data &&
      searchString.length !== 0 &&
      item.toLowerCase().includes(searchString.toLowerCase())
    ) {
      return item;
    }
  });

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchString.trim().length >= 1) {
      onChangeHandler(searchString);
      setShowResults(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
    onChangeHandler(e.target.value);
    setShowResults(true);
  };

  const handleItemClick = (item: string) => () => {
    setSearchString(item);
    onChangeHandler(searchString);
    setShowResults(false);
  };

  return (
    <Container {...rest}>
      <SearchButton>
        <Search />
      </SearchButton>
      <SearchInput
        ref={ref}
        {...rest}
        value={searchString}
        onKeyDown={handleSearchEnter}
        placeholder={placeholder ?? "Search"}
        onChange={handleChange}
      />

      {filtered?.length && showResults && (
        <Results ref={resultsRef}>
          {filtered.map((item, index) => {
            return (
              <Category key={index} onClick={handleItemClick(item)}>
                <CategoryTitleWrapper>
                  <CategoryTitle>
                    {item.slice(
                      0,
                      item.lastIndexOf(searchString) + searchString.length
                    )}
                    <GreySpan>
                      {item.slice(
                        item.lastIndexOf(searchString) + searchString.length
                      )}
                    </GreySpan>
                  </CategoryTitle>
                </CategoryTitleWrapper>
              </Category>
            );
          })}
        </Results>
      )}
    </Container>
  );
};
