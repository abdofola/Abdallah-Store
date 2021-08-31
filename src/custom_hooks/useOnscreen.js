import { useEffect, useState } from "react";

function useOnscreen(ref, options = {}) {
  // state for checking elem visibility
  const [isIntersecting, setIntersecting] = useState(false);

  const callback = ([entry], observer) => {
    // Update the state when callback fires.
    setIntersecting(entry.isIntersecting);
    observer.unobserve(entry.target);

  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const elem = ref.current;
    
    // start observing if the element is nodeElement
    elem && observer.observe(elem);
    
    // cleanup
    // return () => ref && observer.unobserve(elem);
  }, [options, ref]);

  return isIntersecting;
}

export { useOnscreen };
