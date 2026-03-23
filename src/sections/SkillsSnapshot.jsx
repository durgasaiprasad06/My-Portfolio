import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const SkillsSnapshot = () => {
  const { skills } = portfolioData;

  const renderIcon = (iconStr) => {
    if (iconStr.startsWith('lucide:')) {
      const IconName = iconStr.replace('lucide:', '');
      const LucideIcon = LucideIcons[IconName];
      return LucideIcon ? <LucideIcon size={20} /> : <LucideIcons.Code size={20} />;
    }
    return <i className={`${iconStr} colored`} style={{ fontSize: '1.25rem' }}></i>;
  };

  const renderSkillBox = (title, items, delayOffset) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: delayOffset }}
      className="card" style={{ padding: '1.5rem', boxShadow: '0 0 15px rgba(168, 85, 247, 0.01)', marginBottom: '1.5rem' }}
    >
      <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{title}</h3>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {items.map(skill => (
          <div key={skill.name} style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 0.75rem', borderRadius: '8px',
            background: 'var(--bg-card)', border: '1px solid var(--border-color)',
            fontSize: '0.85rem', color: 'var(--text-secondary)'
          }}>
            {renderIcon(skill.icon)}
            <span style={{ fontWeight: 500 }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="container" id="skills-snapshot" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column' }}>

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ marginBottom: '2.5rem' }}
      >
        <h2 className="section-title text-gradient" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'inline-block' }}>Skills</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>A quick look at my technical stack.</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {renderSkillBox("Languages", skills.languages, 0.1)}
        {renderSkillBox("Tools", skills.tools, 0.2)}
        {renderSkillBox("Libraries", skills.libraries, 0.3)}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
        style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
      >
        <Link to="/skills" className="btn" style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.8rem 1.8rem', borderRadius: '12px',
          backgroundColor: 'transparent', color: 'var(--text-primary)',
          border: '2px solid var(--primary)',
          textDecoration: 'none', fontWeight: 600, fontSize: '1rem',
          transition: 'all 0.3s ease'
        }}>
          View All Skills <ArrowRight size={18} />
        </Link>
      </motion.div>

    </section>
  );
};

export default SkillsSnapshot;
