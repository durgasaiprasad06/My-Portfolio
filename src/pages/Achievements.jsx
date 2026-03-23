import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap, ExternalLink } from 'lucide-react';
import Modal from '../components/Modal';

const Achievements = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { achievements, hackathons } = portfolioData;

  const allItems = [
    ...achievements.map(a => ({ ...a, type: 'Achievement', icon: <Trophy className="text-primary" size={24} /> })),
    ...hackathons.events.map(h => ({ ...h, type: 'Hackathon', icon: <Zap className="text-secondary" size={24} /> }))
  ];

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '900px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Milestones
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '900px', margin: '0 auto' }}>
          Recognitions and competitive participation that highlight my problem-solving ability.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {allItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10, background: 'var(--bg-main)' }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className="card"
            onClick={() => setSelectedItem(item)}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2rem', 
              background: 'var(--bg-card)', position: 'relative', overflow: 'hidden', cursor: 'pointer',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ 
              width: '3.5rem', height: '3.5rem', borderRadius: '12px', background: 'var(--bg-main)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>
              {item.icon}
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

      <Modal 
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
        subtitle={selectedItem?.type}
        description={selectedItem?.modalContent || selectedItem?.description}
        image=""
        demoLink={selectedItem?.link}
        demoLinkLabel="View Proof"
        date={selectedItem?.date}
      />
    </div>
  );
};

export default Achievements;
