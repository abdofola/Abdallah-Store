import React, { useEffect, useState } from "react";

function Nav({ intersectings }) {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    intersectings.forEach((intersecting) => {
      intersecting && setFocus(false);
    });
  }, [focus, intersectings]);

  const [homeRef, aboutRef, contactRef] = intersectings;

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a
            className={`nav__link ${homeRef || focus ? "active" : ""}`}
            href="/"
          >
            Home
          </a>
        </li>
        <li className="nav__item">
          <a
            className={`nav__link ${
              (aboutRef && !contactRef) || focus ? "active" : ""
            }`}
            href="#about"
          >
            About
          </a>
        </li>
        <li className="nav__item">
          <a
            className={`nav__link ${contactRef || focus ? "active" : ""}`}
            href="/contact"
          >
            Contact
          </a>
        </li>
        <li className="nav__item lang">
          <a href="#!">EN</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
