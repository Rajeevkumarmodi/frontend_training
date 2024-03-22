import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h2>Shoping</h2>
      <div className="icons">
        <FaCartArrowDown />
        <p>4</p>
      </div>
    </div>
  );
}

export default Header;
