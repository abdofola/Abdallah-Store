import DropdownMenu from "./DropdownMenu";
import Nav from "./Nav";
import Search from "./Search";
import logo from "../logos/logo_trans.svg";

function Header() {
  return (
    <header className="header">
      <div className={`header__container`}>
        <div className="header__left">
          <a href="#home" className="header__logo">
            <img src={logo} alt="company logo" />
          </a>
        </div>
        <div className="header__right">
          <Nav />
          <Search />
        </div>
      </div>
      <div className="header__cat">
        <DropdownMenu />
      </div>
    </header>
  );
}

export default Header;
