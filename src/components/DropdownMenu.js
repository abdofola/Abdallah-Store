import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function DropdownMenu({ min }) {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const categories = ["bicycles", "heaters"];

  useEffect(() => {
    if (isActive) {
      window.addEventListener("click", pageClicked);
    }
    return () => window.removeEventListener("click", pageClicked);
  });

  function handleClick() {
    setIsActive(!isActive);
  }

  function pageClicked() {
    setIsActive(!isActive);
  }

  const style = { transform: isActive ? "rotate(180deg)" : "rotate(0)" };

  return (
    <div className={`menu-container ${min ? "reset-visibility" : ""}`}>
      <button onClick={handleClick} className="menu-trigger">
        <span>Categories</span>
        <FaAngleDown style={style} />
      </button>

      <ul
        ref={dropDownRef}
        className={`menu ${isActive ? "opened" : "closed"}`}
      >
        <li>
          {categories.map((cat, id) => (
            <a key={id} href={`#${cat}`}>
              {cat}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
