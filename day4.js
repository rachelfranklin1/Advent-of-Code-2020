let fs = require("fs");

// format the data
const text = fs.readFileSync("input.txt").toString().split(/\/n$/);
const getGroupedInfo = text[0].replace(/\n\n/g, ",");
const getIndividualStrings = getGroupedInfo.split(",");

const replaceSpaces = getIndividualStrings.map((s) => {
  return s.replace(/[ ]/g, ",");
});

const formattedData = replaceSpaces.map((s) => {
  return s.replace(/\n/g, ",");
});

const passportList = formattedData.map((s) => s.split(","));

// part 1
const validPassports = passportList.filter((p) => {
  if (p.length === 8) return p;
  if (p.length < 7) return;
  if (p.length === 7) {
    const isCidPresent = p.filter((item) => item.includes("cid"));
    if (!isCidPresent.length) return p;
  }
});
// part 2
const theMostValidPassportsOfAllThePassports = validPassports.filter((pass) => {
  console.log("!!!!", validatePassports(pass));
  return validatePassports(pass);
});

function validateEyeColor(value) {
  return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value);
}

function validateNumericData(value, min, max) {
  const year = Number(value);
  if (value.length !== 4) {
    return false;
  }
  return year >= min && year <= max;
}

function validateHeight(value) {
  const height = value.slice(0, value.length - 2);
  const unitsOfMeasurement = [
    value[value.length - 2],
    value[value.length - 1],
  ].join("");
  if (unitsOfMeasurement === "in") {
    return height >= 59 && height <= 76;
  }
  if (unitsOfMeasurement == "cm") {
    return height >= 150 && height <= 193;
  }
}

function validatePassports(passport) {
  const filteredProperties = passport.filter((i) => {
    const identifier = i.slice(0, 3);
    const value = i.slice(4);
    if (identifier === "ecl") {
      console.log("ecl", value, validateEyeColor(value));
      return validateEyeColor(value);
    }
    if (identifier === "byr") {
      console.log("byr", value, validateNumericData(value, 1920, 2002));
      return validateNumericData(value, 1920, 2002);
    }
    if (identifier === "iyr") {
      console.log("iyr", value, validateNumericData(value, 2010, 2020));
      return validateNumericData(value, 2010, 2020);
    }
    if (identifier === "eyr") {
      console.log("eyr", value, validateNumericData(value, 2020, 2030));
      return validateNumericData(value, 2020, 2030);
    }
    if (identifier === "hgt") {
      console.log("hgt", value, validateHeight(value));
      return validateHeight(value);
    }
    if (identifier === "hcl") {
      console.log("hcl", value, /^#\w{6}$/.test(value));
      return /^#\w{6}$/.test(value);
    }
    if (identifier === "pid") {
      console.log("pid", value, /^[0-9]{9}$/.test(value));
      return /^[0-9]{9}$/.test(value);
    }
    if (identifier === "cid") {
      console.log("cid", true);
      return true;
    }
    return false;
  });
  return filteredProperties.length === passport.length;
}
