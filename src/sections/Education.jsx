import React from 'react';
import portfolioData from '../data/portfolio.json';
import { motion } from 'framer-motion';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((edu, idx) => (
            <motion.div 
              key={edu.id} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card" style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>{edu.degree}</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{edu.duration}</span>
              </div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '1rem' }}>
                {edu.institution}
              </h4>
              <div style={{ 
                fontSize: '0.875rem', display: 'inline-block', background: 'var(--bg-alt)', 
                padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)',
                alignSelf: 'flex-start'
              }}>
                {edu.metricLabel}: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{edu.metricValue}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
