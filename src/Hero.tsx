import { useInView } from 'react-intersection-observer'
import './Hero.css'

function Hero() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <section className="hero-section" id= "hero" ref = {ref}>
            <div className={`hero-container ${inView ? 'fade-in' : ''}`}>
                <p className="intro">Hi, my name is</p>
                <h1 className='name'>Ethan Trinh.</h1>
                <h2 className='tagline'>I build things.</h2>
                <p className='description'>
                    I'm a software developer, computer science student, and innovator. I also have a love for cats!
                </p>

                <a href="files/Ethan and Kawi.pdf" id="kawi" target='_blank'>Meet my pal Kawi !</a>
            </div>
    </section>
    );
};

export default Hero;
