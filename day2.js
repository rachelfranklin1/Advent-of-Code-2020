import { day2Input } from "./input";

// part 1
const acceptedPasswords = day2Input.filter((item) => {
  const min = item[0];
  const max = item[1];
  const letterToMatch = item[2];
  const regexToMatch = new RegExp(letterToMatch, "g");
  const testString = item[3];
  const matchedInstancesOfLetters = testString.match(regexToMatch);
  const length = matchedInstancesOfLetters && matchedInstancesOfLetters.length;
  return length >= min && length <= max;
});

// part 2
const acceptedPasswords = day2Input.filter((item) => {
  const positionA = item[0];
  const positionB = item[1];
  const letterToMatch = item[2];
  const stringToSearch = item[3];
  let itemsMatched = [];
  if (stringToSearch[positionA - 1] === letterToMatch) {
    itemsMatched.push(positionA);
  }
  if (stringToSearch[positionB - 1] === letterToMatch) {
    itemsMatched.push(positionB);
  }
  return itemsMatched.length === 1;
});
