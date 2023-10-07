
import React, { useState, useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {
 const [logoText, setLogoText] = useState("Vashudev Sharma");
 const logoTexts = ["Vashudev Sharma", "Developer", "Designer"];
 
 useEffect(()=>{
  let interval;

  const handleMouseEnter = () =>{
    interval= setInterval(()=>{
      const newIndex = (logoTexts.indexOf(logoText) + 1)% logoTexts.length;
      setLogoText(logoTexts[newIndex]);
    },1000);
  };

  const handleMouseLeave = () => {
    clearInterval(interval);
  }

  const logoElement = document.querySelector('.logoText');

  logoElement.addEventListener('mouseenter', handleMouseEnter);
  logoElement.addEventListener('mouseleave', handleMouseLeave);

  return() => {
  logoElement.removeEventListener('mouseenter', handleMouseEnter);
  logoElement.removeEventListener('mouseleave', handleMouseLeave);
  clearInterval(interval);
  }
 }, [logoText]);

 return (
    <div className="navbar">
      <div className="logoText">
        <h2>{logoText}</h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
 );
};

export default Navbar;