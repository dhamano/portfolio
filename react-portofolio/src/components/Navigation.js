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

  const scroll = e => {
    e.preventDefault();
    toggleMenuOpen();
    let name = e.target.title,
    el = document.getElementById(name.toString());
    if (!el) { return; }
    let elYOffset = el.offsetTop - document.querySelector('header').offsetHeight,
    startPlace = window.pageYOffset,
    lastPlace = null;
    // console.log('el',el);
    // console.log('elYOffset', elYOffset, 'startPlace',startPlace);
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    if( 'requestAnimationFrame' in window === false ) {
      let options = {
        behavior: "smooth",
        block: "start"
      }
      el.scrollIntoView(options);
    }
    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / 750));
      window.scroll(0, Math.ceil((time * (elYOffset - startPlace) + startPlace)));
      // console.log('window.pageYOffset', window.pageYOffset, 'elYOffset',elYOffset, 'lastPlace', lastPlace);
  
      if(window.pageYOffset === elYOffset) {
        // console.log('FINISHED SCROLLING');
        return;
      }
      if((now-startTime) > 500 && window.pageYOffset === lastPlace) {
        // console.log('FINISHED SCROLLING');
        return;
      }
      lastPlace = window.pageYOffset;
      requestAnimationFrame(scroll);
    }
    scroll();
  }

  return(
    <nav>
      <ul>
        <li id="menu" onClick={toggleMenuOpen}>Menu</li>
        <li id="menu-list" className={`${ menuOpen ? 'open' : 'close' }`}>
          <ul>
            <li><NavLink onClick={scroll} title="home" to="/">Home</NavLink></li>
            <li><NavLink onClick={scroll} title="project" to="#project">Projects</NavLink></li>
            <li><NavLink onClick={scroll} title="about" to="#about">About</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;