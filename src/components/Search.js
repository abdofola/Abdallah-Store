import { BiSearch } from "react-icons/bi";
import useInput from "../custom_hooks/useInput";
// import "./search.scss";

function Search() {
  const [searchProps, resetSearch] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchProps.value)
    resetSearch();  
  };
  return (
    // Todo: make a post request  
    <form className="search" method="" action="" onSubmit={handleSubmit}>
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
  );
}

export default Search;
