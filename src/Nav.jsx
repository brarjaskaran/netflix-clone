import React from "react";
import "./Nav.css";
import { useEffect } from "react";
import { useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://image.flaticon.com/icons/svg/1828/1828328.svg"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
