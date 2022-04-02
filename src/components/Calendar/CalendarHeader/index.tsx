function CalendarHeader() {
  return (
    <header className="flex items-center px-4 py-2">
      <h1 className="mr-10 text-xl font-bold text-gray-600"> Calendar </h1>
      <button type="button" className="mr-5 rounded border py-2 px-4">
        Today
      </button>
      <button type="button">
        <span className="material-icons-outlined mx-2 cursor-pointer text-gray-600">
          chevron_left
        </span>
      </button>
      <button type="button">
        <span className="material-icons-outlined mx-2 cursor-pointer text-gray-600">
          chevron_right
        </span>
      </button>
    </header>
  );
}

export default CalendarHeader;
