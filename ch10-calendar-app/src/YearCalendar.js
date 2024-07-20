import { Profiler } from "react";
import MonthCalendar from "./MonthCalendar";
import React from "react";

const YearCalendar = ({ year, onRender }) => {
  const cals = [];

  for (let i = 1; i <= 12; i++) {
    cals.push(
      <MonthCalendar
        year={year}
        month={i}
        key={`calendar-${year}-${i}`}
        onRender={onRender}
      />,
    );
  }
  return (
    <Profiler id="YearCalendar" onRender={onRender || (() => {})}>
      {cals}
    </Profiler>
  );
};

export default YearCalendar;
