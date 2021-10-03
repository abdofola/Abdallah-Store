import { useOnscreen } from "../custom_hooks/useOnscreen";
import { useEffect, useRef } from "react";

function About() {
  const infoRef = useRef(null);

  const { isIntersecting } = useOnscreen(infoRef);

  // side effect to check if element intersecting with vp & then adding the corresponding animation.
  useEffect(() => {}, []);

  return (
    <>
      <div className="about__wrapper container">
        <div
          ref={infoRef}
          className={` about__info ${isIntersecting && "slide-left"}`}
        >
          <h2>About us</h2>
          <p>
            <b>Momo Alrayah</b> is a company based in Japan stablished a few years ago, our job is
            to provide you reliable and affordable products with almost no
            shipping cost from Asia all the way to Africa.
            <blockquote>
              <i>
                Choose what's in your best interest and leave us all the heavy
                lifting.
              </i>
            </blockquote>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
