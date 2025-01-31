import { useInView } from "react-intersection-observer";

function Experience() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <section className= "experience-section" id = "experience" ref = {ref}>
        <div className={`experience-container ${inView ? 'fade-in' : ''}`}>
            <div className="work-experience-content">
                <h2 className="section-title">02. Where I've Worked</h2>
                <div className="work-experience-grid">
                    {/* Left Column */}
                    <div className="companies-list">
                        <p>Upstatement</p>
                        <p>Apple</p>
                        <p>Scout Studio</p>
                        <p>Starry</p>
                        <p>MullenLowe</p>
                    </div>

                    {/* Right Column */}
                    <div className="job-details">
                        <h3 className="job-title">
                            Lead Engineer <span className="company-name">@ Upstatement</span>
                        </h3>
                        <p className="job-dates">May 2018 – Present</p>
                        <ul className="job-responsibilities">
                            <li>
                                Deliver high-quality, robust production code for a diverse array
                                of projects for clients including Harvard Business School,
                                Everytown for Gun Safety, Pratt Institute, Koala Health,
                                Vanderbilt University, The 19th News, and more.
                            </li>
                            <li>
                                Work alongside creative directors to lead the research,
                                development, and architecture of technical solutions to fulfill
                                business requirements.
                            </li>
                            <li>
                                Collaborate with designers, project managers, and other
                                engineers to transform creative concepts into production
                                realities for clients and stakeholders.
                            </li>
                            <li>
                                Provide leadership within engineering department through close
                                collaboration, knowledge shares, and mentorship.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};
    
export default Experience;