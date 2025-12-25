import React from "react";
import "./style.css";

function InternshipExperience() {
  return (
    <section className="internship-section">
      <h2>Internship Experience</h2>

      <div className="internship-card">
        <h3>Web Development Intern</h3>
        <p className="company">Cognifyz Technologies</p>
        <p className="duration">December 2025 – January 2026</p>

        <ul>
          <li>
            Worked on front-end development tasks by developing and
            integrating web technologies to build scalable solutions that meet customer requirements and enhance user experience.
          </li>
          <li>
            Contributed to improving UI/UX, application stability, and Web development workflows, gaining hands-on experience in real-world web development practices.
          </li>
        </ul>
      </div>
      
      <div className="internship-card">
        <h3>Data Analysis Intern</h3>
        <p className="company">Cognifyz Technologies</p>
        <p className="duration">November 2025 – December 2025</p>

        <ul>
          <li>
             Worked on data preprocessing, data manipulation, and statistical analysis using Python to extract insights from large datasets and support data-driven decision-making.
          </li>
          <li>
             Contributed to building data visualizations, cleaning workflows, and exploratory analysis, helping transform raw data into meaningful business insights for real-world problem solving.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default InternshipExperience;
