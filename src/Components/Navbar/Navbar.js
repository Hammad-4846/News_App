import React, { useRef } from "react";

import "./Navbar.css";

function Navbar() {
  const closeBtn = useRef("");
  const menu = useRef("");
  const menuBtn = useRef("");
  const handleMenuBtn = () => {
  
    menu.current.style.display = "flex";
    closeBtn.current.style.display = "inline-block"
    menuBtn.current.style.display = "none"
  }

  const handleCloseMenu = () => {
    menu.current.style.display = "none";
    closeBtn.current.style.display = "none"
    menuBtn.current.style.display = "inline-block"
  }

  return (
    <nav>
      <div className="container nav__container">
        <a href="./index1.html"><h4>CUEZELES</h4></a>
        <ul className="nav__menu" ref={menu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#home">Courses</a></li>
          <li><a href="#home">Contact</a></li>
        </ul>
        <button ref={menuBtn} onClick={handleMenuBtn} id="open-menu-btn"><i className="uil uil-bars"></i></button>
        <button ref={closeBtn} onClick = {handleCloseMenu} id="close-menu-btn"><i className="uil uil-multiply"></i></button>
      </div>
    </nav>
  );
}

export default Navbar;
