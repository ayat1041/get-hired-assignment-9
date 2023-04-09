import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav>
            <img src="logo.png" alt="" />
            <div className="links">
                <ActiveLink to="/" title="Home"></ActiveLink>
                <ActiveLink to="/statistics" title="Statistics"></ActiveLink>
                <ActiveLink to="/appliedJobs" title="Applied Jobs"></ActiveLink>
                <ActiveLink to="/blog" title="Blog"></ActiveLink>
            </div> 
            <button>Start Applying</button>
        </nav>
    );
};

export default Header;