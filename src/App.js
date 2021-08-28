import React, { useState, useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Slider, { CardSlider } from "./components/Slider";
import Social from "./components/Social";
import logo from "./logos/logo_trans.svg";
import imgLogo from "./logos/logo_colored.svg";
import { LoremIpsum } from "react-lorem-ipsum";
import Grid from "./components/Grid";
import DropdownMenu from "./components/DropdownMenu";

// import data.json
import data from "./data.json";
import { useWindowSize } from "./custom_hooks/useWindowSize";
import { useSize } from "./custom_hooks/useSize";
import useIntersectionObserver from "@react-hook/intersection-observer";

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.75
}

function App() {
  const [min, setMin] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const showCaseRef = useRef(null);
  const { isIntersecting : contactIntersect } = useIntersectionObserver(contactRef, options);
  const { isIntersecting : homeIntersect } = useIntersectionObserver(showCaseRef, options);
  const { isIntersecting : aboutIntersect } = useIntersectionObserver(aboutRef, options);
  const { width } = useWindowSize();
  const size = useSize(headerRef);

  // const socialCallBack = (entries) => {
  //   const [entry] = entries;
  //   setVisible(entry.isIntersecting);
  // };

  const showcaseCallBack = (entries) => {
    const [entry] = entries;
    entry.intersectionRatio < 0.7 ? setMin(true) : setMin(false);
  };

  // Threshold builder
  const buildThresholdList = () => {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  };

  const showCaseStyle = {
    marginTop: `${size?.bottom + 20}px`,
  };

  useEffect(() => {
    // const socialOptions = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 1,
    // };
    const showcaseOptions = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };

    // const socials = socialRef.current;
    const showCase = showCaseRef.current;

    // const socialObserver = new IntersectionObserver(
    //   socialCallBack,
    //   socialOptions
    // );
    const showcaseObserver = new IntersectionObserver(
      showcaseCallBack,
      showcaseOptions
    );
    // socialObserver.observe(socials);
    showcaseObserver.observe(showCase);

    return () => showcaseObserver.unobserve(showCase);
  }, [showCaseStyle]);

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
            <Nav intersectings={[homeIntersect, aboutIntersect, contactIntersect]} />
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
          style={showCaseStyle}
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
              <LoremIpsum p={1} />
            </div>
          </div>
        </section>
        {/* .about end */}

        <section ref={contactRef} id="contact" className="contact">
          <div className="contact__wrapper">
            <h2>Contact me</h2>
            <div className="socials">
              <Social />
            </div>
          </div>
        </section>
        {/* .contact end */}
      </main>
      <footer className="footer">
        <p>Designed by fola | momo &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
