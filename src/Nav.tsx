import './Nav.css'
import IconLogo from './logo.tsx'

function Nav() {
  return (
    
    <header className="header">
        <a href="/" className="logo">
        <IconLogo/>
        </a>

        <nav className="navbar">
          <a href="/">About</a>
          <a href="/">Experience</a>
          <a href="/">Work</a>
          <a href="/">Contact</a>
          <a href="https://docs.google.com/document/d/1RMDgc0sYO-VZ823LUVCbRsq7WWdMIvKz2-h5Cxn1lGI/edit?usp=drive_link" target="_blank" id='resume'>Resume</a>

        </nav>
    </header>    
  );
}

export default Nav;