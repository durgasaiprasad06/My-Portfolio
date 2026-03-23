import React from 'react';
import portfolioData from '../data/portfolio.json';
import { motion } from 'framer-motion';

const Skills = () => {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, categoryLabel, items, isSoft }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '2rem' }}
    >
      <h3 style={{
        fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)',
        display: 'flex', alignItems: 'center', gap: '0.75rem'
      }}>
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {isSoft ?
          items.map((skill, idx) => (
            <div key={idx} style={{
              display: 'inline-flex', alignItems: 'center', fontSize: '1rem', padding: '0.75rem 1rem',
              background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px',
              color: 'var(--text-primary)', fontWeight: 500
            }}>
              {skill}
            </div>
          ))
          :
          items.map((skill, idx) => (
            <motion.div key={idx} 
              whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(168, 85, 247, 0.02)' }}
              style={{
                display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-color)', borderRadius: '16px',
                transition: 'var(--transition)'
              }}
            >
              {/* Top Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {/* Icon Box */}
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px', 
                    background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: 'inset 0 0 10px rgba(168, 85, 247, 0.2)'
                  }}>
                    {skill.icon.startsWith('lucide:') ? (
                      <span style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>📊</span>
                    ) : (
                      <i className={`${skill.icon} colored`} style={{ fontSize: '1.75rem' }}></i>
                    )}
                  </div>
                  {/* Name & Category */}
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{skill.name}</h4>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {categoryLabel}
                    </span>
                  </div>
                </div>
                {/* Percentage */}
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  style={{ height: '100%', background: 'var(--accent-gradient)', borderRadius: '3px' }}
                />
              </div>
            </motion.div>
          ))
        }
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          <SkillCategory title="Programming Languages" categoryLabel="LANGUAGES" items={skills.languages} />
          <SkillCategory title="Web Technologies" categoryLabel="WEB DEV" items={skills.web} />
          <SkillCategory title="Python Libraries" categoryLabel="LIBRARIES" items={skills.libraries} />
          <SkillCategory title="Data Tools" categoryLabel="TOOLS" items={skills.tools} />
          <SkillCategory title="Databases" categoryLabel="DATABASES" items={skills.databases} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
