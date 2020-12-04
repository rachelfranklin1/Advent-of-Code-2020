let fs = require("fs");

const text = fs.readFileSync("example.txt").toString().split(/\/n$/);
const getGroupedInfo = text[0].replace(/\n\n/g, ",");
const getIndividualStrings = getGroupedInfo.split(",");

const replaceSpaces = getIndividualStrings.map((s) => {
  return s.replace(/[ ]/g, ",");
});

const formattedData = replaceSpaces.map((s) => {
  return s.replace(/\n/g, ",");
});

const passportList = formattedData.map((s) => s.split(","));

const countValidPassports = passportList.filter((p) => {
  if (p.length === 8) return p;
  if (p.length < 7) return;
  if (p.length === 7) {
    const isCidPresent = p.filter((item) => item.includes("cid"));
    if (!isCidPresent.length) return p;
  }
});
console.log(countValidPassports);
