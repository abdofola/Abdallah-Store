import React, { useState, useEffect, useRef, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Content from "./components/Content";
import ProductDetail from "./components/ProductDetail";
import { useOnscreen } from "./custom_hooks/useOnscreen";
import { useFetch } from "./custom_hooks/useFetch";

function App({ hideLoader }) {
  // States & Refs
  const [ref, setRef] = useState(null);
  const [visible, setvisible] = useState(false);
  const [height, setHeight] = useState(0);
  const showCaseRef = useRef(null);

  // Custom hooks
  const { ratio: homeRatio } = useOnscreen(showCaseRef, { threshold: 1 });
  const bikes = useFetch("http://localhost:8000/products/bicycles");
  const heaters = useFetch("http://localhost:8000/products/heaters");

  // Memorize hook
  const ratio = useMemo(() => homeRatio, [homeRatio]);

  // side effects to hide preloader when the App component mounts.
  useEffect(hideLoader, [hideLoader]);

  // side effects to check the div.showCase ratio intersect with vp
  useEffect(() => {
    ratio < 1 ? setvisible(true) : setvisible(false);
  }, [ratio]);

  // handle the change in header's height.
  function updateHeight(recBottom) {
    setHeight(recBottom);
  }


  // callback prop to pass the aboutRef to the Header and then down to Nav
  const passRef = (aboutRef) => setRef(aboutRef);

  const style = {
    color: "hsl(120, 2%, 70%)",
    bg: "hsl(0, 62%, 36%)",
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header visible={visible} updateHeight={updateHeight} refs={ref} />
          <Content
            showCaseRef={showCaseRef}
            height={height}
            bikes={bikes}
            heaters={heaters}
            passRef={passRef}
          />
          <Footer theme={style} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
