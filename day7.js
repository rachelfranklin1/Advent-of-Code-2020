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

// part 2

function countInternalBags() {
  const getInitialBagInfo = formattedData.filter((item) => {
    const bag = item.slice(0, item.indexOf(":"));
    return bag.includes("shiny gold");
  });
  const initialBagDef = getInitialBagInfo[0].slice(
    0,
    getInitialBagInfo[0].indexOf(":")
  );
  const initialBagRules = getInitialBagInfo[0]
    .slice(getInitialBagInfo[0].indexOf(":") + 1)
    .split(",");
  const numberOfInternalBags = []; // push initial values in here
  console.log(initialBagRules);
  for (i = 0; i < initialBagRules.length; i++) {
    const indexOfBagCount = initialBagRules[i].search(/[0-9]/);
    const bagCount = initialBagRules[i][indexOfBagCount];
    numberOfInternalBags.push(bagCount);
    for (j = 0; j < formattedData.length; j++) {
      const bagDef = formattedData[j].slice(0, formattedData[j].indexOf(":"));
      if (bagDef.includes(initialBagRules[i])) {
        numberOfInternalBags.push(initialBagRules[i][indexOfBagCount]);
      }
    }
  }
  // break data into definition and rule (number, internalBag)
  // def: shiny gold bag
  // rule: contains 3 pink bags
  // find entry with def, take the number and push into array
  // search for internal bag as rule, take the number, push and begin search again with new internal bag
  // console.log(formattedData);
}

console.log(countInternalBags());
