import React from "react";
import HeaderImg from "../../Assets/Images/Header.png"

import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="header_left">
          <h1>Grow Your Knowledge To Advance your Career Path</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            labore exercitationem dolore voluptatum magni vel similique
            consequuntur enim maiores ex!
          </p>
          <a href="#btn" className="btn btn-primary">
            Get Started
          </a>
        </div>
        <div className="header_right">
          <div className="header_right_img">
            <img src = {HeaderImg} alt="Header" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
