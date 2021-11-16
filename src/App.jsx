// import React from "react"
import Topbar from "./components/topbar/Topbar"
import About from "./components/about/About"
import Testimonials from "./components/testimonials/Testimonials"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.css"
import { useState } from "react"

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections"> 
        <Intro/>
        <About/>
        
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App; 