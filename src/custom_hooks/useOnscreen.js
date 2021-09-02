import { useEffect, useState } from "react";

function useOnscreen(ref, options = {}) {
  // state for checking elem visibility
  const [isIntersecting, setIntersecting] = useState(false);
  const [ratio, setRatio] = useState(null);

  const callback = ([entry]) => {
    // Update the state when callback fires.
    setIntersecting(entry.isIntersecting);
    setRatio (entry.intersectionRatio)
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const elem = ref?.current;

    observer.observe(elem);

    // cleanup
    return () => observer.unobserve(elem);
  },[options, ref]);

  return {isIntersecting, ratio};
}

export { useOnscreen };
