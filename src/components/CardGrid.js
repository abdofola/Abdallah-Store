import { Link } from "react-router-dom";
import { useRef } from "react";
import { useOnscreen } from "../custom_hooks/useOnscreen";

function CardGrid({ product }) {
  const ref = useRef(null);

  const { isIntersecting } = useOnscreen(ref);

  return (
    <>
      <div
        ref={ref}
        key={product.id}
        style={{ transitionDelay: 0.035 * product.id + "s" }}
        className={`products__card ${isIntersecting && "fade-in"}`}
      >
        <div className="products__img ">
          <img src={product.image_path} alt="product img" />
        </div>
        <div className="products__content">
          <h4>{product.name}</h4>
          <p>{product.description.substring(0, 99).trim() + "..."}</p>
        </div>
        <div className="products__footer">
          <Link to={`/products/${product.id}`}>see more</Link>
        </div>
      </div>
    </>
  );
}

export default CardGrid;
