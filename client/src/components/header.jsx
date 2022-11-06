import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IconContext } from 'react-icons';

var Header = () => {
  var scroll = (num) => {
    let scrollToPixel = 0;
    if (num === 2) {
      scrollToPixel = document.querySelector('#title').clientHeight + 50;
    } else if (num === 3) {
      scrollToPixel = document.querySelector('#title').clientHeight + document.querySelector('#about').clientHeight + 55;
    } else if (num === 4) {
      scrollToPixel = document.querySelector('#title').clientHeight + document.querySelector('#about').clientHeight + document.querySelector('#projects').clientHeight + 60;
    }
    window.scrollTo(0, scrollToPixel);
  }

  return (
    <div id="header">
      <div className="headerTitle navbar" onClick={() => scroll(1)}>Caitlin</div>
      <div onClick={() => scroll(2)} className="navbar">About</div>
      <div onClick={() => scroll(3)} className="navbar">Projects</div>
      <div onClick={() => scroll(4)} className="navbar">Contact</div>
      <IconContext.Provider value={{size: '30px', color: 'white'}}>
        <a href="https://github.com/czhu67" target="_blank"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/czzhu/" target="_blank"><AiFillLinkedin/></a>
      </IconContext.Provider>
    </div>
  )
};

export default Header;