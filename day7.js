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

// part 1
function findSuitableBags() {
  const bags = [];
  formattedData.filter((rule) => {
    const bag = rule.slice(0, rule.indexOf(":"));
    const constituents = rule.slice(rule.indexOf(":") + 1);
    if (constituents.includes("shiny gold")) {
      return bags.push(bag);
    }
  });

  for (i = 0; i < bags.length; i++) {
    for (j = 0; j < formattedData.length; j++) {
      const bag = formattedData[j].slice(0, formattedData[j].indexOf(":"));
      const constituents = formattedData[j].slice(
        formattedData[j].indexOf(":") + 1
      );
      if (constituents.includes(bags[i])) {
        bags.push(bag);
      }
    }
  }
  const duplicateBagsRemoved = [...new Set(bags)];
  return duplicateBagsRemoved.length;
}
