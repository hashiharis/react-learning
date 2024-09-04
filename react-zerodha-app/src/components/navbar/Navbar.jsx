import { useState } from "react";
import "./navbar.css";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { DesktopSidebar } from "../sidebar/DesktopSidebar";
import { MobileSidebar } from "../sidebar/MobileSidebar";

export const Navbar = () => {
  const [menuHide, setMenuHide] = useState(true);

  const toggleMenuHide = () => {
    setMenuHide((prevmenuHide) => !prevmenuHide);
  };

  const hamburger = (
    <MdMenu
      className="hamburgermenu"
      size="35px"
      color="#666"
      onClick={toggleMenuHide}
    />
  );
  const hamburgerClose = (
    <MdClose
      className="hamburgerclose"
      size="35px"
      color="#666"
      onClick={toggleMenuHide}
    />
  );

  return (
    <>
    <nav className="nav-section">
      <div className="left-section">
        <a href="/">
          <img
            className="logo"
            src="https://zerodha.com/static/images/logo.svg"
            alt="logo"
          />
        </a>
      </div>
      <ul className={`right-section ${menuHide ? "close" : ""}`}>
        <li>Signup</li>
        <li>About</li>
        <li>Products</li>
        <li>Pricing</li>
        <li>Support</li>
        {!menuHide&&<MobileSidebar/>}
      </ul>

      <div>{menuHide ? hamburger : hamburgerClose}</div>
    </nav>
    {menuHide?"":<DesktopSidebar/>}
    </>
  );
};
