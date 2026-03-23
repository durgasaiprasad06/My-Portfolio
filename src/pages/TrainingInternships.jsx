import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Calendar, ExternalLink, Award } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import Modal from '../components/Modal';

const TrainingInternships = () => {
  const { training, internships } = portfolioData;
  const [selectedItem, setSelectedItem] = useState(null);

  const Section = ({ title, items, icon: Icon, color }) => (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px', background: `${color}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: color
        }}>
          <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>{title}</h3>
      </div>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="card"
            onClick={() => setSelectedItem({ ...item, type: title.slice(0, -1) })}
            style={{
              padding: '2rem',
              borderLeft: `4px solid ${color}`,
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: color, fontWeight: 600 }}>{item.company || item.provider}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={16} />
                  <span>{item.duration}</span>
                </div>
                {item.link && (
                  <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    View Proof <ExternalLink size={14} />
                  </div>
                )}
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3.5rem', display: 'inline-block', marginBottom: '1rem' }}>
          Training & Internships
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
          Hands-on professional experience and specialized skill acquisition.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Section title="Internships" items={internships} icon={Briefcase} color="#6366f1" />
        <Section title="Training" items={training} icon={BookOpen} color="#2dd4bf" />
      </div>

      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          subtitle={selectedItem.company || selectedItem.provider}
          description={selectedItem.modalContent || selectedItem.description}
          image={selectedItem.image}
          demoLink={selectedItem.link}
          demoLinkLabel="Verify Credential"
          date={selectedItem.duration}
        />
      )}
    </div>
  );
};

export default TrainingInternships;
