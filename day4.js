let fs = require("fs");

// const day3Example = fs
//   .readFileSync("input.txt")
//   .toString()
//   .split("\n\n")
//   .map((s) => s.replace(/\h/, ","));
//   .filter((s) => s.length > 0);
const text = fs.readFileSync("example.txt").toString();
console.log(text);
// read text
// wrap it in an array
// at the start of any line that follows a double line break, put a ["
// at the end of a line before a double line break, put a "],
// in every space, put a ", "

const example = [
  [
    "ecl: gry",
    "pid: 860033327",
    "eyr: 2020",
    "hcl: #fffffd",
    "byr: 1937",
    "iyr: 2017",
    "cid: 147",
    "hgt: 183cm",
  ],
  [
    "iyr: 2013",
    "ecl: amb",
    "cid: 350",
    "eyr: 2023",
    "pid: 028048884",
    "hcl: #cfa07d",
    "byr: 1929",
  ],
  [
    "hcl: #ae17e1",
    "iyr: 2013",
    "eyr: 2024",
    "ecl: brn",
    "pid: 760753108",
    "byr: 1931",
    "hgt: 179cm",
  ],
  [
    "hcl: #cfa07d",
    "eyr: 025",
    "pid: 66559648",
    "iyr: 011",
    "ecl: brn",
    "hgt: 59in",
  ],
];

// to filter, I need to replace the spaces with comas,
// then wrap the string in an array
// then, search each entry, find any that are not numbers and stringify them

// if the length is 8, push into good array
// if the number is less than 7, do nothing
// if the length is 7, filter and check that on string contains cid
// if it does, then its invalid

const countValidPassports = example.filter((p) => {
  if (p.length === 8) return p;
  if (p.length < 7) return;
  if (p.length === 7) {
    const test = p.filter((item) => item.includes("cid"));
    if (!test.length) return p;
  }
});
// console.log(countValidPassports);
