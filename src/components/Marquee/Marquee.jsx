import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react';
import './Marquee.css'

function Marquee() {
  useGSAP(() => {
    let currentScroll = 0
    let isScrollingDown = true

    let anim = gsap.to(".marquee-part", {
      xPercent: -100,
      repeat: -1,
      duration: 3,
      ease: 'linear',
    }).totalProgress(0.5)

    gsap.set(".marquee-inner", {xPercent: -50})

    function func() {
      if (window.scrollY > currentScroll) {
        isScrollingDown = true
        //console.log(isScrollingDown)
      } else {
        isScrollingDown = false
        //console.log(isScrollingDown)
      }
      gsap.to(anim, {
        timeScale: isScrollingDown ? 1 : -1,
      })
      currentScroll = window.scrollY
    }

    window.addEventListener("scroll", func)
    return () => {
      window.removeEventListener("scroll", func)
    }
  })

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