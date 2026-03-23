import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const EducationPreview = () => {
  const { education } = portfolioData;

  return (
    <section className="container" id="education-preview" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ marginBottom: '2.5rem' }}
      >
        <h2 className="section-title text-gradient" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'inline-block' }}>Education</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>My academic background.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="card"
            style={{
              padding: '2rem', background: 'var(--bg-card)',
              border: '1px solid var(--border-color)', borderRadius: '16px',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(110, 86, 207, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0
              }}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.2rem', lineHeight: 1.3 }}>{item.degree}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>{item.institution}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Calendar size={16} /><span>{item.duration}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={16} /><span>{item.location}</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.metricLabel}</span>
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>{item.metricValue}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default EducationPreview;
