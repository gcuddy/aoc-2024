import { read_input } from "../utils";

const regex = /mul\((\d+),(\d+)\)/gm;

export const part1 = (str: string): number => {
  return [...str.matchAll(regex)].reduce((acc, curr, index) => {
    const total = +curr[1] * +curr[2];
    return acc + total;
  }, 0);
};

export const part2 = (str: string): number => {
  const regex =
    /(mul\((?<n1>\d+),(?<n2>\d+)\))|(?<do>do\(\))|(?<dont>don't\(\))/gm;
  let enabled = true;
  return [...str.matchAll(regex)].reduce((acc, curr, index) => {
    const groups = curr.groups as {
      n1?: string;
      n2?: string;
      do?: string;
      dont?: string;
    };
    if (groups.do) {
      enabled = true;
      return acc;
    }
    if (groups.dont) {
      enabled = false;
      return acc;
    }
    if (enabled && groups.n1 !== undefined && groups.n2 !== undefined) {
      const total = +groups.n1 * +groups.n2;
      return acc + total;
    }
    return acc;
  }, 0);
};

console.log("part 1", part1(await read_input()));
console.log("part 2", part2(await read_input()));
