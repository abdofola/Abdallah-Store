import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className={`nav__link `}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className={`nav__link`}>
            Contact
          </Link>
        </li>
        <li className=" lang">
          <a href="#!">EN</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
