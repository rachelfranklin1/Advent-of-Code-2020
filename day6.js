let fs = require("fs");
const data = fs.readFileSync("example.txt").toString().split(/\/n/);
const groupedAnswers = data[0]
  .replace(/\n\n/g, ", ")
  .replace(/\n/g, ",")
  .replace(/[,"$]/g, "")
  .split(" ");

let questions = [];
groupedAnswers.forEach((str, i) => {
  let lettersFound = "";
  for (const letter of str) {
    if (!lettersFound.includes(letter)) {
      lettersFound = lettersFound.concat(letter);
    }
  }
  questions.push([lettersFound]);
});
const totalQuestions = questions.reduce((acc, cv) => acc + cv[0].length, 0);

const answers = fs.readFileSync("day6.txt").toString().split(/\/n/);
const groupedPeople = answers[0]
  .replace(/\n\n/g, ", ")
  .replace(/\n/g, ",")
  .split(", ");

const getIndividuals = groupedPeople.map((str) => {
  return str.split(",");
});

const getOccurrancesOfSameAnswer = getIndividuals.map((answers) => {
  const noOfPeople = answers.length;
  const refinedAnswers = answers.toString().replace(/,/g, "");

  const lettersAndCounts = {};
  let count = 0;

  for (const letter of refinedAnswers) {
    if (!lettersAndCounts[letter]) {
      lettersAndCounts[letter] = 1;
    } else {
      lettersAndCounts[letter]++;
    }
  }

  const occurances = [];
  Object.entries(lettersAndCounts).forEach((occurance) => {
    const [key, value] = occurance;
    if (value === noOfPeople) {
      occurances.push(key);
    }
  });
  return occurances;
});

const sumOfOccurances = getOccurrancesOfSameAnswer.reduce((acc, cv) => {
  if (cv) {
    return (acc += cv.length);
  }
}, 0);

console.log(sumOfOccurances);
