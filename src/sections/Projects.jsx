import React from 'react';
import portfolioData from '../data/portfolio.json';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const { projects } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section id="projects" className="section relative">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <h2 className="section-title">Featured Projects</h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '9999px', fontWeight: 500,
                      background: project.accent ? 'rgba(0, 120, 212, 0.1)' : 'var(--bg-alt)',
                      color: project.accent ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      border: `1px solid ${project.accent ? 'rgba(0, 120, 212, 0.2)' : 'var(--border-color)'}`
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
              </div>
              
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
                <a href={project.githubLink} className="btn-secondary" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.875rem', fontWeight: 500, border: 'none', padding: 0
                }}>
                  <Github size={16} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
