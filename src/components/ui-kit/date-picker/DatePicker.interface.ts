import type React from "react";
import { type DateTime } from "luxon";

export interface IDatePickerProps {
  value?: string | DateTime;
  onChange: (nextDateTime?: DateTime) => void;
  customInput?: React.ReactElement;
  placeholder?: string;
  customFormat?: string;
  includeDateIntervals?: Array<{ start: Date; end: Date }>;
  excludeDates?: Date[];
  filterDate?: (date: Date) => boolean;
  minDate?: Date | null;
  disabled?: boolean;
  startOfDayWhenSelecting?: boolean;
  endOfDayWhenSelecting?: boolean;
}
