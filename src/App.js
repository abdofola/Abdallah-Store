import React, { useState, useEffect, useRef, useMemo } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Search from "./components/Search";
import Slider, { CardSlider } from "./components/Slider";
import Social from "./components/Social";
import logo from "./logos/logo_trans.svg";
import imgLogo from "./logos/logo_colored.svg";
import Grid from "./components/Grid";
import DropdownMenu from "./components/DropdownMenu";

// import data.json
import data from "./data.json";

// custom hooks
import { useWindowSize } from "./custom_hooks/useWindowSize";
import { useSize } from "./custom_hooks/useSize";
import useIntersectionObserver from "@react-hook/intersection-observer";
import Footer from "./components/Footer";

function App() {
  const [min, setMin] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const showCaseRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  // Custom hooks
  const { isIntersecting: homeIntersect, intersectionRatio: homeRatio } =
    useIntersectionObserver(showCaseRef, options);
  const { isIntersecting: aboutIntersect } = useIntersectionObserver(
    aboutRef,
    options
  );
  const { isIntersecting: contactIntersect } = useIntersectionObserver(
    contactRef,
    options
  );

  const { width } = useWindowSize();
  const size = useSize(headerRef);

  const { bottom } = useMemo(() => ({ bottom: size?.bottom }), [size?.bottom]);
  const ratio = useMemo(() => homeRatio, [homeRatio]);

  useEffect(() => {
    ratio < 1 ? setMin(true) : setMin(false);
  }, [ratio]);

  return (
    <div className="App">
      <header ref={headerRef} className="header">
        <div className={`header__container ${min ? "reset-dimensions" : ""}`}>
          <div className="header__left">
            <a href="#home" className="header__logo">
              <img src={logo} alt="company logo" />
            </a>
          </div>
          <div className="header__right">
            <Nav
              intersectings={[homeIntersect, aboutIntersect, contactIntersect]}
            />
            <Search />
          </div>
        </div>
        <div className="header__cat">
          <DropdownMenu min={min} />
        </div>
      </header>
      <main>
        <div
          ref={showCaseRef}
          id="home"
          className="showCase"
          style={{ marginBlockStart: `${bottom + 20}px` }}
        >
          <Slider sliders={data.sliders} />
        </div>
        {/* .showCase end */}
        <section id="bicycles" className="cardWrapper">
          <div className="wrapper">
            <h2>Bicycles</h2>
            {!(width >= 500) ? (
              <CardSlider cards={data.bicycles} />
            ) : (
              <Grid cards={data.bicycles} />
            )}
          </div>
        </section>
        {/* .bicycles end */}

        <section id="heaters" className="cardWrapper">
          <div className="wrapper">
            <h2>Heaters</h2>
            {!(width >= 500) ? (
              <CardSlider cards={data.heaters} />
            ) : (
              <Grid cards={data.heaters} />
            )}
          </div>
        </section>
        {/* .heaters end */}

        <section ref={aboutRef} id="about" className="about">
          <div className="about__wrapper">
            <img className="about__img" src={imgLogo} alt="company img" />
            <div className="about__info">
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print , and publishing industries for previewing layouts and
                Lorem ipsum is placeholder text commonly used in the graphic,
                print , and publishing industries for previewing layouts and
                visual mockups. visual mockups.{" "}
              </p>
            </div>
          </div>
        </section>
        {/* .about end */}

        <section ref={contactRef} id="contact" className="contact">
          <div className="contact__wrapper">
            <h2>Contact me</h2>
            <p>
              Feel free to contact me directly by sending a message in what's
              app or via facebook. choose what you're comfortable with.
            </p>
            <div className="socials">
              <Social />
            </div>
          </div>
        </section>
        {/* .contact end */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
