import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react';
import './Marquee.css'
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'

function Marquee() {

  /*
    useGSAP(() => {
      const marqueePart = document.querySelectorAll('.marquee-part');

      const tween = (elements) => {
        elements.forEach((element) => {
          gsap.to(element, {
            xPercent: -100,
            repeat: -1,
            duration: 5,
            ease: 'linear',
          });
        });
      };
      tween(marqueePart)
    });

    useGSAP(() => {
      let currentScroll = 0
      let isScrollingDown = true

      let tween = gsap.to(".marquee-part", {
        xPercent: -100,
        repeat: -1,
        duration: 3,
        ease: 'linear',
      }).totalProgress(0.5)

      gsap.set(".marquee-inner", {xPercent: -50})

      function func() {
        if (window.scrollY > currentScroll) {
          isScrollingDown = true
          console.log(isScrollingDown)
        } else {
          isScrollingDown = false
          console.log(isScrollingDown)
        }
        gsap.to(tween, {
          timeScale: isScrollingDown ? 1 : -1,
        })
        currentScroll = window.scrollY
      }
      window.addEventListener("scroll", func)
      return () => {window.removeEventListener("scroll", func)}

    })
  */

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let currentScroll = 0;
    let isScrollingDown = true;

    const tween = gsap.to(".marquee-part", {
      xPercent: -100,
      repeat: -1,
      duration: 2,
      ease: 'linear',
    }).totalProgress(0.5);

    gsap.set(".marquee-inner", { xPercent: -50 });

    function onLenisScroll() {
      const scrollY = lenis.scroll;

      if (scrollY > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = scrollY;
    }

    lenis.on('scroll', onLenisScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div id="marquee">
      <div className="marquee-inner">
        <div className="marquee-part">elan & nVision •</div>
        <div className="marquee-part">elan & nVision •</div>
        <div className="marquee-part">elan & nVision •</div>
        <div className="marquee-part">elan & nVision •</div>
        <div className="marquee-part">elan & nVision •</div>
        <div className="marquee-part">elan & nVision •</div>
      </div>

    </div>
  )
}

export default Marquee