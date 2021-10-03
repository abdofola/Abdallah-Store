import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Social() {
  return (
    <>
      <a href="#!" className={`social `}>
        <FaFacebookF />
      </a>
      <a href="https://wa.me/249908608183" className={`social `}>
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Social;
