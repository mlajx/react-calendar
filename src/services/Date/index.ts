export const months = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11,
};

export const daysWeek = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
};

export const weekDays = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
};

export function getCalendarDays(
  month = new Date().getMonth(),
  year = new Date().getFullYear()
) {
  const quantityDays = 7;

  const firstDateMonth = new Date(year, month, 1);
  const lastDateMonth = new Date(year, month + 1, 0);

  let currentDayCount = 0 - firstDateMonth.getDay();
  const rows = Math.ceil(
    (lastDateMonth.getDate() + Math.abs(currentDayCount)) / quantityDays
  );

  return new Array(rows).fill([]).map(() =>
    new Array(quantityDays).fill(null).map(() => {
      currentDayCount += 1;
      return new Date(year, month, currentDayCount);
    })
  );
}

export function getWeekDay(dayOfWeek: number) {
  return weekDays[dayOfWeek as keyof typeof weekDays];
}
