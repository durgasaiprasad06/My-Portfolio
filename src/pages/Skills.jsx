import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
  const { skills } = portfolioData;
  const categories = ['All Skills', ...Object.keys(skills).map(k => k.charAt(0).toUpperCase() + k.slice(1))];
  const [activeTab, setActiveTab] = useState('All Skills');

  // Flatten skills for filtering
  const allSkillsList = Object.entries(skills).flatMap(([category, items]) => 
    items.map(skill => ({ ...skill, category: category.charAt(0).toUpperCase() + category.slice(1) }))
  );

  const filteredSkills = activeTab === 'All Skills' 
    ? allSkillsList 
    : allSkillsList.filter(skill => skill.category === activeTab);

  const renderIcon = (iconStr) => {
    if (iconStr.startsWith('lucide:')) {
      const IconName = iconStr.replace('lucide:', '');
      const LucideIcon = LucideIcons[IconName];
      return LucideIcon ? <LucideIcon size={24} /> : <LucideIcons.Code size={24} />;
    }
    return <i className={`${iconStr} colored`}></i>;
  };

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Technical Arsenal
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          A specialized stack optimized for data extraction, analysis, and dashboard.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              background: activeTab === category ? 'var(--primary)' : 'var(--bg-card)',
              color: activeTab === category ? '#ffffff' : 'var(--text-secondary)',
              boxShadow: activeTab === category ? '0 4px 15px rgba(110, 86, 207, 0.4)' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.05)',
                borderColor: 'var(--accent-primary)'
              }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="card"
              style={{ 
                padding: '1.5rem', 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border-color)',
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.02)' // Further reduced ambient glow
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div style={{ 
                  width: '45px', height: '45px', borderRadius: '10px', 
                  background: 'var(--icon-box-bg)', 
                  boxShadow: 'inset 0 0 10px rgba(168, 85, 247, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0,
                  color: 'var(--text-primary)'
                }}>
                  {renderIcon(skill.icon)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>{skill.name}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 700 }}>{skill.level}%</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    {skill.category}
                  </span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div style={{ 
                width: '100%', height: '6px', background: 'var(--border-color)', 
                borderRadius: '10px', overflow: 'hidden',
                border: '1px solid rgba(168, 85, 247, 0.1)'
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
                  style={{ 
                    height: '100%', 
                    background: 'linear-gradient(to right, #a855f7, #d946ef)',
                    boxShadow: '0 0 8px rgba(217, 70, 239, 0.15)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default Skills;
