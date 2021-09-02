import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
// import useIntersectionObserver from "@react-hook/intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { useOnscreen } from "../custom_hooks/useOnscreen";

function Social() {
  const ref = useRef(null);
  const { isIntersecting } = useOnscreen(ref);
  const [intersectCount, setIntersecCount] = useState(0);
  const firstAppearance = intersectCount > 0;

  useEffect(() => {
    isIntersecting && setIntersecCount(1);
  }, [intersectCount, isIntersecting]);

 
  return (
    <>
      <a
        ref={ref}
        href="#!"
        className={`socials__social ${firstAppearance && "visible"}`}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://wa.me/249908608183"
        className={`socials__social ${firstAppearance && "visible"}`}
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Social;
