import { describe, expect, test } from "bun:test";
import { part1, part2 } from "./01";

const test_input = `3   4
4   3
2   5
1   3
3   9
3   3`

describe("01 part 1", () => {
  test('test input', () => {
    expect(part1(test_input)).toBe(11)
  })

})

describe("01 part 2", () => {
  test('test input', () => {
    expect(part2(test_input)).toBe(31)
  })
})

