import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';
import Modal from '../components/Modal';

const AchievementsPreview = () => {
  const { achievements, hackathons } = portfolioData;
  const [selectedItem, setSelectedItem] = useState(null);

  const combined = [
    ...achievements.map(a => ({ ...a, type: 'Achievement' })),
    ...(hackathons?.events?.map(h => ({ ...h, type: 'Hackathon' })) || [])
  ].slice(0, 3);

  return (
    <section className="container" id="achievements-preview" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ marginBottom: '2.5rem' }}
      >
        <h2 className="section-title text-gradient" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'inline-block' }}>Milestones</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Recognitions highlighting my problem-solving ability.</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
        {combined.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            whileHover={{ x: 10, background: 'var(--bg-main)' }} transition={{ duration: 0.2, delay: index * 0.1 }}
            className="card" onClick={() => setSelectedItem(item)}
            style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2rem',
              background: 'var(--bg-card)', position: 'relative', overflow: 'hidden', cursor: 'pointer',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '12px', background: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {item.type === 'Achievement' ? <Trophy className="text-primary" size={24} /> : <Zap className="text-secondary" size={24} />}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0 }}>{item.title}</h3>
                <span className="badge">{item.date}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                {item.issuer || item.description}
              </p>
            </div>
            <ExternalLink size={16} className="text-muted" style={{ opacity: 0.5 }} />
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/achievements" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.8rem', borderRadius: '12px', backgroundColor: 'transparent', color: 'var(--text-primary)', border: '2px solid var(--primary)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', transition: 'all 0.3s ease' }}>
          View All Milestones <ArrowRight size={18} />
        </Link>
      </motion.div>

      {selectedItem && (
        <Modal
          isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}
          title={selectedItem.title} subtitle={selectedItem.type}
          description={selectedItem.modalContent || selectedItem.description} image=""
          demoLink={selectedItem.link} demoLinkLabel="View Proof" date={selectedItem.date}
        />
      )}
    </section>
  );
};
export default AchievementsPreview;
