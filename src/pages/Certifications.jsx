import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import Modal from '../components/Modal';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Certifications
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
          Validating technical expertise through industry-recognized credentials and continuous learning.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card certification-card"
            onClick={() => setSelectedCert(cert)}
            style={{ 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              position: 'relative',
              height: '100%',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              padding: '0' // Override global .card padding
            }}
          >
            {/* Image Area with Badge */}
            <div style={{ position: 'relative', height: '230px', overflow: 'hidden', background: '#000', border: '1px solid var(--border-color)', borderRadius: '16px 16px 0 0' }}>
              <motion.img 
                src={cert.image} 
                alt={cert.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Top-Left Badge */}
              <div style={{ 
                position: 'absolute', 
                top: '16px', 
                left: '16px', 
                background: '#6e56cf', 
                color: 'white',
                padding: '5px 14px',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 2,
                textTransform: 'uppercase'
              }}>
                {cert.tag || 'CERTIFIED'}
              </div>
            </div>

            {/* Title and Info Area */}
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-primary)', 
                fontWeight: 700,
                marginBottom: '1rem', 
                lineHeight: 1.4,
                minHeight: '3rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {cert.title}
              </h3>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginTop: 'auto'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '6px', 
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    overflow: 'hidden'
                  }}>
                    <img src={cert.logo} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
                    {cert.issuer}
                  </span>
                </div>
                
                <span style={{ color: '#00a3ff', fontSize: '0.85rem', fontWeight: 700 }}>
                  {cert.date}
                </span>
              </div>
            </div>

            <div
              style={{
                width: '100%',
                padding: '1rem',
                background: 'var(--bg-alt)',
                borderTop: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                transition: 'all 0.3s ease'
              }}
              className="card-action-bar"
            >
              <ExternalLink size={14} style={{ opacity: 0.8 }} />
              View Details & Archive
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <Modal 
          isOpen={!!selectedCert} 
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          subtitle={selectedCert.issuer}
          description={selectedCert.modalContent}
          image={selectedCert.image}
          demoLink={selectedCert.link}
          demoLinkLabel="Verify Credential"
          date={selectedCert.date}
        />
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .certification-card:hover .card-action-bar {
          background: rgba(110, 86, 207, 0.15) !important;
          color: #fff !important;
        }
      `}} />
    </div>
  );
};

export default Certifications;
