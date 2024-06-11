import React, { useState } from "react";
import styled from "styled-components";
import {
  PageTitle,
  DateFilterDropdown,
  FilterOption,
} from "../../../components/ui-kit";
import ConsoleFrame from "./components/ConsoleFrame";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ConsoleModule = () => {
  return (
    <Container>
      <TopLine>
        <PageTitle title="Console" subtitle="SSH to ..." />
      </TopLine>
      <ConsoleFrame />
    </Container>
  );
};

export default ConsoleModule;
