import React from "react";
import { TiHome } from "react-icons/ti";
import "./Navbar.css";
export default function Navbar() {
  const gotoHome = () => {
    window.location.reload();
  };
  return (
    <nav className="navbar">
      <TiHome size={45} className="navbarhome" onClick={gotoHome} />
      <h2 className="navbar-heading">Wordle</h2>
    </nav>
  );
}
