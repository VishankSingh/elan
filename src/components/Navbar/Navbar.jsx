import './Navbar.css'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";


function Navbar() {


  useGSAP(() => {
    gsap.from(".nav-link", {
      duration: 0.8,
      y: 0,
      delay: 0,
      opacity: 0,
      stagger: 0.08,
      ease: "linear",
    })
  })


  return (
    <div className="nav-bar">
      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Home&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Events&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Competitions&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Cryptex&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Workshops&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Accommodation&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Social Cause&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Sponsors&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="/elan">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Team&nbsp;</div>
        </a>
      </div>

      <div className="nav-link">

        <a href="#footer">
          <div className="square"></div>
          <div className="nav-link-text">&nbsp;Contact Us&nbsp;</div>
        </a>
      </div>


    </div>
  )
}

export default Navbar;