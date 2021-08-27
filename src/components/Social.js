import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
// import "./social.scss";

function Social() {
  return (
    <>
      <a href="#!" className="socials__social">
        <FaFacebookF />
      </a>
      <a href="#!" className="socials__social">
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Social;
