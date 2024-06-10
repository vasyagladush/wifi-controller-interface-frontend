import Datepicker from "react-datepicker";
import { DateTime } from "luxon";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import React, {
  type FC,
  forwardRef,
  useEffect,
  useState,
  cloneElement,
} from "react";
import { type IDatePickerProps } from "./DatePicker.interface";
import styled from "styled-components";
import { RestProps } from "../../../util/types";

const CustomInputWrapper = forwardRef(
  (props: RestProps, ref: React.ForwardedRef<unknown>) => {
    return cloneElement(props.element, props);
  }
);
CustomInputWrapper.displayName = "CustomInputWrapper";

const DefaultInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  border: 1px solid #dbe3eb !important;
  border-radius: 5px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  font-family: "Ubuntu";
  color: #2a3b89;

  ::placeholder {
    color: #9898ad;
  }

  :focus-visible {
    outline: solid 1px #027aff;
    outline-offset: -1px;
    box-shadow: 0 0 0 3px rgba(2, 120, 255, 0.153);
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const DatePicker: FC<IDatePickerProps> = ({
  onChange,
  value,
  customInput,
  placeholder,
  customFormat,
  includeDateIntervals,
  excludeDates,
  disabled,
  filterDate,
  minDate,
  startOfDayWhenSelecting,
  endOfDayWhenSelecting,
}) => {
  const [internalValue, setInternalValue] = useState<string | undefined>();
  const onValueChange = (next: Date | null) => {
    const currentTime = DateTime.now();
    const startOfToday = currentTime.startOf("day");
    const endOfToday = currentTime.endOf("day");

    const dateTime = next
      ? DateTime.fromJSDate(next).set({
          hour: startOfDayWhenSelecting
            ? startOfToday.hour
            : endOfDayWhenSelecting
            ? endOfToday.hour
            : currentTime.hour,
          minute: startOfDayWhenSelecting
            ? startOfToday.minute
            : endOfDayWhenSelecting
            ? endOfToday.minute
            : currentTime.minute,
          second: startOfDayWhenSelecting
            ? startOfToday.second
            : endOfDayWhenSelecting
            ? endOfToday.second
            : currentTime.second,
        })
      : undefined;

    const formattedValue = dateTime?.toFormat(customFormat ?? "dd MMM, yyyy");
    setInternalValue(formattedValue);
    onChange(dateTime);
  };

  useEffect(() => {
    if (typeof value === "string") {
      const date = DateTime.fromISO(value);
      setInternalValue(date.toFormat(customFormat ?? "dd MMM, yyyy"));
    }
    if (typeof value === "object") {
      setInternalValue(value?.toFormat(customFormat ?? "dd MMM, yyyy"));
    }
    if (!value) {
      setInternalValue(undefined);
    }
  }, [value]);

  return (
    <Datepicker
      disabled={disabled}
      includeDateIntervals={includeDateIntervals}
      excludeDates={excludeDates}
      minDate={minDate}
      filterDate={filterDate}
      value={internalValue}
      selected={
        typeof value === "object" || typeof value === "undefined"
          ? value?.toJSDate()
          : typeof value === "string"
          ? new Date(value)
          : null
      }
      onChange={onValueChange}
      placeholderText={placeholder}
      customInput={
        <CustomInputWrapper element={customInput ?? <DefaultInput />} />
      }
    />
  );
};
