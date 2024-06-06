import {gsap} from "gsap";

import './Footer.css'

import Marquee from "../Marquee/Marquee.jsx";
import LinkHover from "../linkhover/LinkHover.jsx";

function Footer() {
  const handleMouseEnter = (div) => {
    gsap.to(div, {
      y: "-100%",
      ease: "linear",
      duration: 0.2
    });
  };

  const handleMouseLeave = (div) => {
    gsap.to(div, {
      y: "0",
      ease: "linear",
      duration: 0.2
    });
  };

  return (
    <>
      <Marquee/>
      <div className="footer" id="footer">
        <div className="container">
          <div className="about">
            <div className="top-title">ABOUT US</div>

            <a href="#">
              <LinkHover text={"Blogs"} class={"Blogs"}/>
            </a>

            <a href="#">
              <div className="footer-link-out" onMouseLeave={() => handleMouseLeave(".IITH")}
                   onMouseEnter={() => handleMouseEnter(".IITH")}>
                <div className="IITH ">IIT Hyderabad</div>
                <div className="IITH ">IIT Hyderabad</div>
              </div>
            </a>

            <a href="#">
              <LinkHover text={"Gymkhana"} class={"Gymkhana"}/>
            </a>

            <a href="#">
              <div className="footer-link-out" onMouseLeave={() => handleMouseLeave(".ContactUs")}
                   onMouseEnter={() => handleMouseEnter(".ContactUs")}>
                <div className="ContactUs ">Contact Us</div>
                <div className="ContactUs ">Contact Us</div>
              </div>
            </a>
          </div>

          <div className="follow">
            <div className="top-title">FOLLOW US</div>

            <a href="#">
              <LinkHover text={"Twitter"} class={"Twitter"}/>
            </a>

            <a href="#">
              <LinkHover text={"Instagram"} class={"Instagram"}/>
            </a>

            <a href="#">
              <LinkHover text={"Facebook"} class={"Facebook"}/>
            </a>

            <a href="#">
              <LinkHover text={"Linkedin"} class={"Linkedin"}/>
            </a>
          </div>

          <div className="connect">
            <div className="top-title">LET&apos;S CONNECT</div>
            <div className="contact-text"><a href="mailto:elan@sa.iith.ac.in" className="">elan@sa.iith.ac.in</a></div>
            <div className="contact-text"><a href="https://maps.app.goo.gl/Z2JTYfLWP6JCHGjN6" target="_blank"
                                             className="">IIT Hyderabad, Sangareddy, Telangana, India</a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
