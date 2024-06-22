import React, { useCallback, useContext, useEffect } from "react";
import Key from "../Components/Key";
import "./Keyboard.css";
import { AppContext } from "../pages/Game/Game";
const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const { onDelete, onEnter, onSelectLetter, currAttempt, disabledLetters } =
    useContext(AppContext);
  const handleKeyboard = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <Key keyvalue={key} disabled={disabledLetters.includes(key)} />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <Key keyvalue={key} disabled={disabledLetters.includes(key)} />
          );
        })}
      </div>
      <div className="line3">
        <Key keyvalue={"ENTER"} bigkey />
        {keys3.map((key) => {
          return (
            <Key keyvalue={key} disabled={disabledLetters.includes(key)} />
          );
        })}
        <Key keyvalue={"⌦"} bigkey />
      </div>
    </div>
  );
};
export default Keyboard;
