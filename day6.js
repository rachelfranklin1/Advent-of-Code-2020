let fs = require("fs");
const data = fs.readFileSync("day6.txt").toString().split(/\/n/);
const groupedAnswers = data[0]
  .replace(/\n\n/g, ", ")
  .replace(/\n/g, ",")
  .replace(/[,$]/g, "")
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
