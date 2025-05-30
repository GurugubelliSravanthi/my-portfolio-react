import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSpringboot,
  SiVercel,
  SiGitlab,
} from "react-icons/si";
import { DiApple } from "react-icons/di";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { icon: <FaJs className={styles.jsIcon} />, title: "JavaScript" },
        { icon: <FaPython className={styles.pythonIcon} />, title: "Python" },
        { icon: <FaJava className={styles.javaIcon} />, title: "Java" },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { icon: <FaHtml5 className={styles.htmlIcon} />, title: "HTML5" },
        { icon: <FaCss3Alt className={styles.cssIcon} />, title: "CSS3" },
        {
          icon: <FaBootstrap className={styles.bootstrapIcon} />,
          title: "Bootstrap",
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { icon: <FaReact className={styles.reactIcon} />, title: "React" },
        {
          icon: <SiSpringboot className={styles.springbootIcon} />,
          title: "Spring Boot",
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          icon: <SiMongodb className={styles.mongodbIcon} />,
          title: "MongoDB",
        },
        { icon: <SiMysql className={styles.mysqlIcon} />, title: "MySQL" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { icon: <FaGitAlt className={styles.gitIcon} />, title: "Git" },
        {
          icon: <SiPostman className={styles.postmanIcon} />,
          title: "Postman",
        },
        { icon: <SiVercel className={styles.vercelIcon} />, title: "Vercel" },
        { icon: <DiApple className={styles.appleIcon} />, title: "macOS" },
        { icon: <SiGitlab className={styles.gitlabIcon} />, title: "GitLab" },
      ],
    },
  ];

  return (
    <div className={styles.skillsPage}>
      <div className={styles.skillsContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My Skills</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.categoriesContainer}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={styles.categorySection}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    className={styles.skillCard}
                    key={skillIndex}
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.2 + skillIndex * 0.1
                      }s`,
                    }}
                  >
                    <div className={styles.skillIcon}>{skill.icon}</div>
                    <h4 className={styles.skillTitle}>{skill.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.floatingElements}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.floatingCircle}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
