import CardSlider from "./Slider";
import CardGrid from "./CardGrid";

import { useWindowSize } from "../custom_hooks/useWindowSize";
import { useEffect, useReducer, useState } from "react";
import { useFetch } from "../custom_hooks/useFetch";
import { filterReducer } from "../reducers/filterReducer";
import { productReducer } from "../reducers/productReducer";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function Content() {
  const url = "http://localhost:8000";
  const initState = {
    showAll: true,
    showBicycle: false,
    showHeater: false,
  };
  const override = css`
    display: block;
    margin: 1em auto;
    border-color: black;
  `;

  // Custom hooks
  const { width } = useWindowSize();
  const [state, dispatch] = useReducer(filterReducer, initState);
  const [bicycles, setBicycles] = useState([]);
  const [heaters, setHeaters] = useState([]);
  const { data: products, isPending } = useFetch(url);
  const BICYCLES_ID = 1;
  const HEATERS_ID = 2;

  // side effects to filter products based on their category's id, 1 for bicycles & 2 for heaters
  useEffect(() => {
    if (!isPending && products) {
      const filteredProducts = products.reduce(productReducer, {});
      setBicycles(filteredProducts[BICYCLES_ID]);
      setHeaters(filteredProducts[HEATERS_ID]);
    }
  }, [products, isPending]);

  // fn handles which type of action gets dispatched depends on the filter
  const handleFilter = (action) => {
    dispatch({ type: action });
  };

  const BICYCLES = isPending ? (
    <ClipLoader css={override} size={50} loading={isPending} />
  ) : (
    <section className="cardWrapper">
      {width >= 500 ? (
        <div className="products">
          {bicycles.map((bicycle) => (
            <CardGrid key={bicycle.id} product={{ ...bicycle }} />
          ))}
        </div>
      ) : (
        <CardSlider products={bicycles} />
      )}
    </section>
  );

  const HEATERS = isPending ? (
    <ClipLoader css={override} size={50} loading={isPending} />
  ) : (
    <section className="cardWrapper">
      {width >= 500 ? (
        <div className="products">
          {heaters.map((heater) => (
            <CardGrid key={heater.id} product={{ ...heater }} />
          ))}
        </div>
      ) : (
        <CardSlider products={heaters} />
      )}
    </section>
  );

  const ALL = (
    <>
      {HEATERS}
      {BICYCLES}
    </>
  );

  return (
    <main className="content">
      <div className="container">
        <div className="title">
          <h2>products</h2>
        </div>
        <div className="content__filters">
          <button
            className={`content__filter ${state.showAll && "active"} `}
            onClick={() => handleFilter("all")}
          >
            all
          </button>
          <button
            className={`content__filter ${state.showBicycle && "active"} `}
            onClick={() => handleFilter("bicycles")}
          >
            bicycles
          </button>
          <button
            className={`content__filter ${state.showHeater && "active"} `}
            onClick={() => handleFilter("heaters")}
          >
            heaters
          </button>
        </div>
        {state.showAll
          ? ALL
          : state.showBicycle
          ? BICYCLES
          : state.showHeater
          ? HEATERS
          : ALL}
      </div>
    </main>
  );
}

export default Content;
