import wordle_Word_Bank from "../Wordle-Word-Bank.txt";
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordle_Word_Bank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n").map((word) => word.trim());
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
