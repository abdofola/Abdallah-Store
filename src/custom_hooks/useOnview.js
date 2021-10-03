import { useEffect } from "react";

export function useOnview(ref, options = {}) {
  const callback = (entries, observer) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // console.log("target:", entry.target);

        entry.target.classList.add("fade-in");
        entry.target.style.transitionDelay = 0.1 * idx + "s";
        observer.unobserve(entry.target);
        // entry.target.style.transitionDelay = 'unset';
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    ref.current.forEach((elem) => {
      if (elem) {
        observer.observe(elem);
      }
    });
  }, [options, ref]);
}
