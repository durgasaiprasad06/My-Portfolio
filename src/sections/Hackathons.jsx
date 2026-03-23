import React from 'react';
import portfolioData from '../data/portfolio.json';
import { motion } from 'framer-motion';

const Hackathons = () => {
  const { hackathons } = portfolioData;

  return (
    <section id="hackathons" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Competitive Programming & Hackathons</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{
              fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5,
              borderLeft: '4px solid var(--accent-primary)', paddingLeft: '1.5rem'
            }}>
              {hackathons.summary}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card" style={{ position: 'relative' }}
          >
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Events & Participation</h3>
            
            <div style={{ position: 'relative' }}>
              {hackathons.events.map((event, idx) => (
                <div key={idx} style={{
                  position: 'relative', paddingLeft: '2rem', paddingBottom: idx === hackathons.events.length - 1 ? 0 : '1.5rem',
                  borderLeft: idx === hackathons.events.length - 1 ? '2px solid transparent' : '2px solid var(--border-color)'
                }}>
                  <div style={{
                    position: 'absolute', left: '-6px', top: 0, width: '10px', height: '10px',
                    background: 'var(--bg-main)', border: '2px solid var(--border-hover)', borderRadius: '50%'
                  }}></div>
                  <div style={{ marginTop: '-4px' }}>
                    <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{event.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hackathons;
