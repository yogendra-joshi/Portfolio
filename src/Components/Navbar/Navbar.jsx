import React, { useState } from "react";
import "../../styles/css/navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header className="header">
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">Ai.</a>
        </h1>
      </div>

      <div id="desktop">
        <div className="navBar">
          <ul className="navLists">
            <li className="navItem">
              <a href="#about" className="navLink">
                <span className="headerNumber">1.</span>About
              </a>
            </li>
            <li className="navItem">
              <a href="#skill" className="navLink">
                <span className="headerNumber">2.</span>Skills
              </a>
            </li>
            <li className="navItem">
              <a href="#projects" className="navLink">
                <span className="headerNumber">3.</span>Projects
              </a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink">
                <span className="headerNumber">4.</span>Contact
              </a>
            </li>
            <button className="btn">
              <a href="Yogendra Resume.pdf" download="Yogendra Joshi.pdf">
                Resume
              </a>
            </button>
          </ul>

          <div className="closeNavBar">
            <AiFillCloseCircle
              className="icon"
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
      </div>
      {active && <MobileNav setActive={setActive} />}

      <div className="toggleNavBar">
        <TbGridDots className="icon" onClick={() => setActive(!active)} />
      </div>
    </header>
  );
}

export default Navbar;

export const MobileNav = ({ setActive }) => {
  return (
    <div className="mobile navBar">
      <ul className="navLists">
        <li className="navItem">
          <a href="#about" className="navLink">
            <span className="headerNumber">1.</span>About
          </a>
        </li>
        <li className="navItem">
          <a href="#skill" className="navLink">
            <span className="headerNumber">2.</span>Skills
          </a>
        </li>
        <li className="navItem">
          <a href="#projects" className="navLink">
            <span className="headerNumber">3.</span>Projects
          </a>
        </li>
        <li className="navItem">
          <a href="#contact" className="navLink">
            <span className="headerNumber">4.</span>Contact
          </a>
        </li>
        <button className="btn">
          <a href="Yogendra Resume.pdf" download="Yogendra Joshi.pdf">
            Resume
          </a>
        </button>
      </ul>

      <div className="closeNavBar">
        <AiFillCloseCircle
          className="icon"
          onClick={() => setActive((prev) => !prev)}
        />
      </div>
    </div>
  );
};
