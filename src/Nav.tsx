import React, { useState, useEffect } from 'react'
import './Nav.css'
import IconLogo from './logo.tsx'

function Nav() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isShadowVisible, setIsShadowVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scrolling direction
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true); // Scrolling down
      } else {
        setIsScrollingDown(false); // Scrolling up
      }

      // Add shadow if the navbar is not at the top
      if (currentScrollY > 10) {
        setIsShadowVisible(true);
      } else {
        setIsShadowVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return (
    
    <header className= {`header ${isScrollingDown ? 'hide' : ''} ${
      isShadowVisible ? 'shadow' : ''
      }`}>
        <a href="#hero" className="logo">
        <IconLogo/>
        </a>

        <nav className="navbar">
          <a href="#about">About</a>
          <a href="/">Experience</a>
          <a href="/">Work</a>
          <a href="#contact">Contact</a>
          <a href="https://docs.google.com/document/d/1RMDgc0sYO-VZ823LUVCbRsq7WWdMIvKz2-h5Cxn1lGI/edit?usp=drive_link" target="_blank" id='resume'>Resume</a>

        </nav>
    </header>    
  );
}

export default Nav;