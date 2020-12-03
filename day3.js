const map = [
  ["..#......###....#...##..#.#...."],
  [".#.#.....#.##.....###...##...##"],
  ["..#.#..#...........#.#..#......"],
  ["..#......#..........###........"],
  ["...#..###..##.#..#.......##..##"],
  ["......#.#.##...#...#....###...."],
  ["..........##.....##..##......#."],
  ["......#...........#............"],
  ["#....#..........#.............."],
  [".#........##.............###.##"],
  ["....#.........#.......#.#....##"],
  ["#.#..#..#..#.......#...#....##."],
  [".#........#......#.##.......#.."],
  ["..#.....#####.....#....#..#..##"],
  [".......#..##.......#......#.###"],
  ["..#.#...#......#.##...#........"],
  ["##...................#...##..#."],
  ["......#...#.##...##.#......#..#"],
  [".#.................#..##...#..."],
  ["...#.....#.......##.....#.#...."],
  [".......#.#......#.....#..#..##."],
  ["..........#........#..........."],
  ["..#.#.........................."],
  [".#.##..#.#...#...#.........#..."],
  [".....#....#.....#..#.....#....."],
  ["...#.#.#.....#.#..#.......#..#."],
  [".....#...###...##...#......##.."],
  ["#.###......#.#...#.#.#..###...."],
  ["#.....#..##......#..........#.#"],
  ["#...............#........#.#..#"],
  [".....#..#.........#......##.#.."],
  [".....#.##.##..#..##............"],
  ["...#......##...............#.#."],
  [".#..#.#............##.#........"],
  ["#.....#..###.............##.#.."],
  ["...##..#.#..#...........#..#..."],
  ["#....#.........#.#............."],
  ["##.#.........#..###......#.#..#"],
  ["...#...#......#.#.#.##..#.##..."],
  [".....##............#.##.##..#.."],
  ["....#................#.##..#..#"],
  ["...#..#.......#...#..#........#"],
  ["....#...#...#................#."],
  ["....##...............#.#...#..."],
  [".#.....###...#.......#.##......"],
  ["....######.#..............###.#"],
  [".#..#.........##..............."],
  ["................##.#..#....###."],
  [".......#............#.#..#..#.."],
  ["......#.#...............##.#..."],
  ["...#..####.#...#..#..#......#.."],
  ["....#.#...#.....#.........#..##"],
  [".##..#...#......##....##.#.#..."],
  [".##.#.........##...#....#......"],
  ["..#.#..#...#.#..#.......#...#.#"],
  [".........#..#.....##..#........"],
  ["..#......#..##.....#..#...###.."],
  ["..#...#....#.#..#..#.#.#..#.#.."],
  ["...#..#####.....#......#......."],
  ["#.#............#......#..#...#."],
  [".........#..........###.......#"],
  ["......#....#..#.##.#......#..#."],
  ["...........##.#....#.#..#......"],
  ["..#...................#..#.#..."],
  ["#....##.............##....#...#"],
  ["##..#....#.........#..........#"],
  ["....#.#.#...#..#........#.##..#"],
  ["...............#...#..##..#...."],
  [".##.......#.......#...........#"],
  ["#.........................##..."],
  ["#........#.#..#..##..####.#...."],
  ["...................##.....###.."],
  [".#.......#..#......#......#...#"],
  ["..#.........#...#..........#..."],
  ["..........#......#....#........"],
  [".#......#..#...#..#...##....##."],
  ["...#.#..#..#......#.....##.####"],
  [".......#.#....#.......#........"],
  ["#...#.#...##..##.#......#......"],
  [".#.........#..................."],
  ["...#..........#.#......#......."],
  ["...#.....##....#..........#...."],
  [".#..........##..#..#..##....#.#"],
  [".##.#..........#...#.##.......#"],
  ["#...###....#..#.#...#..#......."],
  ["..................##..........."],
  ["..#...##.#...........#....#.##."],
  ["..#......#..##..#....##..#...#."],
  ["..#....#.....#.##..#.......#..#"],
  ["#...#....#..#.#....#......##..."],
  [".......##..#..........#........"],
  ["..#.............##.#.....#...#."],
  ["...............#....#...#...##."],
  ["##...........#.......#.##......"],
  ["#..#...........#.........#....."],
  ["....###.............###.##..##."],
  [".........#.#.....###.......#..."],
  ["..#.##....#.#..........#....#.."],
  ["#........#....##...#..#........"],
  ["......#..........###..#.#......"],
  [".....#.#......##.....#..##...#."],
  [".#.......#......#...#...#...#.#"],
  [".#..........##.......#.....##.#"],
  ["###.#...#....#.....#...#......#"],
  ["..#.#.#..#.##.#..#............."],
  [".....#........................."],
  [".#..###..#...#...#..#..#...#.#."],
  ["#................##...##.##...."],
  ["......#...#...#..........#...#."],
  ["..........#.....##............."],
  ["..#.#......#........#.......#.."],
  ["........##.............#......."],
  [".......#......#.##.#..#........"],
  ["#.#.#....#........#..........#."],
  ["##..##......#..#..#.....#.#..##"],
  ["##..#..........#..............."],
  ["#.....##...#.#......#.......#.#"],
  ["#.....#...#....#..#.....##....."],
  ["##..........#.#.....#....#...##"],
  ["..##.###..#.....#.......#...#.."],
  [".#.#.......#......###........#."],
  [".#..............#.#..###......."],
  [".#....#..##.........#..#.#....."],
  ["....#....#.#....#..#.......##.#"],
  ["#.......#.......#.........#...."],
  ["...#....#....#.....##..#..#.#.#"],
  ["........#....#...........#....."],
  [".#......##.#.#.##.............."],
  ["#..#.#.....##........#........#"],
  ["##...#.#.......##.......#...#.."],
  ["#...#.....#.##...##.#.....#...."],
  ["....#..##...#........#.#...#..."],
  ["...#....#.#.#..###...##.#.....#"],
  ["......#..#.....#..#........##.."],
  [".......#.....#.#.........#.#..#"],
  ["..#.......#.#.#.#.#....#.##...#"],
  [".#...#........#..##..#......#.."],
  [".#..#............#...#..#.#...."],
  ["...##......#......#............"],
  ["..#...#.#.....#.....#..##.#...."],
  [".#......#.#......#..#.#........"],
  ["..#..........##...#.#.....#..#."],
  ["#...#.....#..#...#............."],
  ["..##.................#....#...."],
  [".#....#.......#..##....#......#"],
  [".#....###............##....##.#"],
  ["##..#........#..#...#.......#.."],
  [".....#.....#.#.#.##.........#.."],
  [".......#..#....#...#...#......."],
  ["...#...#...#.#.#..#.#.....#...."],
  ["#.#........#..#.##..#..###....."],
  ["..................#..#........."],
  ["#.#.....#..##.........#.......#"],
  ["###..#.......#..............#.."],
  ["......#..#.....###..........#.."],
  ["....#.#...#..#...........#.#..."],
  ["...#.....#.......#.....#.#....."],
  ["#.....##..#......##...........#"],
  ["#...###...........##..#...#.##."],
  ["......##.##.#...#..#....#......"],
  ["...#.#......##.#......##....#.#"],
  ["..............#.#.###.......#.."],
  ["........#....#.......##..#..###"],
  ["...#.....##.#....#......##..#.#"],
  ["..##........#.....#.#..#...#..."],
  [".#..#.##.........#.....#...#..#"],
  ["..#..#....#...........#........"],
  [".#...#....................#...."],
  ["##.....##....#.............#.#."],
  ["....#.#..#.#..#.#.#..........##"],
  [".............##.#.....#..#..#.."],
  [".#....#.....##...#.###........."],
  ["..#........#........#.#..###..."],
  [".##....#...#...#.......#...#.#."],
  ["..#...#...#..##........#..#...."],
  ["..##.#..#..#.....#......#.#..#."],
  [".#........#..#....#..#........."],
  ["..#.#.....#.##..#........###.#."],
  [".....#.##.....##.#............."],
  ["#.........#.......#...##...#..."],
  ["..#.##.#..#..#............#...."],
  [".##....#..#............#.....#."],
  ["###........##.....##.#...#....."],
  ["#......##..##.#.#.#.#.#.#..##.."],
  [".....###.....#....#......#....#"],
  ["........#.........##...#....#.#"],
  [".#.#.....#.#..#..##......#...#."],
  ["...#.##....#..#.###..#..##....."],
  ["....#..........##..#..#..#..#.."],
  ["...#..#.##..#..#....#.........#"],
  [".....#..###.#.....#.....#..#..."],
  ["......#...#....#.##...#.#......"],
  [".#.###..##.....##.##......##..."],
  [".....#.#...........#.#........."],
  ["#........#...#..#......##.#...."],
  ["..#.......##....##....#.##.#..#"],
  ["...###.#.........#......#.....#"],
  ["..#.##..#....#.....##...#.##..."],
  ["....##.##.............#...#...."],
  ["##..#...#..#..#..#............."],
  [".....#.....#.....#............."],
  ["...#.##.......#..#.#.....#....#"],
  ["#.....##.........#......##....."],
  [".....##..........#..#...#..#..."],
  ["#...###....#.......#...##......"],
  [".#....#..#......#.....#...#.#.."],
  ["#........#.#.#...#.....###.#.##"],
  ["##...#...##..#..#....#........."],
  ["....#............#..#.....#...."],
  ["#......#.........##....#......."],
  [".#..#..#........#.............#"],
  [".##..........#......#.......#.."],
  ["#............#..#....#........."],
  ["....#.#.....#.##...#.....#.#..."],
  ["...#.#..#...##..#...#.#.#......"],
  ["#....#..#.........##..#.#.#..##"],
  [".#...#..............#.......#.."],
  ["#...#.....#.#........##......##"],
  ["...#....##.####.#.........#.#.#"],
  ["....###.#..#............#.#..#."],
  ["....#......#...#......##.#.#.#."],
  [".....#..#.#.##.#...##.........."],
  ["##..#...#.#...###.............#"],
  ["....#...#..#.....#.#..#..#..#.."],
  ["#..........####......#.....###."],
  [".........#........#.##.#...#..."],
  [".........#..........#.#..###..."],
  [".....##........##.........#...#"],
  ["..##....#...#.......##........."],
  [".....#.#......##....#...#...#.."],
  [".##..#..##....................."],
  [".......#...#..#..#...##....#..."],
  [".#...#.......###...#..#..#....."],
  [".......#.....##.##.#.......#..#"],
  [".##......#...#....#..#......##."],
  [".##....#..#....#...#...#......."],
  [".........##..#..#.#.#.....##..."],
  ["...#..............#..#.....####"],
  [".#.#.#..#.......#.......#......"],
  ["..#.#......#..........#........"],
  [".#...#.#..#.......#..#..#..#..."],
  [".......##.#...#..#....#.....#.."],
  [".##...##....##...#........####."],
  ["....#.#..##....#...#....#.#...."],
  [".....#.....#..#..#.#.##..#....."],
  ["..#....#..............#....#..."],
  ["..#.#.#.....##.#.....#..##....."],
  ["....#.....#....#...#...#..#.#.."],
  ["#...#...........#..#..#........"],
  ["...#.#..#.........##.#...#..##."],
  ["......#.#.........#.#...#......"],
  ["......#..##.###......##.#....#."],
  [".....#...#..#.......#.........."],
  [".#...#.......#.....###......#.."],
  ["...........##.....#..#..#....#."],
  ["..#....#..#...#......#.......#."],
  ["..#...#...#.#..#....#...#......"],
  [".......#....###.####...###.#..."],
  ["#.##.#.......#.......#....#.#.#"],
  [".##..........#.....#..###......"],
  [".....#...........#.##..#....#.."],
  ["........##.....#.#........##..."],
  ["#..#..#..................##...."],
  ["#...###..........#............."],
  [".......#.#.......#.#.......##.."],
  [".....#.#...#....#...####.....#."],
  ["..##.....##.......#....#......."],
  ["##..........#...#..##....##...."],
  ["..........#..#......#........#."],
  ["##..#....#..#....#.....##....#."],
  ["##.##.....#...##.##.......#...."],
  ["..#..#.###.#..##.#..#..#...#..."],
  [".#..#.....#........#...##.#...."],
  ["..#..#.....#.#......##.#.#....."],
  [".#..##...#.#....#...#...#.#.##."],
  [".........#...#....###.#.....#.."],
  ["...........###.#.#..#..#...#.#."],
  ["##...#......##...........#..#.."],
  [".........##..#...#.......#....."],
  ["#......#.#..........#..#......."],
  ["...#.................#....#...."],
  ["#....#......................##."],
  ["##.......#..#......#.#...###.#."],
  ["..#....#..#.#......#..........."],
  ["...#...........###.#.#........."],
  ["..#..##.....#.....##...##......"],
  ["..#..#.#.#.#..#..#..##....#...#"],
  ["#......##.....##..##.##...#...."],
  ["#.....#.....#.#........#......."],
  [".#.....#.................#....#"],
  [".###....#...#............#.#.#."],
  [".#...#.#......#.#.............."],
  ["....#...#......#.....#.......#."],
  ["........#.....#..........#....#"],
  ["#..#......#...#...#.........#.."],
  ["#....#......#...##.#...#...#..."],
  ["#...#....#....#..#..#.....#..#."],
  ["#......##..#..#.#.#..#.#......."],
  ["..#..#...............#...##...#"],
  ["............#..............#.##"],
  [".#.#.#......##.......#.......#."],
  ["....#.........##.......#...###."],
  [".......#.#...#.#.#.......#....."],
  ["....#..#..#...#....#.##.#.##..."],
  ["...##.##.#...#......#.........."],
  ["#.....#...#.#...#.##..##.#....."],
  [".......#.....#...#.#...##.#...."],
  [".#.............#.....#....##..#"],
  ["##......#.......#...#....#....."],
  [".###......#.................#.."],
  ["#.#......##.........##..#......"],
  ["...#....#..........#.#........."],
  ["..##..#.........#.............."],
  [".....#...#..................#.#"],
  [".............#.........#...#..#"],
  ["....#....#......#.#.......#...#"],
  ["#..#............#.#.......#...#"],
  ["..#.....#............#........."],
  [".#.....................###....#"],
  ["........#.####.........#.#.#..."],
  ["#...........##...#.........#..#"],
  ["...........#..#......#...#.#..."],
  ["....##...##.....#.....#........"],
];

// part 1
let trees = [];
const countTrees = map.reduce((acc, item, currentIndex) => {
  if (item[0][acc] === "#") {
    trees.push(item[0][acc]);
  }
  let newIndex = acc + 3;
  if (newIndex >= item[0].length) {
    const difference = newIndex - item[0].length;
    newIndex = 0 + difference;
  }

  return newIndex;
}, 0);

console.log(trees.length);
