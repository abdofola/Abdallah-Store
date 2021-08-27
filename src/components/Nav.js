import React, { useEffect, useRef } from "react";

function Nav({ intersecting }) {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    const [homeRef, contactRef, aboutRef] = intersecting;
    homeRef ? home.current.focus() : home.current.blur();
    contactRef ? about.current.focus() : about.current.blur();
    aboutRef ? contact.current.focus() : contact.current.blur();
  },[intersecting]);

  function handleClick(e) {
    [home, about, contact].forEach((elem) => {
      console.log(elem.current.blur())
    });
    e.target.focus();
  }

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a
            ref={home}
            className="nav__link"
            href="#home"
            onClick={(e) => handleClick(e)}
          >
            Home
          </a>
        </li>
        <li className="nav__item">
          <a
            ref={about}
            className="nav__link"
            href="#about"
            onClick={(e) => handleClick(e)}
          >
            About
          </a>
        </li>
        <li className="nav__item">
          <a
            ref={contact}
            className="nav__link"
            href="#contact"
            onClick={(e) => handleClick(e)}
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
