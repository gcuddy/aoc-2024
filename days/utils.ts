export const read_input = async (path = "./input.txt") => {
  return await Bun.file(path).text();
};
