import Nav from './Nav.tsx'
import Hero from './Hero.tsx'
import About from './about.tsx'
import './index.css'
import IconLinkedin from './linkedin.tsx';
import IconGithub from './github.tsx'
import IconInstagram from './instagram.tsx';
import IconTwitter from './loader.tsx';
import './side.css'

function App() {
  
  return(
    <>
    <div>
      <Nav/>
    </div>
    <div>
      <Hero/>
    </div>
    <div>
      <About/>
    </div>

    <div className="left-sidebar">
        <div className="icon-container">
          <IconLinkedin />
          <IconGithub />
          <IconInstagram />
          <IconTwitter/>
        </div>
        <div className="vertical-line"></div>
      </div>
    </>
    
  );
}

export default App