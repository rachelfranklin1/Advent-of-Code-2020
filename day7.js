// find any bag which can hold that bag directly; bagA and bagB
// search for any bag that can hold bagA directly; parentBagA
// search for any bag that can hold parentBag directly
// and so on, and so forth
let fs = require("fs");

// format data
const data = fs.readFileSync("example.txt").toString().split(/\/n$/);
const individualRules = data[0].split(/[.]/);
const formattedData = individualRules.map((str) => {
  let newStr;
  newStr = str.replace(" contain", ":");
  newStr = newStr.replace(/ bags/g, "");
  newStr = newStr.replace(/bag/g, "");
  newStr = newStr.replace(/\n/g, "");
  return newStr;
});

function findSuitableBags() {
  const bags = [];
  formattedData.forEach((rule) => {
    const bag = rule.slice(0, rule.indexOf(":"));
    const constituents = rule.slice(rule.indexOf(":") + 1);
    if (constituents.includes("shiny gold")) {
      return bags.push(bag);
    }
  });
  // why is this for loop not running twice?
  for (i = 0; i < bags.length; i++) {
    console.log("hello", bags, i, bags.length);
    for (j = 0; j < formattedData.length; j++) {
      console.log(j);
      const bag = formattedData[j].slice(0, formattedData[j].indexOf(":"));
      const constituents = formattedData[j].slice(
        formattedData[j].indexOf(":") + 1
      );
      if (constituents.includes(bag)) {
        return bags.push(bag);
      }
    }
  }
  return bags;
  // could use a reducer - it can reduce an array into one output
  // reduce the rules into one array with the bags
  // // if the bags has length, run reducer again ag
  // const acceptedBags = [];
  // reducer runs, and collates a list
  // push that list into accepted bags as own entry
  // while acceptedBags[acceptedBags - 1].length { run reducer}
}
console.log(findSuitableBags());
