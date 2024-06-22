import React, { useContext, useEffect } from "react";
import { AppContext } from "../pages/Game/Game.js";
import "./Letter.css";
function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  // console.log(letter);
  const correct = correctWord[letterPos] === letter.toLowerCase();

  const almost =
    !correct && letter !== "" && correctWord.includes(letter.toLowerCase());
  const lettercolor =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={lettercolor}>
      {letter}
    </div>
  );
}
export default Letter;
