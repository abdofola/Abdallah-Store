import { useEffect, useState } from "react";

function useOnscreen(ref, options = {}) {
  // state for checking elem visibility
  const [isIntersecting, setIntersecting] = useState(false);
  const [ratio, setRatio] = useState(null);

  const callback = ([entry]) => {
    // Update the state when callback fires.
    if (entry.isIntersecting) {
      setIntersecting(entry.isIntersecting);
      setRatio(entry.intersectionRatio);

    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const elem = ref?.current;

    if (!elem) {
      return;
    }

    observer.observe(elem);

    return () => observer.unobserve(elem);

    // cleanup
  }, [options, ref]);

  return { isIntersecting, ratio };
}

export { useOnscreen };
