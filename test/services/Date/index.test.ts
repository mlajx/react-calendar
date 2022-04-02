import {
  assert,
  expect,
  test,
  describe,
  it,
  vi,
  beforeEach,
  afterEach,
} from "vitest";
import * as ServiceDate from "../../../src/services/Date";

test("ServiceDate.months is correctly", () => {
  assert.deepEqual(ServiceDate.months, {
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
  });
});

test("ServiceDate.daysWeek is correctly", () => {
  assert.deepEqual(ServiceDate.daysWeek, {
    SUN: 0,
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
  });
});

test("ServiceDate.getWeekDay()", () => {
  expect(ServiceDate.getWeekDay(0)).toBe(ServiceDate.weekDays[0]);
  expect(ServiceDate.getWeekDay(1)).toBe(ServiceDate.weekDays[1]);
  expect(ServiceDate.getWeekDay(2)).toBe(ServiceDate.weekDays[2]);
  expect(ServiceDate.getWeekDay(3)).toBe(ServiceDate.weekDays[3]);
  expect(ServiceDate.getWeekDay(4)).toBe(ServiceDate.weekDays[4]);
  expect(ServiceDate.getWeekDay(5)).toBe(ServiceDate.weekDays[5]);
  expect(ServiceDate.getWeekDay(6)).toBe(ServiceDate.weekDays[6]);
  expect(ServiceDate.getWeekDay(7)).toBe(undefined);
});

describe("ServiceDate.getCalendarDays()", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("use default date", () => {
    const date = new Date(2022, ServiceDate.months.JAN, 1);
    vi.setSystemTime(date);

    const rows = 6;
    expect(ServiceDate.getCalendarDays().length).toBe(rows);
  });

  it("use first month of the year 2022", () => {
    const rows = 6;
    expect(
      ServiceDate.getCalendarDays(ServiceDate.months.JAN, 2022).length
    ).toBe(rows);
  });

  it("use last month of the year 2022", () => {
    const rows = 5;
    expect(
      ServiceDate.getCalendarDays(ServiceDate.months.DEC, 2022).length
    ).toBe(rows);
  });
});
