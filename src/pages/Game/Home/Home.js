import React, { useState } from "react";
import Game from "../../Game/Game";
import Friends from "../Friends/Friends";
import "./Home.css";
export default function Home() {
  const [oneplayer, setOnePlayer] = useState(0);
  const handleFirstButton = () => {
    setOnePlayer(1);
  };
  const handleSecondButton = () => {
    setOnePlayer(2);
  };
  if (oneplayer === 0) {
    return (
      <div className="home">
        <button className="player1" onClick={handleFirstButton}>
          1 player
        </button>
        <button className="player2 " onClick={handleSecondButton}>
          Play with friends offline
        </button>
      </div>
    );
  } else if (oneplayer === 1) {
    return <Game isFriends={false} />;
  } else {
    return <Friends />;
  }
}
