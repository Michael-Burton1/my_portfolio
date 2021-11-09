import React from 'react'
import "./menu.css"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
        <li className="list" onClick={()=>setMenuOpen(false)}>
          <a className='listAnchor' href="#intro">Home</a>
        </li>  
        <li className="list" onClick={()=>setMenuOpen(false)}>
          <a className='listAnchor'href="#about">About</a>
        </li>  
        <li className="list" onClick={()=>setMenuOpen(false)}>
          <a className='listAnchor'href="#works">Projects</a>
        </li>  
        <li className="list" onClick={()=>setMenuOpen(false)}>
          <a className='listAnchor'href="#testimonials">Testimonials</a>
        </li>  
        <li className="list" onClick={()=>setMenuOpen(false)}>
          <a className='listAnchor'href="#contact">Contact</a>
        </li>  
      </ul>
    </div>
  )
}
