import {
  expect,
  test,
} from "bun:test";
import {
  truncate,
} from "./index";

test.each([
  ["shorter than the limit", "Hi", 3, "Hi"],
  ["exactly at the limit", "Hi", 2, "Hi"],
  ["longer than the limit", "Hello", 4, "Hel…"],
  ["one character", "Hello", 1, "…"],
  ["zero limit", "Hello", 0, ""],
  ["negative limit", "Hello", -2, ""],
  ["fractional limit", "Hello", 3.9, "He…"],
  ["empty input", "", 3, ""],
  ["emoji as one code point", "😀abc", 2, "😀…"],
] as const)(
  "truncate handles %s",
  (_case, input, limit, expected) => {
    expect(truncate(input, limit)).toBe(expected);
  },
);
