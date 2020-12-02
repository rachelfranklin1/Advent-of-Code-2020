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
