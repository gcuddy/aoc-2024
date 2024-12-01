

const main = (str: string): number => {

  const split = str.split('\n');

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

  const num = left.reduce((acc, l, i) => {
    const r = right[i];

    const diff = Math.abs(r - l);

    return acc + diff;
  }, 0)

  return num;

}

export { main } 
