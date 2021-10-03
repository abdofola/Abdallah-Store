import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useFetch } from "../custom_hooks/useFetch";
import useInput from "../custom_hooks/useInput";


function Search() {
  const ref = useRef(null);
  const [searchProps, resetSearch] = useInput("");
  const [searchResult, setSearchResult] = useState([]);
  const [change, setChange] = useState(false);
  const { data: products } = useFetch("http://localhost:8000/");
  

  // Return array of matching names : string
  const filterResult = () => {
    if (!searchProps.value) {
      setChange(false);
      return;
    }
    setChange(true);
    const inputValue = searchProps.value.toLowerCase();
    const matchingProducts = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue)
    );

    return matchingProducts;
  };

  const result = useMemo(filterResult, [products, searchProps.value]);

  // side effects to set the state of the search result
  useEffect(() => {
    if (!result) {
      return;
    }
    setSearchResult(result);

    // cleanup
    return () => {
      setSearchResult([]);
    };
  }, [result, searchResult]);

  // side effects to cleanup the search box when click outta it.
  useEffect(() => {
    document.body.addEventListener("click", () => resetSearch());
    // cleanup
    return () =>
      document.body.removeEventListener("click", () => resetSearch());
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    resetSearch();
  };

  return (
    <>
      <div className="searchContainer">
        <form
          className="search"
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
        >
          <input
            {...searchProps}
            className="search__txt"
            type="text"
            name="search"
            placeholder="what're you looking for?"
          />
          <button name="submit" className="search__btn">
            <BiSearch />
          </button>
        </form>
        <ul ref={ref} className="searchList">
          {searchResult.length
            ? searchResult.map((result) => (
                <li key={result.id}>
                  <Link to={`/products/${result.id}`}>{result.name}</Link>
                </li>
              ))
            : change && <li>No match</li>}
        </ul>
      </div>
    </>
  );
}

export default Search;
