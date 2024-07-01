import React, { useState } from "react";
import styled from "styled-components";
import {
  PageTitle,
  DateFilterDropdown,
  FilterOption,
} from "../../../components/ui-kit";
import { CircleChart } from "./components/charts/CircleChart";
import { LineChart } from "./components/charts/LineChart";
import { BestSellingProducts } from "./components/tables/BestSellingProduct";
import { LatestOrders } from "./components/tables/LatestOrders";
import { SalesLeaderboard } from "./components/tables/SalesLeaderboard";
import { TopSalesChannels } from "./components/tables/TopSalesChannels";
import { TopWholesaleClients } from "./components/tables/TopWholesaleClients";
import { TopInfoCards } from "./components/topInfoCards";
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
  const [dateFilter, setDateFilter] = useState<FilterOption>({
    label: "Last month",
    value: "30",
  });

  return (
    <Container>
      <TopLine>
        <div style={{ flexDirection: "column", marginRight: "auto" }}>
          <PageTitle
            title="Monitor"
            subtitle="Whole data about your network here"
          />
        </div>

        {/* <DateFilterDropdown
          defaultItem={dateFilter}
          onChange={setDateFilter}
          items={[
            { label: "Last month", value: "30" },
            { label: "Last 90 days", value: "90" },
            { label: "Last year", value: "365" },
          ]}
        /> */}
      </TopLine>
      <MonitorFrame />
      {/* <TopInfoCards /> */}
      {/* <FlexLine>
        <LineChart dateFilter={dateFilter.value!} />
        <CircleChart />
      </FlexLine>
      <FlexLine>
        <BestSellingProducts />
        <SalesLeaderboard />
      </FlexLine>
      <FlexLine>
        <TopSalesChannels />
        <TopWholesaleClients />
      </FlexLine>
      <FlexLine>
        <LatestOrders />
      </FlexLine> */}
    </Container>
  );
};

export default MonitorModule;
