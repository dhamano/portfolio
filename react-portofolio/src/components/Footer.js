import React from 'react';
import { Link } from 'react-router-dom';

import { scroll } from '../utilities/functions';

const Footer = () => {

  const scrollPage = e => {
    e.preventDefault();
    scroll(e);
  }

  return (
    <footer>
      <p>
        &copy; 2019 All Rights Reserved. Dustin Hamano
      </p>
      <a href="/" className="logo ir">Dustin Hamano's Logo</a>
      <ul>
        <li><Link onClick={scrollPage} title="home" to="/">Home</Link></li>
        <li><Link onClick={scrollPage} title="project" to="#project">Projects</Link></li>
        <li><Link onClick={scrollPage} title="about" to="#about">About</Link></li>
      </ul>
    </footer>
  )
}

export default Footer;