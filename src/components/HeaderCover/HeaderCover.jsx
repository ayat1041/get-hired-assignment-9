import React from "react";
import "./HeaderCover.css";
const HeaderCover = () => {
  return ( 
    <div className="banner">
      <div className="banner__info">
        <h1>
          One Step<br></br>Closer To Your<br></br>
          <span>Dream Job</span>
        </h1>
        <p>Explore thousands of job opportunities with all the<br></br>information you need. Its your future. Come find it. Manage all<br></br>your job application from start to finish.</p>
        <button>Get Started</button>
      </div>
      <img src="person.png" alt="" />
    </div>
  );
};

export default HeaderCover;
