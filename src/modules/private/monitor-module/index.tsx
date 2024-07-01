import React from "react";
import styled from "styled-components";
import {
  PageTitle,
} from "../../../components/ui-kit";

import MonitorFrame from "./components/MonitorFrame";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FlexLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 27px;
  margin-bottom: 20px;
`;

const MonitorModule = () => {
  return (
    <Container>
      <TopLine>
        <div style={{ flexDirection: "column", marginRight: "auto" }}>
          <PageTitle
            title="Monitor"
            subtitle="Whole data about your network here"
          />
        </div>
      </TopLine>
      <MonitorFrame />
    </Container>
  );
};

export default MonitorModule;
