import {gsap} from "gsap";

import './LinkHover.css'

function LinkHover(props) {
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
      <div className="link-out" onMouseLeave={() => handleMouseLeave(`.${props.class}`)}
           onMouseEnter={() => handleMouseEnter(`.${props.class}`)}>
        <div className={`${props.class} `}>{props.text}</div>
        <div className={`${props.class} `}>{props.text}</div>
      </div>
    </>
  )
}

export default LinkHover;