import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
// import useIntersectionObserver from "@react-hook/intersection-observer";
// import { useOnscreen } from "../custom_hooks/useOnscreen";

function Social() {
  const [animate, setAnimate] = useState(false);
  // const ref = useRef(null);
  // const ref = useRef(null);
  // const { isIntersecting } = useIntersectionObserver(ref, {useMutationObserver: false});
  // const isIntersecting = useOnscreen(ref);
  // const visible = useMemo(() => isIntersecting, [isIntersecting]);
  // console.log(isIntersecting)

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 3000);
  });

  return (
    <>
      <Zoom>
        <a href="#!" className={`socials__social `}>
          <FaFacebookF />
        </a>
      </Zoom>
      <Zoom when={animate}>
        <a href="#!" className={`socials__social `}>
          <FaWhatsapp />
        </a>
      </Zoom>
    </>
  );
}

export default Social;
