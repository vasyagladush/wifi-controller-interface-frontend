/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { DateTime } from "luxon";
import styled from "styled-components";
import { Typography, TypographyVariant } from "../components/ui-kit";
import { Clock } from "../components/icons";
import { components } from "./backend-api-types";
import { AccessPointTypeForTables } from "./types";

const Row = styled.div<{ overdue?: boolean }>`
  display: flex;
  gap: 5px;
  color: ${({ overdue }) => (overdue ? "#EF6355" : "#556CB1")};
  p {
    color: ${({ overdue }) => (overdue ? "#EF6355" : "#556CB1")};
  }
`;

export const formatNumber = (
  value: number | string,
  minimumFractionDigits = 2
) => {
  if (typeof value === "undefined" || isNaN(value as any)) {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(0);
  }

  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: minimumFractionDigits ?? 0,
    maximumFractionDigits: 2,
  }).format(typeof value === "number" ? value : Number(value));
};

export const selectedIndexesToData = (
  data: any[],
  selectedIndexes: Record<string, boolean>
) => {
  return data?.filter((_, index) => {
    return selectedIndexes[index];
  });
};

export const appendNestedObjectToFormData = (
  fd: FormData,
  data: Record<string, any>,
  parentKey?: string
) => {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      if (typeof value === "object" && !Array.isArray(value)) {
        appendNestedObjectToFormData(fd, value, formKey);
      } else {
        fd.append(formKey, value);
      }
    }
  }
};

export const checkDateCreation = (inputDate: Date) => {
  const formattedInputDate = DateTime.fromISO(String(inputDate));

  const currentDate = DateTime.now();

  const diff = currentDate.diff(formattedInputDate, [
    "years",
    "months",
    "days",
    "hours",
    "minutes",
    "seconds",
  ]);
  const diffParts = diff.toObject();

  if (diff.as("seconds") < 60) {
    return "Just now";
  } else {
    let resultString = "";
    if (diffParts.years && diffParts.years > 0) {
      resultString = `${diffParts.years} year${
        diffParts.years !== 1 ? "s" : ""
      } ago`;
    } else if (diffParts.months && diffParts.months > 0) {
      resultString = `${diffParts.months} month${
        diffParts.months !== 1 ? "s" : ""
      } ago`;
    } else if (diffParts.days && diffParts.days > 0) {
      resultString = `${diffParts.days} day${
        diffParts.days !== 1 ? "s" : ""
      } ago`;
    } else if (diffParts.hours && diffParts.hours > 0) {
      resultString = `${diffParts.hours} hour${
        diffParts.hours !== 1 ? "s" : ""
      } ago`;
    } else if (diffParts.minutes && diffParts.minutes > 0) {
      resultString = `${diffParts.minutes} minute${
        diffParts.minutes !== 1 ? "s" : ""
      } ago`;
    } else {
      resultString = "Just now";
    }
    return resultString;
  }
};

export const formatDateDifference = (dueByStr: Date) => {
  const currentDate = DateTime.now();
  const dueBy = DateTime.fromISO(dueByStr as unknown as string);
  const diffInHours = dueBy.diff(currentDate, "hours").hours;
  const diffInDays = dueBy.diff(currentDate, "days").days;
  const absoluteDiffInDays = Math.round(Math.abs(diffInDays));

  if (absoluteDiffInDays === 0 && diffInHours <= 12) {
    return (
      <Row>
        <div>
          <Clock />
        </div>
        <Typography variant={TypographyVariant.BODY13_REGULAR}>
          Due today
        </Typography>
      </Row>
    );
  } else if (diffInDays < 0) {
    return (
      <Row overdue>
        <div>
          <Clock />
        </div>
        <Typography variant={TypographyVariant.BODY13_REGULAR}>
          Overdue by {absoluteDiffInDays} day
          {absoluteDiffInDays !== 1 ? "s" : ""}
        </Typography>
      </Row>
    );
  } else if (
    absoluteDiffInDays === 1 ||
    (absoluteDiffInDays === 0 && diffInHours > 12)
  ) {
    return (
      <Row>
        <div>
          <Clock />
        </div>
        <Typography variant={TypographyVariant.BODY13_REGULAR}>
          Due tomorrow
        </Typography>
      </Row>
    );
  } else if (absoluteDiffInDays <= 14) {
    return (
      <Row>
        <div>
          <Clock />
        </div>
        <Typography variant={TypographyVariant.BODY13_REGULAR}>
          Due in {absoluteDiffInDays} day{absoluteDiffInDays !== 1 ? "s" : ""}
        </Typography>
      </Row>
    );
  } else {
    return dueBy.toFormat("dd LLL, yyyy");
  }
};

export const timeSinceInception = (createdAt: Date) => {
  const inceptionDateTime = DateTime.fromISO(createdAt.toString());
  const currentDateTime = DateTime.now();

  const diffInDays = Math.floor(
    currentDateTime.diff(inceptionDateTime, "days").days
  );
  const diffInHours = Math.floor(
    currentDateTime.diff(inceptionDateTime, "hours").hours
  );
  const diffInMinutes = Math.floor(
    currentDateTime.diff(inceptionDateTime, "minutes").minutes
  );

  if (diffInDays >= 1) {
    return `${diffInDays} ${diffInDays === 1 ? "day" : "days"}`;
  } else if (diffInHours >= 1) {
    return `${diffInHours} ${diffInHours === 1 ? "hr" : " hrs"}`;
  } else if (diffInMinutes >= 1) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? "min" : "mins"}`;
  } else {
    return "Just created";
  }
};

export const transformStringData = (string?: string) => {
  return string
    ? string[0].toUpperCase() +
        string.slice(1).toLowerCase().replaceAll("_", " ")
    : "";
};

export const handleNavigateToUrlFromBase64 = (urlBase64: string) => {
  const a = document.createElement("a");
  a.href = urlBase64;
  a.download = `label_${DateTime.now().toFormat("dd_MMMM_y-(HH-mm)")}.pdf`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const handleDownloadPdfFromBase64 = (urlBase64: string) => {
  const a = document.createElement("a");
  a.href = urlBase64;
  a.download = `label_${DateTime.now().toFormat("dd_MMMM_y-(HH-mm)")}.pdf`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const getNetworkFromTableRowData = (
  tableRowData: AccessPointTypeForTables
): components["schemas"]["APSchema"]["networks"][number] | undefined => {
  return tableRowData.subRows?.[0];
};

export const makeCorrectFormOfAccessPointsForTables = (
  accessPoints?: components["schemas"]["APSchema"][]
): AccessPointTypeForTables[] => {
  return (
    accessPoints?.map((accessPoint) => {
      const { networks, ...rest } = accessPoint;

      const sortedNetworks = networks.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      const subRows = sortedNetworks.map((network) => ({
        ...network,
        parent: accessPoint,
      }));

      return {
        ...rest,
        subRows,
      };
    }) ?? []
  );
};
