// import React from "react"
import Topbar from "./components/topbar/Topbar"
import About from "./components/about/About"
import Testimonials from "./components/testimonials/Testimonials"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./app.css"

function App() {
  return (
    <div className="app">
      <Topbar>

      </Topbar>
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