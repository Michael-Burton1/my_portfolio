import "./intro.css";
import { init } from 'ityped'
import {useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,{
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["JavaScript", "typeScript", "react", "UX/UI", "QA"]
    })
  },[])
  return (
    <div className="intro" id="intro">
      <div className="introLeft">
        <div className="imgContainer">
          <img src="assets/headshot-removebg-preview.png" alt="Michael Burton headshot" className="headShot"/>
        </div>
      </div>
      <div className="introRight">
        <div className="introWrapper">
          <h2 id="introH2">Hello, My name is</h2><br/>
          <h1 id="introH1">Michael Burton</h1><br/>
          <h3 id="introH3">I know <span className="iCan" ref={textRef}></span></h3>
        </div>
        <a id="introArrow" href="#about">
          <img id="introArrowImg" src="assets/downArrow2.png" alt="a downward arrow"/>
        </a>
      </div>
    </div>
  )
}
