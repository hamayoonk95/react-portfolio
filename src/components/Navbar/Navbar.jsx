import React, { useState } from "react";

import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div className="nav__menu">
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "skills", "work", "contact"].map((item) => (
                <li key={{ item }}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
