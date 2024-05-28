import {useEffect, useRef, useState} from 'react';
import './CustomCursor.css'
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);

  useGSAP(() => {
    if (isHovered === true) {
      gsap.to(".cursor", {
        scale: 2,
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
    const checkClassOnHover = (event) => {
      const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
      if (hoveredElement && hoveredElement.classList.contains('cursor-link')) {
        if (isHovered === false || isHovered === null) {
          setIsHovered(true);
        }
      } else {
        if (isHovered === true || isHovered === null) {
          setIsHovered(false);
        }
      }
    };

    const links = document.getElementsByClassName(".cursor-link")

    Array.from(links, child => {
      child.addEventListener('mouseover', checkClassOnHover);
    });

    document.addEventListener('mousemove', checkClassOnHover);

    return () => {
      Array.from(links, child => {
        child.removeEventListener('mouseover', checkClassOnHover);
      });
    };
  }, [isHovered]);

  return (
    <div className="cursor" ref={cursorRef}></div>
  );
};

export default CustomCursor;
