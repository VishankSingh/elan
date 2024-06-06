import {useEffect, useRef, useState} from 'react';
import './CustomCursor.css'
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    if (isHovered === true) {
      gsap.to(".cursor", {
        scale: 1,
        duration: 0.1,
      })
    } else if (isHovered === false) {
      gsap.to(".cursor", {
        scale: 1,
        duration: 0.1,
      })
    }
  }, [isHovered]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - cursorRef.current.offsetWidth / 2 - window.innerWidth / 2;
      const y = e.clientY - cursorRef.current.offsetHeight / 2 - window.innerHeight / 2;

      gsap.to(cursorRef.current, {
        x: x,
        y: y,
        duration: 0.1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  useEffect(() => {
    const hoverElements = document.querySelectorAll('.link-out');
    const onMouseEnter = () => {setIsHovered(true)}
    const onMouseLeave = () => {setIsHovered(false)}

    hoverElements.forEach(elem => {
      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mouseleave", onMouseLeave);
    })

    return () => {
      hoverElements.forEach(elem => {
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mouseleave", onMouseLeave);
      })
    }
  })

  return (
    <div className="cursor" ref={cursorRef}></div>
  );
};

export default CustomCursor;
