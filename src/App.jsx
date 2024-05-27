import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import {ReactLenis} from 'lenis/react'


import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import Home from './pages/Home/Home.jsx'

function App() {

  return (
    <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<>
            <CustomCursor/>
            <Navbar/>
            <Home/>
            <Footer/>
          </>}/>
        </Routes>
      </BrowserRouter>


    </ReactLenis>
  )
}

export default App
