const { start } = require("repl");

const exampleData = ["BBFFBBFRLL", "BFFFBBFRRR", "FFFBBBFRRR"];
// const exampleData = ["FBFBBFF"];
// first 6 digits work out row
// last three digits work out the column
// seatID = row * 8 + column

const listOfSeatIds = exampleData.map((item) => {
  return {
    row: findRow(item.slice(0, item.length - 3)),
    col: findColumn(item.slice(item.length - 4)),
    // seatId: row * 8 + col,
  };
});
function findRow(rowCode) {
  console.log(rowCode);
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
      endPos -= difference;
    } else {
      startPos += difference;
    }
  });
  return endPos;
}

// something is broken with L

console.log(listOfSeatIds);
