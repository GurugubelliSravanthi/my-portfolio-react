import React from 'react';
import './Skills.css';

const skillSections = [
  {
    title: "Programming Languages",
    image: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    skills: [
      { name: 'Java', emoji: '☕', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
      { name: 'Python', emoji: '🐍', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
      { name: 'JavaScript', emoji: '✨', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
      { name: 'SQL', emoji: '🧮', icon: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
    ]
  },
  {
    title: "Frontend & Backend Tools",
    image: "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
    skills: [
      { name: 'React', emoji: '⚛️', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
      { name: 'HTML', emoji: '📄', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
      { name: 'CSS', emoji: '🎨', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
      { name: 'Git', emoji: '🔧', icon: 'https://cdn-icons-png.flaticon.com/512/919/919831.png' },
      { name: 'GitHub', emoji: '🐙', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
      { name: 'Postman', emoji: '📬', icon: 'https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png' },
      { name: 'Spring Boot', emoji: '🌱', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968750.png' },
    ]
  },
  {
    title: "Databases & DevOps",
    image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    skills: [
      { name: 'MySQL', emoji: '🐬', icon: 'https://cdn-icons-png.flaticon.com/512/528/528260.png' },
      { name: 'MongoDB', emoji: '🍃', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' },
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-page">
      {skillSections.map((section, idx) => (
        <div className="skill-section" key={idx}>
          <div className="section-header">
            <img src={section.image} alt={section.title} className="section-icon" />
            <h2>{section.title}</h2>
          </div>
          <div className="skill-grid">
            {section.skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <h3>{skill.emoji} {skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
