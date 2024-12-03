import { describe, expect, test } from "bun:test";
import { part1, part2 } from "./03";

const test_input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

describe("02 part 1", () => {
  test("test input", () => {
    expect(part1(test_input)).toBe(161);
  });
});

describe("02 part 2", () => {
  test("test input", () => {
    expect(part2(test_input)).toBe(4);
  });
});
