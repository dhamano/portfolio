import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    
    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect( () => {
        let el = document.getElementById('menu-list');
        if(menuOpen) {
            let elHeight = el.scrollHeight;
            el.style.height = elHeight + "px";
        } else {
            el.style.height = 0;
        }
    }, [menuOpen])

    return(
        <nav>
            <ul>
                <li id="menu" onClick={toggleMenuOpen}>Menu</li>
                <li id="menu-list" className={`${ menuOpen ? 'open' : 'close' }`}>
                    <ul>
                        <li onClick={toggleMenuOpen}><NavLink to="/">Home</NavLink></li>
                        <li onClick={toggleMenuOpen}><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li onClick={toggleMenuOpen}><NavLink to="/about">About</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;