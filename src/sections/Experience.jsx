import React from 'react';
import portfolioData from '../data/portfolio.json';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Internships & Work Experience</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card"
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                  <h4 style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 500, marginTop: '0.25rem' }}>
                    {exp.organization}
                  </h4>
                </div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{exp.duration}</span>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: exp.certificateLink ? '1rem' : '0' }}>{exp.description}</p>
                {exp.certificateLink && (
                  <a href={exp.certificateLink} target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', padding: '0.35rem 0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                    View Certificate <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
