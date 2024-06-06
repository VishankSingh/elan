import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Lenis from "lenis"

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import Home from './pages/Home/Home.jsx'
import {useEffect} from "react";

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/elan" element={<>
            <CustomCursor/>
            <Navbar/>
            <Home/>
            <Footer/>
          </>}/>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
