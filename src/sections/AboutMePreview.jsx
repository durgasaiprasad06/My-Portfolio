import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const AboutMePreview = () => {
  const { about } = portfolioData;

  return (
    <section className="container" id="about-preview" style={{ padding: '6rem 0' }}>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', display: 'inline-block' }}>About Me</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>A brief overview of my professional identity and background.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3.5rem', marginBottom: '3rem' }}>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
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

        {/* My Journey */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="card" style={{ padding: '2rem', height: '100%', boxShadow: '0 0 15px rgba(168, 85, 247, 0.05)' }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BarChart3 className="text-primary" /> My Journey
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
            {about.journey}
          </p>
        </motion.div>

      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/about" className="btn" style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.8rem 1.8rem', borderRadius: '12px',
          backgroundColor: 'transparent', color: 'var(--text-primary)',
          border: '2px solid var(--primary)', textDecoration: 'none',
          fontWeight: 600, fontSize: '1rem', transition: 'all 0.3s ease'
        }}>
          View All About Me <ArrowRight size={18} />
        </Link>
      </motion.div>

    </section>
  );
};

export default AboutMePreview;
