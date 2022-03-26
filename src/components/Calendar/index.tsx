import { getCalendarDays } from "../../services/Date";

function Calendar() {
  console.table(getCalendarDays());

  return (
    <div className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
      Test Eslint and Prettier
    </div>
  );
}

export default Calendar;
