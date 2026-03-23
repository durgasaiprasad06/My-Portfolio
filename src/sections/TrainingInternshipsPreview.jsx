import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';
import Modal from '../components/Modal';

const TrainingInternshipsPreview = () => {
  const { training, internships } = portfolioData;
  const [selectedItem, setSelectedItem] = useState(null);

  const combined = [
    ...internships.map(i => ({ ...i, type: 'Internship', icon: Briefcase, color: '#6366f1' })),
    ...training.map(t => ({ ...t, type: 'Training', icon: BookOpen, color: '#2dd4bf' }))
  ].slice(0, 3);

  return (
    <section className="container" id="training-internships-preview" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ marginBottom: '2.5rem' }}
      >
        <h2 className="section-title text-gradient" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'inline-block' }}>Training & Internships</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>A collection of my training and internship work reflecting my learning, adaptability, and professional development.</p>
      </motion.div>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
        {combined.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="card" onClick={() => setSelectedItem(item)}
            style={{ padding: '2rem', borderLeft: `4px solid ${item.color}`, cursor: 'pointer', position: 'relative', transition: 'all 0.3s ease' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${item.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{item.title}</h4>
                  <p style={{ color: item.color, fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>{item.company || item.provider}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={16} /><span>{item.duration}</span>
                </div>
                {item.link && (
                  <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    View Proof <ExternalLink size={14} />
                  </div>
                )}
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/training-internships" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.8rem', borderRadius: '12px', backgroundColor: 'transparent', color: 'var(--text-primary)', border: '2px solid var(--primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', transition: 'all 0.3s ease' }}>
          View All Training & Internships <ArrowRight size={18} />
        </Link>
      </motion.div>

      {selectedItem && (
        <Modal
          isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}
          title={selectedItem.title} subtitle={selectedItem.company || selectedItem.provider}
          description={selectedItem.modalContent || selectedItem.description} image={selectedItem.image}
          demoLink={selectedItem.link} demoLinkLabel="Verify Credential" date={selectedItem.duration}
        />
      )}
    </section>
  );
};
export default TrainingInternshipsPreview;
