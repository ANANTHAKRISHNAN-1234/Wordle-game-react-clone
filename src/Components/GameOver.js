import React, { useContext } from "react";
import { AppContext } from "../pages/Game/Game";
import "./GameOver.css";
const GameOver = () => {
  const { currAttempt, gameOver, correctWord } = useContext(AppContext);
  console.log(gameOver);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Nice,You Correctly Guessed the Word"
          : "OOPs!!,You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
};
export default GameOver;
