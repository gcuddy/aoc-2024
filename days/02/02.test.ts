import { describe, expect, test } from "bun:test";
import { isSafe, part1, part2 } from "./02";

const test_input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

describe("02 part 1", () => {

  test('levels', () => {
    expect(isSafe([7, 6, 4, 2, 1])).toBe(true)
    expect(isSafe([9, 7, 6, 2, 1])).toBe(false)
    expect(isSafe([1, 3, 2, 4, 5])).toBe(false)
    expect(isSafe([8, 6, 4, 4, 1])).toBe(false)
    expect(isSafe([1, 3, 6, 7, 9])).toBe(true)
  })
  test('test input', () => {
    expect(part1(test_input)).toBe(2)
  })

})

describe("02 part 2", () => {
  test('test input', () => {
    expect(part2(test_input)).toBe(4)
  })

})

