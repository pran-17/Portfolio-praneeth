import React, { useState } from "react";
import "./Skills.css";

const skillsData = [
  { name: "HTML / CSS", level: 75, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },

  { name: "Node.js", level: 60, category: "Backend" },
  { name: "Express", level: 65, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },

  { name: "Python", level: 70, category: "Languages" },
  { name: "Java", level: 50, category: "Languages" },
  { name: "C ", level: 50, category: "Languages" },

  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" }
];

function Techstack() {
  const [active, setActive] = useState("All");

  const filteredSkills =
    active === "All"
      ? skillsData
      : skillsData.filter(skill => skill.category === active);

  return (
    <section className="skills-section">
      <h2>My <span>Skills</span></h2>

      {/* Filters */}
      <div className="skills-filters">
        {["All", "Frontend", "Backend", "Tools", "Languages"].map(cat => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-progress">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techstack;
