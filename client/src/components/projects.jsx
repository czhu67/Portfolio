import React from "react";

var Projects = () => {
  return (
    <div id="projects" className="frame">
      <h2>PROJECTS</h2>
      <div id="celebwcait" className="project">
        <a href="https://celebratewcait.herokuapp.com/" target="_blank" className="project">Celebrate With Cait</a><br/>
        <div className="description">This is an ongoing personal project that I created to help with wedding planning logistics. It includes 3 main pages created using JavaScript, React, Webpack, and Sass. Some noteable features include the wedding day countdown, the budget "progress" bar, and the editable sticky-notes. In the future, I plan to implement authentication and connect a database so users can log in, use the app, and the data from the session can be saved for future sessions.</div>
        <img src={require('../assets/celebwcait1.png').default} className="demo"/>
        <img src={require('../assets/celebwcait2.png').default} className="demo"/>
        <img src={require('../assets/celebwcait3.png').default} className="demo"/>
      </div>
      <div id="martell" className="project">
        <a href="https://github.com/RFCE2209-House-Martell/je-m-appelle-martell/" target="_blank" className="project">Je M'appelle Martell</a><br/>
        <div className="description">Je M'appelle Martell is an e-commerce web application integrated with an existing RESTful API. My team of 4 broke the website down into 4 main components, and I took responsibility of the Overview section (pictured). This project involved sending GET/POST requests to the API using Axios, React Hooks, and CSS. I was particularly proud of implementing the zoom view, where users could click the image for a pop-up magnifying class. We operated on daily stand-up meetings and 2-day sprints, ultimately completing this front-end project in 2-3 weeks.</div>
        <img src={require('../assets/martell1.png').default} className="demo"/>
        <img src={require('../assets/martell2.png').default} className="demo"/>
      </div>
      <div id="watermelon" className="watermelon project">
        <a href="https://caitlinzhu.itch.io/watermeloncatch" target="_blank" className="project">Watermelon Catch</a><br/>
        <div className="description">Watermelon Catch is a single-player game, where the goal is to catch as many watermelons as you can before time runs out. This game was created using Phaser and HTML, and features sprite animations and multiple scenes.</div>
        <img src={require('../assets/watermelonCatch1.png').default} className="demo"/>
        <img src={require('../assets/watermelonCatch2.png').default} className="demo"/>
        <img src={require('../assets/watermelonCatch3.png').default} className="demo"/>
      </div>
      <div id="bell" className="project">
        <a href="https://www.bellflight.com/support/mybell" target="_blank" className="project">MyBell Customer Portal Landing Page</a><br/>
        <div className="description">This was a non-technical UI design done during my internship at Bell. I collaborated with an IT team member to create a layout for their customer portal and implement Google Analytics tracking for the page.</div>
        <img src={require('../assets/mybell1.png').default} className="demo"/>
      </div>
    </div>
  )
}

export default Projects;