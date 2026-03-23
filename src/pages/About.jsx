import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, BarChart3, Search, Lightbulb } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const { about } = portfolioData;

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="section-title text-center text-gradient" style={{ marginBottom: '3rem', fontSize: '2.5rem', display: 'inline-block' }}>About Me</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3.5rem' }}>

        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="card" style={{ padding: '2rem', boxShadow: '0 0 15px rgba(168, 85, 247, 0.05)' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Zap className="text-primary" /> Quick Facts
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {about.quickFacts.map((fact, i) => (
                <li key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {fact}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* When I'm Not Coding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="card" style={{ padding: '2rem', boxShadow: '0 0 15px rgba(168, 85, 247, 0.05)' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Lightbulb className="text-secondary" /> When I'm Not Coding
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {about.notCoding.map((interest, i) => (
                <li key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="card" style={{ padding: '2rem', height: '100%', boxShadow: '0 0 15px rgba(168, 85, 247, 0.05)' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BarChart3 className="text-primary" /> My Journey
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
              {about.journey}
            </p>
          </motion.div>

          {/* My Approach */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="card" style={{ padding: '2rem', height: '100%', boxShadow: '0 0 15px rgba(168, 85, 247, 0.05)' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Search className="text-secondary" /> My Approach
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
              {about.approach}
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default About;
