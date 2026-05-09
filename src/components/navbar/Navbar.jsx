import React from 'react';

import "./Navbar.css";

const Navbar = () => {
    return <nav className="navbar">
        <div className="navbar_links">
            <a href="">home</a>
            <a href="">projects</a>
            <a href="">games</a>
            <a href="">about</a>
            <a href="">resume</a>
        </div>
    </nav>
};

export default Navbar;