import { day1Input } from "./input";

const combos = [];
day1Input.forEach((i) => {
  // break 2020 down into three numbers using subtraction
  const differenceToFind = 2020 - i;
  day1Input.find((item) => {
    const partA = differenceToFind - item;
    const findPartA = day1Input.find((i) => i === partA);
    if (findPartA) combos.push([i, item, partA]);
    return findPartA;
  });
});
