import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <img src="logo.png" alt="" / >
            <div class="links">
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedJobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div> 
            <button>Start Applying</button>
        </nav>
    );
};

export default Header;