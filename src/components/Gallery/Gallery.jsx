import {gsap} from "gsap";

import "./Gallery.css"

import img1 from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import img5 from "../../assets/5.jpg"
import img6 from "../../assets/6.jpg"
import img7 from "../../assets/7.jpg"
import img8 from "../../assets/8.jpg"
import img9 from "../../assets/9.jpg"
import img10 from "../../assets/10.jpg"
import img11 from "../../assets/11.jpg"
import img12 from "../../assets/12.jpg"
import img13 from "../../assets/13.jpg"
import img14 from "../../assets/14.jpg"
import img15 from "../../assets/15.jpg"
import img16 from "../../assets/16.jpg"
import {useRef} from "react";


function Gallery() {
  const galleryContainerRef = useRef(null)

  const colorArray = [
    "#351a1a",
    "#2c0000",
    "#570025",
    "#1d2e00",
    "#002939",
    "#003037",
    "#121212",
    "#322a00",
    "#4e1800",
    "#000a3a",
    "#0b0b0b",
    "#001903",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
  ]




  function handleImageClick(e) {
    const imgSrc = e.target.src
    console.log(imgSrc)

    const imgNumber = imgSrc.match(/(\d+)\.jpg/)[1]
    galleryContainerRef.current.style.backgroundColor = colorArray[parseInt(imgNumber) - 1]

    const newImgSrc = `https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/${imgNumber}.jpg`
    console.log(newImgSrc)


    const previewContainer = document.querySelector(".preview-container")

    const currentLastImg = previewContainer.querySelector("img:last-child")



    if (currentLastImg) {
      gsap.to(currentLastImg, {duration: 1, scale: 1.5, left: "-70%", ease: "expo.out"})
    }

    const newImg = document.createElement("img")
    newImg.src = newImgSrc
    newImg.style.position = "absolute"
    newImg.style.right = "-100%"

    previewContainer.appendChild(newImg)

    gsap.to(newImg, {duration: 1, right: "0%", ease: "expo.out"})
  }

  function handleImgHoverIn(e) {
    const img = e.target
    //console.log(img)

    gsap.to(img, {scale: 1.1, duration: 0.2})
  }

  function handleImgHoverOut(e) {
    const img = e.target
    //console.log(img)

    gsap.to(img, {scale: 1, duration: 0.2})
  }



  return (
    <div className="gallery-container" ref={galleryContainerRef}>
      <div className="gallery">
        <div className="row">
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>1.</p></div>
            <div className="img" >
              <img src={img1} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>2.</p></div>
            <div className="img">
              <img src={img2} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>3.</p></div>
            <div className="img">
              <img src={img3} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>4.</p></div>
            <div className="img">
              <img src={img4} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>5.</p></div>
            <div className="img">
              <img src={img5} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>6.</p></div>
            <div className="img">
              <img src={img6} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>7.</p></div>
            <div className="img">
              <img src={img7} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>8.</p></div>
            <div className="img">
              <img src={img8} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>9.</p></div>
            <div className="img">
              <img src={img9} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>10.</p></div>
            <div className="img">
              <img src={img10} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>11.</p></div>
            <div className="img">
              <img src={img11} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>12.</p></div>
            <div className="img">
              <img src={img12} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>13.</p></div>
            <div className="img">
              <img src={img13} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>14.</p></div>
            <div className="img">
              <img src={img14} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>15.</p></div>
            <div className="img">
              <img src={img15} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
          <div className="item" onClick={() => handleImageClick(event)}>
            <div className="index"><p>16.</p></div>
            <div className="img">
              <img src={img16} alt="" onMouseEnter={handleImgHoverIn} onMouseLeave={handleImgHoverOut} />
            </div>
          </div>
        </div>
      </div>
      <div className="preview">
        <div className="preview-container">
          <img src={img1} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Gallery