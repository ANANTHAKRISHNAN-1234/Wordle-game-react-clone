import React from "react";
import Board from "../../Components/Board";
import Keyboard from "../../Components/Keyboard";
import GameOver from "../../Components/GameOver";
import "./Game.css";
import { boardDefault, generateWordSet } from "../../Components/Words";
import { createContext, useState, useEffect } from "react";
export const AppContext = createContext();
const Game = () => {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterpos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  // const correctWord = "RIGHT";
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onDelete = () => {
    if (currAttempt.letterpos === 0) return;
    const newboard = [...board];
    newboard[currAttempt.attempt][currAttempt.letterpos - 1] = "";
    setBoard(newboard);
    setCurrAttempt({ ...currAttempt, letterpos: currAttempt.letterpos - 1 });
  };
  const onSelectLetter = (key) => {
    if (currAttempt.letterpos > 4) return;
    const newboard = [...board];
    newboard[currAttempt.attempt][currAttempt.letterpos] = key;
    setBoard(newboard);
    setCurrAttempt({ ...currAttempt, letterpos: currAttempt.letterpos + 1 });
    console.log(correctWord);
  };
  const onEnter = () => {
    if (currAttempt.letterpos !== 5) return;
    console.log(gameOver);
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    console.log(currWord);
    console.log();
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterpos: 0 });
    } else {
      alert("Word not found");
    }
    if (currWord.toLowerCase() === correctWord) {
      // console.log(currWord);
      // console.log(correctWord);

      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };
  return (
    <div className="game">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onDelete,
          onSelectLetter,
          onEnter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
        }}
      >
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </AppContext.Provider>
    </div>
  );
};
export default Game;
