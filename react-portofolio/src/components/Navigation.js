import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { scroll } from '../utilities/functions';

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

  const scrollPage = e => {
    e.preventDefault();
    toggleMenuOpen();
    scroll(e);
  }

  return(
    <nav>
      <ul>
        <li id="menu" onClick={toggleMenuOpen}>Menu</li>
        <li id="menu-list" className={`${ menuOpen ? 'open' : 'close' }`}>
          <ul>
            <li><NavLink onClick={scrollPage} title="home" to="/">Home</NavLink></li>
            <li><NavLink onClick={scrollPage} title="project" to="#project">Projects</NavLink></li>
            <li><NavLink onClick={scrollPage} title="about" to="#about">About</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;