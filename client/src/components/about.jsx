import React from "react";

var About = () => {
  return (
    <div id="about" className="frame">
      <h2>ABOUT ME</h2>
      <img src={require('../assets/biophoto.jpg').default} width="40%" className="biopic"/>
      <div className="bio">Hi! I'm Caitlin Zhu, and I'm a full-stack developer who loves problem-solving and creating solutions that positively impact lives.<br/><br/>I first found my love of coding at the University of Texas in Austin, where I dipped my toe into the Computer Science pool and earned my Elements of Computing Certificate. I loved it so much that upon graduation, I spent the next 6 months diligently exploring and growing my skills. Currently, my interests lie in front-end/web development and UI/UX.<br/><br/>In my free time, you'll find me whipping up mouthwatering baked goods or crafting a new DIY project.</div>
    </div>
  )
}

export default About;