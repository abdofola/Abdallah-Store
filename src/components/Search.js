import { useEffect, useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useFetch } from "../custom_hooks/useFetch";
import useInput from "../custom_hooks/useInput";

function Search() {
  const [searchProps, resetSearch] = useInput("");
  const [searchResult, setSearchResult] = useState([]);
  const { data } = useFetch("http://localhost:8000/items");
  const [change, setChange] = useState(false);

  // Filter the search result with matching items form db
  const filterResult = () => {
    if (!searchProps.value) {
      setChange(false);
      return;
    }
    
    setChange(true);
    const inputValue = searchProps.value.toLowerCase();
    const res = data.filter((item) => item.toLowerCase().includes(inputValue));
    return res;
  };

  const result = useMemo(filterResult, [data, searchProps.value]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    resetSearch();
  };

  return (
    <div className="searchContainer">
      <form className="search" onSubmit={handleSubmit}>
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
      <ul className="searchList">
        {searchResult.length
          ? searchResult.map((result, id) => (
              <li key={id}>
                <a href="#!">{result}</a>
              </li>
            ))
          : change && <li>No match</li>}
      </ul>
    </div>
  );
}

export default Search;
