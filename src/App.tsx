import Nav from './Nav.tsx'
import Hero from './Hero.tsx'
import About from './About.tsx'
import Experience from './Experience.tsx'
import Contact from './Contact.tsx'
import './index.css'
import IconLinkedin from './linkedin.tsx';
import IconGithub from './github.tsx'
import IconInstagram from './instagram.tsx';
import IconTwitter from './twitter.tsx';
import IconYoutube from './youtube.tsx';
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
    <div>
      <Experience/>
    </div>
    <div>
      <Contact/>
    </div>

    <div className="left-sidebar">
        <div className="icon-container">
          <IconLinkedin/>
          <IconGithub />
          <IconYoutube/>
          <IconInstagram />
          <IconTwitter/>
        </div>
        <div className="left-line"></div>
      </div>
      
      <div className="right-sidebar">
        <a href= "mailto:ethan.trinh4@gmail.com">ethan.trinh4@gmail.com</a>
        <div className="right-line"></div>
      </div>
    </>
    
  );
}

export default App