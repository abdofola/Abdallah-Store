import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { useMemo, useRef } from "react";

function Social() {
  const ref = useRef(null);
  const { isIntersecting } = useIntersectionObserver(ref);

  const visible = useMemo(() => isIntersecting, [isIntersecting]);

  return (
    <>
      <a
        ref={ref}
        href="#!"
        className={`socials__social ${visible ? "visible" : ""}`}
      >
        <FaFacebookF />
      </a>
      <a
        ref={ref}
        href="#!"
        className={`socials__social ${visible ? "visible" : ""}`}
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Social;
