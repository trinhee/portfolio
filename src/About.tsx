import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

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
            <span className="section-number">01.</span> About Me
          </h2>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at
            <a href="#">an advertising agency</a>, <a href="#">a start-up</a>, <a href="#">a huge corporation</a>,
            and <a href="#">a student-led design studio</a>. My main focus these days is building accessible,
            inclusive products and digital experiences at <a href="#">Upstatement</a> for a variety of clients.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="tech-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>WordPress</li>
            <li>Eleventy</li>
          </ul>
        </div>
        <div className="about-photo">
          <img src="profile-photo.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
