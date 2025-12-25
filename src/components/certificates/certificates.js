import React from 'react';
import './certificates.css'; // Import the new CSS file

const certificateData = [
  {
    id: 1,
    title: "Facebook ADS Campaign",
    issuer: "Coursera",
    link: "https://coursera.org/share/1dab26ca6f895f3e242a003c49cdcce0", // Replace with your actual link
     // Example icon, you might use an actual image or different font-awesome icon
  },
  {
    id: 2,
    title: "Basic data structures and algorithms",
    issuer: "Simplilearn",
    link: "https://simpli-web.app.link/e/xDnzeMJ79Wb", // Replace with your actual link
    icon: "fa-solid fa-award",
  },
  {
    id: 3,
    title: "5 Days Virtual Internship On CyberSecurity",
    issuer: "Prompt Infotech",
    link: "https://www.promptinfotech.com/certificate/YOUR_CERT_ID_3", // Replace with your actual link
    icon: "fa-solid fa-award",
  },
  {
    id: 4,
    title: "Javascript Fundamentals",
    issuer: "Hackerrank",
    link: "https://drive.google.com/file/d/1QdD0kA5xTAZTC8LKsaeqzKQGYY3p44vs/view?usp=drive_link", // Replace with your actual link
    icon: "fa-solid fa-award",
  },
  {
    id: 5,
    title: "Inheritance in Java",
    issuer: "Great Learning",
    link: "https://drive.google.com/file/d/1BMtNlj7KR4hYS49FyFpQ-GxZ5AsZ7upc/view?usp=drive_link", // Replace with your actual link
    icon: "fa-solid fa-award",
  },
 
   {
    id: 6,
    title: "Introduction to Generative AI",
    issuer: "UpGrad",
    link: "https://drive.google.com/file/d/1HruefJtzHOvGjbS1zLatk2msFU149cMP/view?usp=drive_link", // Replace with your actual link
    icon: "fa-solid fa-award",
  },
   {
    id: 7,
    title: "React JS Beginners",
    issuer: "Simplilearn",
    link: "https://drive.google.com/file/d/15LalbnmnpLMXYmBs9-6bVoQoskFqThDy/view?usp=drive_link", // Replace with your actual link
    icon: "fa-solid fa-award",
  },

  {
    id: 8,
    title: "Git/GitHub Workshop",
    issuer: "Novitech",
    link: "https://drive.google.com/file/d/1fuKY6eyyxZhDwj-39IdeHUJGfjYcmi9Q/view?usp=drive_link", // Replace with your actual link
    icon: "fa-solid fa-award",
  },

  {
    id: 9,
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    link: "https://drive.google.com/file/d/1f4wNf8bk2fyKMnI3O-ixhxMHuU2Bvy50/view?usp=drive_link", // Replace with your actual link
    icon: "fa-solid fa-award",
  }


];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <h2 className="section-title"> Certificates & Awards</h2>
      <div className="certificates-grid">
        {certificateData.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <div className="certificate-icon">
              {/* You might use a specific icon library like FontAwesome */}
              <i className={cert.icon}></i> 
              {/* Or if you have an image, replace <i> with <img src="/path/to/icon.png" alt="certificate icon" /> */}
            </div>
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-issuer">{cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;