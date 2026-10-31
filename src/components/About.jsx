import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const skills = [
    { category: 'Cloud & DevOps', items: ['Azure Infrastructure', 'Kubernetes (AKS)', 'Terraform & IaC', 'Docker & Helm', 'CI/CD Pipelines', 'ArgoCD GitOps'] },
    { category: 'Frontend & UI/UX', items: ['React & Vite', 'Framer Motion', 'Three.js & WebGL', 'Apple Design Systems', 'Tailwind & CSS Grid', 'Motion Graphics'] },
    { category: 'Specialized Passions', items: ['FPV Drone Building/Pilot', 'Endurance Mountain Biking', 'Cloud Architecture', 'Spatial UI Design'] }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-badge">Background & Expertise</span>
          <h2 className="section-title">Engineering Meets Aesthetics</h2>
          <p className="section-subtitle">
            Bridging the gap between robust, enterprise-grade cloud architecture and high-end aesthetic precision.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-card story-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3>The Story</h3>
            <p>
              I am <strong>Swarup Ranjan Paul</strong>, a Senior Cloud & DevOps Engineer managing enterprise Azure infrastructure and Kubernetes clusters. Alongside my cloud career, I run <strong>SRPCREATES Designs</strong>, crafting high-end UI/UX and motion graphics.
            </p>
            <p style={{ marginTop: '1rem' }}>
              When I'm not architecting cloud environments or refining React interfaces, you can find me building and piloting custom FPV drones as <em>Wing Lens</em> or tackling grueling endurance mountain biking trails.
            </p>
          </motion.div>

          <div className="skills-column">
            {skills.map((group, idx) => (
              <motion.div
                key={group.category}
                className="about-card skill-group-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h4>{group.category}</h4>
                <div className="skill-tags">
                  {group.items.map(item => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
