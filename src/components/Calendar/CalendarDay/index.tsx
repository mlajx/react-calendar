import { getWeekDay } from "../../../services/Date";

function CalendarDay({ day, rowIndex }: { day: Date; rowIndex: number }) {
  function getCurrentDayClasses() {
    const now = new Date();

    if (
      now.getFullYear() === day.getFullYear() &&
      now.getMonth() === day.getMonth() &&
      now.getDate() === day.getDate()
    ) {
      return "bg-blue-600 text-white rounded-full w-7";
    }

    return "";
  }

  return (
    <div className="flex flex-col border border-gray-200">
      <div className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="mt-1 text-sm">{getWeekDay(day.getDay())}</p>
        )}
        <p className={`my-1 p-1 text-center text-sm ${getCurrentDayClasses()}`}>
          {day.getDate()}
        </p>
      </div>
    </div>
  );
}

export default CalendarDay;
