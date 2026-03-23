import React from 'react';
import portfolioData from '../data/portfolio.json';
import { Award, Trophy, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const { certifications, achievements } = portfolioData;

  const ListItem = ({ title, subtitle, link }) => (
    <li style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
      <span style={{ position: 'absolute', left: 0, color: 'var(--border-color)', fontSize: '1.25rem', lineHeight: 1 }}>•</span>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" style={{ fontWeight: 500, color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
          {title} <ExternalLink size={14} />
        </a>
      ) : (
        <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{title}</span>
      )}
      {subtitle && <><br /><span style={{ color: 'var(--text-muted)' }}>{subtitle}</span></>}
    </li>
  );

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
              <Award className="header-icon" />
              <h3 style={{ fontSize: '1.125rem', margin: 0, color: 'var(--text-primary)' }}>Certifications</h3>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {certifications.map((cert, idx) => (
                <ListItem key={idx} title={cert.title} subtitle={`— ${cert.issuer}`} link={cert.link} />
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
              <Trophy className="header-icon" />
              <h3 style={{ fontSize: '1.125rem', margin: 0, color: 'var(--text-primary)' }}>Achievements</h3>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {achievements.map((ach, idx) => (
                <ListItem key={idx} title={ach.title} subtitle={ach.issuer} link={ach.link} />
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
