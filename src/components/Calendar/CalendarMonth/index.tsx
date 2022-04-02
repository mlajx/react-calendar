import { Fragment } from "react";
import CalendarDay from "../CalendarDay";

function CalendarMonth({ month }: { month: Array<Array<Date>> }) {
  const rows = month.length;
  return (
    <div
      className={`${
        rows === 5 ? "grid-rows-5" : "grid-rows-6"
      } grid flex-1 grid-cols-7`}
    >
      {month.map((row, i) => (
        <Fragment key={row.toString()}>
          {row.map((day) => (
            <CalendarDay day={day} key={day.toString()} rowIndex={i} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default CalendarMonth;
