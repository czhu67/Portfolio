import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillFileText } from "react-icons/ai";
import { IconContext } from 'react-icons';

var Contact = () => {
  return (
    <div id="contact" className="frame">
      <h2>CONTACT</h2>
      <div className="card">
        <IconContext.Provider value={{size: '30px', color: 'black'}}>
          <AiFillGithub/><div>GitHub: <a href="https://github.com/czhu67" target="_blank">https://github.com/czhu67</a></div>
          <AiFillLinkedin/><div>LinkedIn: <a href="https://www.linkedin.com/in/czzhu/" target="_blank">https://www.linkedin.com/in/czzhu</a></div>
          <AiFillMail/><div>Email: <a href="mailto:caitlin.zhu@utexas.edu" target="_blank">caitlin.zhu@utexas.edu</a></div>
          {/* <AiFillFileText/><a href={require('../assets/Caitlin_Zhu_Resume.pdf').default}>Resume</a> */}
        </IconContext.Provider>
      </div>
      <div id="footer">Created by Caitlin Zhu 🤍</div>
    </div>
  )
}

export default Contact;