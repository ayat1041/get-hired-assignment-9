import React from 'react';
import "./ErrorPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCoffee, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
const style = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "orangeRed"
}
const textNum = {
    fontSize: "56px",
    color: "black"
}
const traingle = {
    fontSize: "100px",
}
const ErrorPage = () => {
    return (
        <div style={style}>
            <h1 className="four-o-four" style={textNum}>404</h1>
            <FontAwesomeIcon style={traingle} icon={faTriangleExclamation} />
            <h1>Easy there, Dora!<br></br>You're out of the map!</h1>
        </div>
    );
};

export default ErrorPage;