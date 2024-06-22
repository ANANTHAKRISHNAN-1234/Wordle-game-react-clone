import React from "react";
import "./Key.css";
import { useContext } from "react";
import { AppContext } from "../pages/Game/Game";
function Key({ keyvalue, bigkey, disabled }) {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContext);
  const selectLetter = () => {
    if (keyvalue === "ENTER") {
      onEnter();
    } else if (keyvalue === "⌦") {
      onDelete();
    } else {
      onSelectLetter(keyvalue);
    }
  };
  return (
    <div
      className="key"
      id={bigkey ? "big" : disabled ? "disabled" : ""}
      onClick={selectLetter}
    >
      {keyvalue}
    </div>
  );
}
export default Key;
