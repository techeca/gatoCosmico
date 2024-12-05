import React, { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, animacion, delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          scrollObserver.unobserve(entry.target);
        }
      });
  
      if (ref.current) scrollObserver.observe(ref.current);
  
      return () => {
        if (ref.current) scrollObserver.unobserve(ref.current);
      };
    }, []);
  
    const classes = `transition-all duration-1000 ease-in ${
      isVisible ? `opacity-100 ${animacion}` : "opacity-0"
    }`;
  
    return (
      <div
        ref={ref}
        style={{ animationDelay: `${delay}ms` }}
        className={classes}
      >
        {children}
      </div>
    );
  }
  