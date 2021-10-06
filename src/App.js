import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Content from "./components/Content";
import ProductDetail from "./components/ProductDetail";
function App({ hideLoader }) {
  // side effects to hide preloader when the App component mounts.
  useEffect(hideLoader, [hideLoader]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Content />
          <Footer />
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
