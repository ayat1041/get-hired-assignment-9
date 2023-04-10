import React from "react";
import "./HeaderCoverRest.css";
const HeaderCoverRest = ({children}) => {
  return( 
  <>
  <div className="job-detail-header">
    <img className="img-1" src="https://i.ibb.co/Kq8cV0r/Vector-1.png" alt="" />
    <h2>{children}</h2>
    <img className="img-2" src="https://i.ibb.co/VgkKZFP/Vector.png" alt="" />
  </div>
  <div style={{paddingBlock:"80px",width: "100%",backgroundColor: "red",visibility:"hidden"}}>
    hey
  </div>
  </>
)};

export default HeaderCoverRest;
