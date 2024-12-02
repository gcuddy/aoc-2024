export const isSafe = (levels: number[]): boolean => {

  let inc_state: "inc" | "dec" | null = null;

  for (let i = 1; i < levels.length; i++) {
    const prev = levels[i - 1];
    const curr = levels[i];

    if (prev < curr) {
      if (!inc_state) {
        inc_state = "inc"
      } else {
        if (inc_state !== "inc") return false;
      }
    } else if (prev > curr) {
      if (!inc_state) {
        inc_state = "dec"
      } else {
        if (inc_state !== "dec") return false;
      }
    } else {
      // same
      return false;
    }

    const diff = Math.abs(prev - curr);

    if (diff >= 1 && diff <= 3) continue;
    return false;

  }
  return true;

}

export const part1 = (str: string): number => {

  const reports = str.split('\n').filter(Boolean);

  return reports.reduce((acc, report, index) => {
    const levels = report.split(" ").map(s => +s)
    const safe = isSafe(levels);
    if (safe) return acc + 1;
    return acc;
  }, 0)



}

export const part2 = (str: string): number => {


  const reports = str.split('\n').filter(Boolean);

  return reports.reduce((acc, report, index) => {
    const levels = report.split(" ").map(s => +s)
    // try every level combination haha brute force
    const levelsLevels: number[][] = [];
    levelsLevels.push(levels);
    for (let i = 0; i < levels.length; i++) {
      // splice out item
      const levels_ = [...levels]
      levels_.splice(i, 1)
      levelsLevels.push(levels_)
    }
    const safe = levelsLevels.some(level => isSafe(level))
    if (safe) return acc + 1;
    return acc;
  }, 0)

}

const text = await (Bun.file('./input.txt')).text()
console.log('part 1', part1(text))
console.log('part 2', part2(text))
