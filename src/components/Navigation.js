import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <Link
        to="/"
        className={activeLink === '/' ? 'nav-button active' : 'nav-button'}
        onClick={() => handleClick('/')}
      >
        Home Page
      </Link>
      <Link
        to="/about"
        className={activeLink === '/about' ? 'nav-button active' : 'nav-button'}
        onClick={() => handleClick('/about')}
      >
        About Me
      </Link>
      <Link
        to="/portfolio"
        className={activeLink === '/portfolio' ? 'nav-button active' : 'nav-button'}
        onClick={() => handleClick('/portfolio')}
      >
        Portfolio
      </Link>
      <Link
        to="/contact"
        className={activeLink === '/contact' ? 'nav-button active' : 'nav-button'}
        onClick={() => handleClick('/contact')}
      >
        Contact
      </Link>
      <Link
        to="/resume"
        className={activeLink === '/resume' ? 'nav-button active' : 'nav-button'}
        onClick={() => handleClick('/resume')}
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navigation;
