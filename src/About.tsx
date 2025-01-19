import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';
import pfp from './images/pfp.jpg'

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Animate only once
  });

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className={`about-container ${inView ? 'fade-in' : ''}`}>
        <div className="about-text">
          <h2>
            <span className="section-number"></span> About Me
          </h2>
          <p>
            Hello! My name is Ethan and I love bringing my random ideas to life. My interest in technology started back in 2014 when I discovered redstone in Minecraft. Turns out circuits and logic gates aren't just a Minecraft thing.
          </p>
          <p>
            Fast-forward to more recent events, I've had experience at as an intern at
            technology firm, an AI club, and as an event organizer. My main focus these days is building cool,
            useful, and practical projects while being a student at <a href="#">Western University</a> .
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="tech-list">
            <li>Python</li>
            <li>TypeScript</li>
            <li>PyTorch</li>
            <li>C/C++</li>
            <li>React</li>
            <li>TensorFlow</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>OpenCV</li>
          </ul>
        </div>
        <div className="about-photo">
          <img src={pfp} alt="Me" />
        </div>
      </div>
    </section>
  );
};

export default About;
