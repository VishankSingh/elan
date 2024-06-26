import {gsap} from "gsap";
import {useRef} from "react";

import "./Gallery.css"

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

    const imgNumber = imgSrc.match(/(\d+)\.jpg/)[1]
    galleryContainerRef.current.style.backgroundColor = colorArray[parseInt(imgNumber) - 1]

    const previewContainer = document.querySelector(".preview-container")

    const currentLastImg = previewContainer.querySelector("img:last-child")

    if (currentLastImg) {
      gsap.to(currentLastImg, {duration: 1, scale: 1.5, left: "-70%", ease: "expo.out"})
    }

    const newImg = document.createElement("img")
    newImg.src = imgSrc
    newImg.style.position = "absolute"
    newImg.style.right = "-100%"

    previewContainer.appendChild(newImg)

    gsap.to(newImg, {duration: 1, right: "0%", ease: "expo.out"})
  }

  return (
    <div className="gallery-container" ref={galleryContainerRef}>
      <div className="gallery">
        <div className="row">
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>1.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/1.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>2.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/2.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>3.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/3.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>4.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/4.jpg"} alt=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>5.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/5.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>6.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/6.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>7.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/7.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>8.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/8.jpg"} alt=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>9.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/9.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>10.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/10.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>11.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/11.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>12.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/12.jpg"} alt=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>13.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/13.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>14.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/14.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>15.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/15.jpg"} alt=""/>
            </div>
          </div>
          <div className="item" onClick={(event) => handleImageClick(event)}>
            <div className="index"><p>16.</p></div>
            <div className="img">
              <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/16.jpg"} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="preview">
        <div className="preview-container">
          <img src={"https://raw.githubusercontent.com/VishankSingh/elan/main/src/assets/1.jpg"} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Gallery