import React from 'react';

import "./Navbar.css";

const Navbar = () => {
    const handleNav = (e, id) => {
        // allow modifier keys / new tab
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        const el = document.getElementById(id);
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;
        if (el) {
            // calculate target position accounting for fixed navbar height
            const rect = el.getBoundingClientRect();
            const targetY = window.scrollY + rect.top - navH;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
            // update the hash without causing a jump
            window.history.replaceState(null, '', `#${id}`);
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.replaceState(null, '', '#home');
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar_links">
                <a href="#home" onClick={(e) => handleNav(e, 'home')}>Home</a>
                <a href="#projects" onClick={(e) => handleNav(e, 'projects')}>Projects</a>
                <a href="#games" onClick={(e) => handleNav(e, 'games')}>Games</a>
                {/* <a href="#resume" onClick={(e) => handleNav(e, 'resume')}>Resume</a> */}
                <a href="#knitting" onClick={(e) => handleNav(e, 'knitting')}>Knitting</a>
                <p style={{ color: 'white' }}>|</p>
                <a href="https://github.com/nicholas-holland-901" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/nicholas-holland-307984399/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </ul>
        </nav>
    );
};

export default Navbar;