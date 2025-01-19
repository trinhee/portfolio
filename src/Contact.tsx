import { useInView } from "react-intersection-observer";
import './Contact.css'

function Contact() {
  // Hook for observing the visibility of the Contact section
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Animate only once
  });

  return (
    <section
      className={`contact-section ${inView ? "in-view" : ""}`} // Add class when in view
      id="contact"
      ref={ref}
    >
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out if you'd like to collaborate on a project, have
        questions, or just want to say hi!
      </p>
      <a href="mailto:ethan.trinh4@gmal.com" className="contact-link">
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
