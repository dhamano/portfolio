import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2019 All Rights Reserved. Dustin Hamano
      </p>
      <a href="/" className="logo ir">Dustin Hamano's Logo</a>
      <ul>
        <li><Link title="home" to="/">Home</Link></li>
        <li><Link title="portfolio" to="#portfolio">Portfolio</Link></li>
        <li><Link title="about" to="#about">About</Link></li>
      </ul>
    </footer>
  )
}

export default Footer;