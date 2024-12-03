import { read_input } from "../utils";

const regex = /mul\((\d+),(\d+)\)/gm;

export const part1 = (str: string): number => {
  return [...str.matchAll(regex)].reduce((acc, curr, index) => {
    const total = +curr[1] * +curr[2];
    return acc + total;
  }, 0);
};

export const part2 = (str: string): number => {
  return 1;
};

console.log("part 1", part1(await read_input()));
