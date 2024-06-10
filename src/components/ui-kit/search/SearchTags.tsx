import React, { type ChangeEvent, type FC } from "react";
import styled from "styled-components";
import { type ISearchProps } from "./Search.interface";

const Container = styled.div`
  width: 250px;
  background-color: #f4f5f9;
  border: solid 1px #dbe3eb;
  border-radius: 5px;
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
  padding: 10px 24px 10px 12px;
  width: 100%;
  height: 36px;
  margin: 0;
  outline: none;
  box-sizing: border-box;
  &::placeholder {
    color: #8181a5;
  }
`;

export const SearchTags: FC<ISearchProps> = ({
  onChangeHandler,
  placeholder,
  ...rest
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e.target.value);
  };
  // without full implementation until clarification
  // const [tags, setTags] = useState([]);

  return (
    <Container {...rest}>
      <SearchInput
        {...rest}
        placeholder={placeholder ?? "Cosmetics, SALE, etc"}
        onChange={handleChange}
      />
    </Container>
  );
};
