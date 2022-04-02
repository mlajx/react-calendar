import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarSidebar from "./CalendarSidebar";
import CalendarMonth from "./CalendarMonth";
import { getCalendarDays } from "../../services/Date";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getCalendarDays());

  return (
    <div className="flex h-screen flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        <CalendarSidebar />
        <CalendarMonth month={currentMonth} />
      </div>
    </div>
  );
}

export default Calendar;
