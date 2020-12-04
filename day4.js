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
// console.log(countValidPassports);

const validPassports = [
  [
    "ecl:gry",
    "pid:860033327",
    "eyr:2020",
    "hcl:#fffffd",
    "byr:1937",
    "iyr:200",
    "cid:147",
    "hgt:183cm",
  ],
  [
    "iyr:2013",
    "ecl:amb",
    "cid:350",
    "eyr:2023",
    "pid:028048884",
    "hcl:#cfa07d",
    "byr:1929",
  ],
  [
    "hcl:#ae17e1",
    "iyr:2013",
    "eyr:2024",
    "ecl:brn",
    "pid:760753108",
    "byr:1931",
    "hgt:179cm",
  ],
  [
    "hcl:#cfa07d",
    "eyr:2025",
    "pid:166559648",
    "iyr:2011",
    "ecl:brn",
    "hgt:59in",
  ],
  [
    "ecl:gry",
    "pid:860033327",
    "eyr:2020",
    "hcl:#fffffd",
    "byr:1937",
    "iyr:2017",
    "cid:147",
    "hgt:183cm",
  ],
  [
    "hcl:#ae17e1",
    "iyr:2013",
    "eyr:2024",
    "ecl:brn",
    "pid:760753108",
    "byr:1931",
    "hgt:179cm",
  ],
];

// console.log("v", validPassports);
const filtering = validPassports.filter((pass) => {
  return pass.forEach((i) => {
    // need to push good properties into an array, check the length
    // if good properties === length of the passport (all are good), return true
    const identifier = i.slice(0, 3);
    const value = i.slice(4);
    if (identifier === "ecl") {
      return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value);
    }
    if (identifier === "iyr") {
      const year = Number(value);
      if (value.length !== 4) {
        return false;
      }
      return year >= 2010 && year <= 2020;
    }
    return false;
  });
});
console.log(filtering);
// function checkIdentifier() {
//   switch(id) {
//     case 'ecl':
//     return
//     break;
//   }
// }
