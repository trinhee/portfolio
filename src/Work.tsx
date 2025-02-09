import { useInView } from "react-intersection-observer";
import './Work.css';
import github from './images/work.png'

function Work() {
    const { ref, inView } = useInView({
      threshold: 0.2, // Trigger animation when 20% of the component is visible
      triggerOnce: true, // Animate only once
    });

    return(
        <section className="work-section" id ="work" ref={ref}>
            <div className={`work-container ${inView ? 'fade-in' : ''}`}>
                <div className="work-text">
                    <h2>My Projects</h2>
                </div>

                <div className="github-photo">
                    <a href="https://www.github.com/trinhee" target="_blank">
                    <img src={github} alt="Github"></img>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Work;