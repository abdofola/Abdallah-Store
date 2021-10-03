import React, { useRef, } from "react";
import logo from "../logos/logo_trans.svg";
import About from "./About";
import Nav from "./Nav";
import Search from "./Search";


function Header() {
  const headerRef = useRef(null);
  
  return (
    <header ref={headerRef} className="header">
      <div className={`header__container `}>
        <div className="header__left">
          <a href="#home" className="header__logo">
            <img src={logo} alt="company logo" />
          </a>
        </div>
        <div className="header__right">
          <Nav/>
          <Search />
        </div>
      </div>
      <section  id="about" className="about">
        <About />
      </section>
      <div className="custom-shape-divider-bottom-1632582134 waves">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;
