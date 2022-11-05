import React, { useState } from "react";
import { render } from "react-dom";
import Header from "./components/header.jsx";
import Title from "./components/title.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import './style/styles.css'

var App = () => {
  var updateDots = (node) => {
    if (node.style.backgroundColor === '') {
      node.style.backgroundColor = 'black';
      for (let dot of document.querySelectorAll('.tracker')) {
        if (dot.id !== node.id) {
          dot.style.backgroundColor = '';
        }
      }
    }
  }

  var changeFrame = (e) => {
    e.preventDefault();
    let scrollToPixel = 0;
    if (e.target.id === '2') {
      scrollToPixel = document.querySelector('#title').clientHeight;
    } else if (e.target.id === '3') {
      scrollToPixel = document.querySelector('#title').clientHeight + document.querySelector('#about').clientHeight + 5;
    } else if (e.target.id === '4') {
      scrollToPixel = document.querySelector('#title').clientHeight + document.querySelector('#about').clientHeight + document.querySelector('#projects').clientHeight + 10;
    }
    window.scrollTo(0, scrollToPixel);
  }

  var reveal = () => {
    var reveals = document.querySelectorAll(".frame");
    var track = [];

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        track.push(reveals[i].id);
      } else {
        reveals[i].classList.remove("active");
      }
    }
    updateDots(document.getElementById(track.length));
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="top">
      <Header/>
      <div className="pageTracker">
        <div id="1" className="tracker" style={{backgroundColor: 'black'}} onClick={changeFrame}></div>
        <div id="2" className="tracker" onClick={changeFrame}></div>
        <div id="3" className="tracker" onClick={changeFrame}></div>
        <div id="4" className="tracker" onClick={changeFrame}></div>
      </div>
      <Title/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

render(<App/>, document.getElementById("root"));