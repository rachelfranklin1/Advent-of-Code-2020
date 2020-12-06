let fs = require("fs");
const data = fs.readFileSync("day5.txt").toString().split(/\/n$/);
const getGroupedInfo = data[0].replace(/\n/g, ",");
const getIndividualStrings = getGroupedInfo.split(",");

const listOfSeatIds = getIndividualStrings.map((item) => {
  const row = findRow(item.slice(0, item.length - 3));
  const col = findColumn(item.slice(item.length - 3));
  const seatId = row * 8 + col;
  return seatId;
});
function findRow(rowCode) {
  let startPos = 0;
  let endPos = 128;
  const instructions = rowCode.split("");
  instructions.forEach((letter) => {
    const difference = (endPos - startPos) / 2;
    if (letter === "F") {
      endPos -= difference;
    } else {
      startPos += difference;
    }
  });
  return endPos - 1;
}
function findColumn(col) {
  let startPos = 0;
  let endPos = 7;
  const instructions = col.split("");
  instructions.forEach((letter) => {
    const difference = (endPos - startPos) / 2;
    if (letter === "L") {
      endPos = Math.floor((endPos -= difference));
    } else {
      startPos = Math.ceil((startPos += difference));
    }
  });
  return endPos;
}

console.log(Math.max(...listOfSeatIds));
