import { type FC } from "react";
import styled from "styled-components";
import {
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import {
  Chart as ChartJS,
  ArcElement,
  type ChartOptions,
  Filler,
  type ChartData,
  Legend,
  type Plugin,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ReducedContainer } from "../../../../../components/containers";

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0 20px;
`;

ChartJS.register(ArcElement, Filler, Legend);

export const CircleChart: FC = () => {
  const options: ChartOptions<"doughnut"> = {
    layout: {
      padding: 0,
      autoPadding: false,
    },
    responsive: true,
    cutout: "70%",
    font: {
      family: "Montserrat",
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        fullSize: true,
        position: "bottom",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#13273F",
          boxPadding: 0,
          boxWidth: 5,
          boxHeight: 5,

          font: {
            family: "Montserrat",
            weight: 400,
          },
        },
      },
    },
  };

  const hoverCenterLabel: Plugin<"doughnut"> = {
    id: "hoverCenterLabel",
    afterDraw: (chart) => {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;
      const activeElements = chart.getActiveElements();
      const activePoint = activeElements[0];
      ctx.save();
      if (activePoint) {
        const textLabel = String(
          Number(chart.data.datasets[0].data[activePoint.index]).toFixed(1) +
            "%"
        );

        ctx.font = "bolder 24px Montserrat";
        ctx.textAlign = "center";
        ctx.fillStyle = "#13273F";
        ctx.fillText(textLabel, width / 2, height / 2);
      }
    },
  };

  const mock = [60, 25, 10, 5];

  const labels = ["Card", "Cash", " Open banking", "Other"];

  const data: ChartData<"doughnut"> = {
    labels,

    datasets: [
      {
        data: mock.map((el: number) => el),
        backgroundColor: ["#13273F", "#2CD19E", "#FFCE00", "#8181A5"],
        borderWidth: 0,
        hoverBorderWidth: 0,
      },
    ],
  };

  return (
    <ReducedContainer>
      <TopLine>
        <Typography variant={TypographyVariant.HEADER2}>
          Payment methods
        </Typography>
      </TopLine>
      <div style={{ width: "100%", height: "100%" }}>
        <Doughnut
          options={options}
          data={data}
          plugins={[hoverCenterLabel]}
        ></Doughnut>
      </div>
    </ReducedContainer>
  );
};
