import { Link } from "react-router-dom";
import styled from "styled-components";

export const Hypertext = styled(Link)`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  color: #027aff;
  margin: 0;
  text-decoration-line: none;

  &:hover {
    text-decoration-line: underline;
  }
`;
