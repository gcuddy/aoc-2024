import { describe, expect, test } from "bun:test";
import { main } from "./01";

const test_input = `3   4
4   3
2   5
1   3
3   9
3   3`

describe("01 test input", () => {
  test('test input', () => {
    expect(main(test_input)).toBe(11)
  })

  test('smallest number', () => {
    expect(main(test_input)).toBe(11)
  })
})

