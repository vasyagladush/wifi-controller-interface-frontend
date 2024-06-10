import React, { useState, type FC } from "react";
import styled from "styled-components";
import {
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import { RedVectorDown, GreenVectorUp } from "../../../../../components/icons";
import { DefaultContainer } from "../../../../../components/containers";

const Title = styled(Typography)`
  margin-bottom: 14px;
`;

const Value = styled(Typography)`
  margin-bottom: 5px;
`;

const ContentLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;

export interface DashboardInfoCard {
  title: string;
  value: number;
  currency?: boolean;
  additionalInformation?: any;
}

interface TopInfoCardProps {
  data: DashboardInfoCard;
}

const TopInfoCard: FC<TopInfoCardProps> = ({
  data: { title, value, currency },
}) => {
  return (
    <DefaultContainer>
      <Title variant={TypographyVariant.HEADER4}>{title}</Title>
      <Typography variant={TypographyVariant.HEADER1}>
        {currency
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "GBP",
            }).format(value)
          : value}
      </Typography>

      <div style={{ display: "flex", alignItems: "center" }}>
        <GreenVectorUp />
        <RedVectorDown />
        <Value variant={TypographyVariant.BODY6}>Since last month</Value>
      </div>
    </DefaultContainer>
  );
};

export const TopInfoCards = () => {
  const [topInfoCards] = useState<DashboardInfoCard[]>([
    { title: "Revenue", value: 13465.5, currency: true },
    { title: "Customers", value: 1586 },
    { title: "Orders", value: 9872 },
    { title: "Products", value: 2468 },
    // { title: "B2B sales", value: 809 },
    // { title: "B2C sales", value: 586 },
  ]);
  return (
    <ContentLine>
      {topInfoCards.map((card, index) => {
        return <TopInfoCard key={index} data={card} />;
      })}
    </ContentLine>
  );
};
