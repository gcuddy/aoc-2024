
const splitAndSort = (str: string) => {

  const split = str.split('\n').filter(Boolean)

  const left: number[] = []
  const right: number[] = [];

  for (let i = 0; i < split.length; i++) {
    const line = split[i];
    const [l, r] = line.split(/\s+/);
    left.push(+l)
    right.push(+r)
  }

  left.sort();
  right.sort();

  return [left, right] as const;
}

const part1 = (str: string): number => {

  const [left, right] = splitAndSort(str);

  let n = 0;

  for (let i = 0; i < left.length; i++) {
    const l = left[i];
    const r = right[i];
    const diff = Math.abs(r - l);
    n += diff;
  }

  return n;

}

const part2 = (str: string): number => {


  const [left, right] = splitAndSort(str);
  const frequency = new Map(
    right.map(r => ([r, 0]))
  );

  for (const n of right) {
    const f = frequency.get(n) ?? 0;
    frequency.set(n, f + 1)
  }

  const n = left.reduce((acc, l) => {
    const f = frequency.get(l) ?? 0;
    const score = l * f;
    return acc + score;
  }, 0)

  return n

}

const text = await (Bun.file('./input.txt')).text()

console.log('part 1', part1(text))
console.log('part 2', part2(text))


export { part1, part2 } 
