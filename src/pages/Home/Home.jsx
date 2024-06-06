import './Home.css'
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import themeVideo from "../../assets/Elan & ηVision 2024 Theme Reveal Video.mp4";
import {useEffect, useRef} from "react";

import LinkHover from "../../components/linkhover/LinkHover.jsx";

import Gallery from "../../components/Gallery/Gallery.jsx";


function Home() {
  const themeVidRef = useRef(null)
  const descRef = useRef(null)
  const lettersRef = useRef(null)
  const showVideoRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({paused: false})
    tl.from(".elan-letters", {
      y: -100,
      opacity: 0,
      ease: "power1.Out",
      stagger: 0.03,
      duration: 0.5,
    }, ">")
    tl.from(".desc", {
      duration: 0.8,
      x: 0,
      delay: 0,
      opacity: 0,
      stagger: 10,
      ease: "linear",
    })
    tl.from(".show-video", {
      duration: 0.8,
      x: 0,
      delay: 0,
      opacity: 0,
      ease: "linear",
    }, "<")
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (themeVidRef.current) {
        themeVidRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
      if (descRef.current) {
        descRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      if (lettersRef.current) {
        lettersRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
      if (showVideoRef.current) {
        showVideoRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero">
        <video autoPlay loop muted disablePictureInPicture
               src={themeVideo} className="theme-vid" ref={themeVidRef}
        ></video>
        <div className="container">

          <div className="elan" ref={lettersRef}>
            <div className="elan-letters">e</div>
            <div className="elan-letters">l</div>
            <div className="elan-letters">a</div>
            <div className="elan-letters">n</div>
            <div className="elan-letters">&</div>
            <div className="elan-letters">n</div>
            <div className="elan-letters">v</div>
            <div className="elan-letters">i</div>
            <div className="elan-letters">s</div>
            <div className="elan-letters">i</div>
            <div className="elan-letters">o</div>
            <div className="elan-letters">n</div>
          </div>

          <a href={"https://www.youtube.com/watch?v=up8GN4jvgwQ"} target={"_blank"} className={"hover-effect-item"}>
            <div className="show-video hover-effect-item-child" ref={showVideoRef}>
              <div className={"play"}>&#9656;&nbsp;</div>
              <LinkHover text={"show theme video"} class={"show-theme-video"}/>
            </div>
          </a>

          <div className="desc" ref={descRef}>
            Elan and ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the
            largest fests in South India. It is entirely organized by IITH students. Elan refers to the cultural part
            and ηVision cites the technological part of the fest. This festival features several professional and
            semi-professional crowd-pulling events and promises to be a grand event showcasing the best of cultural
            performances, technical solutions, and student community advances
          </div>
        </div>
      </div>
      <Gallery/>
    </>
  )
}

export default Home;