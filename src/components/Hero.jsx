import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <ThreeBackground />

      <div className="hero-blur-overlay" />

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge-dot" /> Cloud Engineer & UI/UX Motion Designer
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Engineering the Cloud. <br />
          <span className="gradient-text">Designing the Experience.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Hi, I’m <strong>Swarup Ranjan Paul</strong>. Senior Cloud & DevOps Engineer specializing in enterprise Azure infrastructure & Kubernetes, paired with high-end motion design via SRPCREATES. Also an FPV drone pilot & endurance mountain biker.
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#projects" className="apple-button primary">
            Explore Repository
          </a>
          <a href="#contact" className="apple-button secondary">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-meta-pills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="meta-pill">Azure & Kubernetes</span>
          <span className="meta-pill">React & Framer Motion</span>
          <span className="meta-pill">Wing Lens FPV</span>
        </motion.div>
      </div>
    </section>
  );
}
