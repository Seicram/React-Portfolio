import React from 'react';
import Navigation from './Navigation';

const Header = ({ showNavigation }) => {
  return (
    <header style={{ textAlign: 'center' }}>

      {showNavigation && <Navigation />}
    </header>
  );
};

export default Header;
