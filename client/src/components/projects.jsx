import React from "react";

var Projects = () => {
  return (
    <div id="projects" className="frame">
      <h2>PROJECTS</h2>
      <div className="celebwcait">
        <a href="https://celebratewcait.herokuapp.com/" target="_blank" className="project">Celebrate With Cait</a><br/>
        <img src={require('../assets/celebwcait1.png').default} width="50%"/>
        <img src={require('../assets/celebwcait2.png').default} width="50%"/>
        <img src={require('../assets/celebwcait3.png').default} width="50%"/>
      </div>
      <div className="martell">
        <a href="https://github.com/RFCE2209-House-Martell/je-m-appelle-martell/" target="_blank" className="project">Je M'appelle Martell</a><br/>
        {/* <img src={require('../assets/celebwcait1.png').default} width="50%"/> */}
      </div>
      <div className="bell">
        <a href="https://www.bellflight.com/support/mybell" target="_blank" className="project">MyBell Customer Portal Landing Page</a><br/>
        <img src={require('../assets/mybell1.png').default} width="50%"/>
      </div>
    </div>
  )
}

export default Projects;