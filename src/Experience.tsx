import { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

type JobDescriptions = {
  [key: string]: {
    title: string;
    company: string;
    dates: string;
    responsibilities: string[];
  };
};

function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const jobDescriptions: JobDescriptions = {
    "Invisual E": {
      title: "Software Intern",
      company: "Invisual E. Inc.",
      dates: "May 2024 – Aug 2024",
      responsibilities: [
        "Designed and implemented real-time control systems using C++, optimizing manufacturing automation processes and achieving a 15% reduction in system downtime.",
        "Developed intuitive, user-friendly applications with .NET, enabling operators to monitor and manage production processes in real time, improving operational efficiency.",
        "Created data analysis tool leveraging SQL and PowerBI, improving process monitoring and predictive maintenance through advanced analytics and real-time insights.",
      ],
    },
    "Western AI": {
      title: "Developer",
      company: "Western AI",
      dates: "Sept 2022 – April 2024",
      responsibilities: [
        "Collaborated on a project to develop a machine learning model for predicting student performance, leveraging Python and TensorFlow to identify key factors influencing academic success.",
        "Participated in a 48-hour hackathon to create a computer vision-based solution for campus safety, utilizing OpenCV for real-time object detection in camera footage.",
        "Attended workshops on AI fundamentals, including hands-on training with frameworks like TensorFlow, helping students build practical machine learning skills.",
      ],
    },
    "ByteKode Hackathon": {
      title: "Event Organizer",
      company: "ByteKode Hackathon",
      dates: "April 2021 – Aug 2022",
      responsibilities: [
        "Organized and facilitated two successful non-profit hackathon events for novice programmers, introducing 200+ attendees to basic programming concepts such as API usage and JSON parsing.",
        "Secured sponsorships from 12+ organizations, contributing to a prize pool worth $22,755 for participants."
      ],
    },
  };

  const [selectedCompany, setSelectedCompany] = useState<string>("Invisual E");

  const currentJob = jobDescriptions[selectedCompany];

  return (
    <section className="experience-section" id="experience" ref={ref}>
      <div className={`experience-container ${inView ? "fade-in" : ""}`}>
        <div className="work-experience-content">
          <h2 className="section-title">Experience and Leadership</h2>
          <div className="work-experience-grid">
            {/* Left Column */}
            <div className="companies-list">
            <div className="scroll-path"></div>
              {Object.keys(jobDescriptions).map((company) => (
                <button
                  key={company}
                  className={`company-button ${
                    selectedCompany === company ? "active" : ""
                  }`}
                  onClick={() => setSelectedCompany(company)}
                >
                  {company}
                </button>
              ))}
              <div
                className="scroll-indicator"
                style={{
                  transform: `translateY(${
                    Object.keys(jobDescriptions).indexOf(selectedCompany) * 45
                  }px)`,
                }}
              />
            </div>

            {/* Right Column */}
            <div className="job-details">
              <h3 className="job-title">
                {currentJob.title} - <span className="company-name">{currentJob.company}</span>
              </h3>
              <p className="job-dates">{currentJob.dates}</p>
              <ul className="job-responsibilities">
                {currentJob.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
