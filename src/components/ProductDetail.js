import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "./Modal";
import Form from "./Form";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetch } from "../custom_hooks/useFetch";
import { css } from "@emotion/react";
import logo from "../logos/logo_trans.svg";

const ProductDetail = () => {
  const [form, setForm] = useState(false);
  const { id } = useParams();
  const url = "https://api.momo-japan-market.com/product?id=" + id;
  const { data: product, isPending, error } = useFetch(url);
  const override = css`
    display: block;
    margin: 10vh auto 0;
    border-color: black;
  `;

  // side effect to keep track of the product status
  useEffect(() => {}, [isPending, product, error]);

  const formTrigger = () => {
    setForm(!form);
  };

  const productDetails = isPending ? (
    <ClipLoader css={override} size={70} loading={isPending} />
  ) : !error && product ? (
    <>
      <div className="top">
        <div className="top__logo">
          <Link to="/">
            <img src={logo} alt="company logo" />
          </Link>
        </div>
        <Link to="/">home</Link>
        <div className="custom-shape-divider-bottom-1632582134 top__waves">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid container">
        <div className="left">
          <div className="left__img">
            <img src={product.image_path} alt="img details" />
          </div>
        </div>
        <div className="right">
          <div className="right__header">
            <h2>{product?.name}</h2>
          </div>
          <div className="right__content">
            <span>${product.price}</span>
            <p>{product.description}</p>
          </div>
          <div className="right__footer">
            <button onClick={formTrigger}>Enquiry</button>
            {/* <span>available size: {product.size}</span> */}
          </div>
        </div>
      </div>
    </>
  ) : (
    <div style={{ marginTop: "10vh auto", textAlign: "center", width: "95%" }}>
      <h3>Our bad please refresh the page :(</h3>
    </div>
  );

  return (
    <>
      <div className="Details">{productDetails}</div>

      <Modal
        id={product?.id}
        title={product?.name}
        form={form}
        src={product?.image_path}
        show={form}
        close={formTrigger}
      >
        {form && <Form />}
      </Modal>
    </>
  );
};

export default ProductDetail;
