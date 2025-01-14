import './Nav.css'

function Nav() {
  return (
    <header className="header">
        <a href="/" className="logo">E</a>

        <nav className="navbar">
          <a href="/">About</a>
          <a href="/">Experience</a>
          <a href="/">Work</a>
          <a href="/">Contact</a>
          <a href="/" id='resume'>Resume</a>

        </nav>
    </header>
  );
}

export default Nav;
