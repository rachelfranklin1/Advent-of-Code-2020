import { day2Input } from "./input";

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
