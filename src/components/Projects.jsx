import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Enterprise Azure Cloud Architecture',
    category: 'Cloud & DevOps',
    description: 'High-availability Kubernetes clusters, automated GitOps pipelines, and zero-trust security hardening on Azure.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    pdfUrl: '#',
    tags: ['Azure', 'Kubernetes', 'Terraform', 'CI/CD']
  },
  {
    id: 2,
    title: 'SRPCREATES Design & Motion System',
    category: 'UI/UX & Motion',
    description: 'A comprehensive Apple-grade design language system focused on fluid micro-interactions and high-end aesthetics.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    pdfUrl: '#',
    tags: ['React', 'Framer Motion', 'UI/UX', 'Design Systems']
  },
  {
    id: 3,
    title: 'Wing Lens - FPV Drone Telemetry',
    category: 'Hardware & Embedded',
    description: 'Custom high-speed FPV quadcopter builds with real-time OSD telemetry and cinematic stabilization workflows.',
    thumbnail: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop',
    pdfUrl: '#',
    tags: ['FPV', 'Telemetry', 'Hardware', 'Betaflight']
  },
  {
    id: 4,
    title: 'Automated Multi-Cloud GitOps Engine',
    category: 'DevOps & Tooling',
    description: 'ArgoCD-driven deployment orchestration supporting enterprise scale multi-region Kubernetes clusters.',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    pdfUrl: '#',
    tags: ['ArgoCD', 'Docker', 'Helm', 'Azure DevOps']
  },
  {
    id: 5,
    title: 'Immersive 3D Portfolio Experience',
    category: 'Creative Tech',
    description: 'Interactive WebGL particle systems and immersive spatial UI built with Three.js and React.',
    thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop',
    pdfUrl: '#',
    tags: ['Three.js', 'WebGL', 'Shaders', 'React']
  },
  {
    id: 6,
    title: 'Endurance Mountain Biking Data Hub',
    category: 'Analytics & IoT',
    description: 'Performance telemetry tracking, biometric monitoring dashboards, and route optimization analysis.',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    pdfUrl: '#',
    tags: ['IoT', 'Analytics', 'Dashboards', 'React']
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cloud & DevOps', 'UI/UX & Motion', 'Hardware & Embedded', 'Creative Tech'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const handleCardClick = (pdfUrl, title) => {
    // In production, this opens or downloads the associated PDF case study document
    alert(`Opening project case study PDF for: ${title}\n(PDF link: ${pdfUrl})`);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-badge">Repository</span>
          <h2 className="section-title">Featured Projects & Case Studies</h2>
          <p className="section-subtitle">
            Explore enterprise cloud architectures, high-end motion design systems, and custom hardware builds. Click any card to access its technical PDF documentation.
          </p>

          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div className="projects-grid" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => handleCardClick(project.pdfUrl, project.title)}
            >
              <div className="project-thumbnail-wrapper">
                <img src={project.thumbnail} alt={project.title} className="project-thumbnail" loading="lazy" />
                <div className="project-overlay">
                  <span className="pdf-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    View Project PDF
                  </span>
                </div>
                <span className="project-category-tag">{project.category}</span>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
