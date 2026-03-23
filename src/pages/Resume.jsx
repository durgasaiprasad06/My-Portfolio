import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Code, User, ChevronRight } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('Skill Summary');
  const { education, skills, personal } = portfolioData;

  const tabs = [
    { id: 'Skill Summary', icon: <Code size={18} /> },
    { id: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'Personal Info', icon: <User size={18} /> }
  ];

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1000px' }}>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Profile Overview
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          My professional and educational trajectory at a glance.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>

        {/* Left Side: Tabs Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.2rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                textAlign: 'left',
                transition: 'all 0.3s ease',
                background: activeTab === tab.id ? 'var(--primary)' : 'var(--bg-card)',
                color: activeTab === tab.id ? 'var(--active-tab-text)' : 'var(--text-secondary)',
                boxShadow: activeTab === tab.id ? '0 4px 15px rgba(110, 86, 207, 0.4)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'inherit' }}>
                <span style={{ display: 'flex', color: 'inherit' }}>{tab.icon}</span>
                {tab.id}
              </div>
              <ChevronRight size={16} color="currentColor" />
            </button>
          ))}
        </div>

        {/* Right Side: Tab Content */}
        <div style={{ minHeight: '400px' }}>
          <AnimatePresence mode="wait">

            {activeTab === 'Skill Summary' && (
              <motion.div key="Skills" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>Technical Stack</h3>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {Object.entries(skills).map(([category, items], i) => (
                    <div key={i} className="card" style={{ 
                      padding: '1.5rem',
                      boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
                      border: '1px solid rgba(168, 85, 247, 0.35)'
                    }}>
                      <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', textTransform: 'capitalize' }}>
                        {category}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                        {Array.isArray(items) ? items.map(t => t.name || t).join(', ') : ''}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Education' && (
              <motion.div key="Education" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>Education</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {education.map((edu, idx) => (
                    <div key={idx} className="card" style={{ 
                      padding: '2rem',
                      boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
                      border: '1px solid rgba(168, 85, 247, 0.35)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                          <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                          <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{edu.institution}</p>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{edu.location}</p>
                        </div>
                        <span className="badge" style={{ alignSelf: 'flex-start' }}>{edu.duration}</span>
                      </div>
                      <p style={{ margin: 0 }}>
                        {edu.metricLabel}: <strong style={{ color: 'var(--primary)' }}>{edu.metricValue}</strong>
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Personal Info' && (
              <motion.div key="Personal" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>Identity</h3>
                <div className="card" style={{ 
                  padding: '2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.25rem',
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
                  border: '1px solid rgba(168, 85, 247, 0.35)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Name</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{personal.name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Title</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{personal.title}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Resume</span>
                    <a href={personal.resume} download="Sai_Prasad_Resume.pdf" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Download PDF</a>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Resume;
