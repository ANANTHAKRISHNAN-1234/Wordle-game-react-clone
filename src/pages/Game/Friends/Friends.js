import React, { useState } from "react";
import Game from "../../Game/Game";
import "./Friends.css";
const Friends = () => {
  const [startFriendGame, setStartFriendGame] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleFriendsbtn = () => {
    if (!/^[A-Za-z]{5}$/.test(inputValue)) {
      setErrorMessage("This Word is not allowed!!!");
    } else {
      setErrorMessage("");
      setStartFriendGame(true);
    }
  };
  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleFriendsbtn();
    }
  };
  if (!startFriendGame) {
    return (
      <div className="friends">
        <div className="inputtextbox">
          <input
            type="text"
            placeholder="Enter your Word...."
            pattern="[A-Za-z]+"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPressed}
          />
          <button className="playbtn" onClick={handleFriendsbtn}>
            {" "}
            Play
          </button>
          {errorMessage && (
            <p style={{ color: "red", marginLeft: "2rem" }}>{errorMessage}</p>
          )}
        </div>
      </div>
    );
  } else {
    return <Game isFriends={true} inputValue={inputValue} />;
  }
};
export default Friends;
