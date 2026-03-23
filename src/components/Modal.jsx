import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, subtitle, description, tags, image, snapshots, snapshotsLinkLabel, hideSnapshotsButton, githubLink, demoLink, demoLinkLabel, date, objectPosition }) => {
  const [isSnapshotView, setIsSnapshotView] = useState(false);
  const [activeSnapshotIndex, setActiveSnapshotIndex] = useState(0);

  // Reset snapshot view when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setIsSnapshotView(false);
      setActiveSnapshotIndex(0);
    }
  }, [isOpen]);

  const nextSnapshot = useCallback(() => {
    if (snapshots && snapshots.length > 0) {
      setActiveSnapshotIndex((prev) => (prev + 1) % snapshots.length);
    }
  }, [snapshots]);

  const prevSnapshot = useCallback(() => {
    if (snapshots && snapshots.length > 0) {
      setActiveSnapshotIndex((prev) => (prev - 1 + snapshots.length) % snapshots.length);
    }
  }, [snapshots]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isSnapshotView) return;
      if (e.key === 'ArrowRight') nextSnapshot();
      if (e.key === 'ArrowLeft') prevSnapshot();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSnapshotView, nextSnapshot, prevSnapshot]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'calc(70px + 1rem) 1rem 1rem 1rem', background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'var(--bg-card)', border: '1px solid var(--border-color)',
            borderRadius: '8px', maxWidth: '900px', width: '100%', maxHeight: '90vh',
            overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
              background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white',
              borderRadius: '50%', width: '36px', height: '36px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>

          {/* Scrollable Container for both Image and Content */}
          <div
            className="hide-modal-scrollbar"
            style={{
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none' /* IE and Edge */
            }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
              .hide-modal-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />
            {/* Hero Image Section / Snapshot Carousel */}
            <div style={{ width: '100%', position: 'relative', flexShrink: 0, background: 'var(--bg-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isSnapshotView ? `snapshot-${activeSnapshotIndex}` : 'main-image'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%', position: 'relative' }}
                >
                  <img 
                    src={isSnapshotView ? snapshots[activeSnapshotIndex].image : image} 
                    alt={isSnapshotView ? snapshots[activeSnapshotIndex].title : title} 
                    style={{ width: '100%', maxHeight: '550px', objectFit: 'contain', background: '#000', objectPosition: 'center' }} 
                  />
                  
                  {isSnapshotView && snapshots && snapshots.length > 1 && (
                    <>
                      {/* Navigation Arrows */}
                      <button
                        onClick={(e) => { e.stopPropagation(); prevSnapshot(); }}
                        style={{
                          position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
                          background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white',
                          borderRadius: '50%', width: '40px', height: '40px', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 11
                        }}
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextSnapshot(); }}
                        style={{
                          position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                          background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white',
                          borderRadius: '50%', width: '40px', height: '40px', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 11
                        }}
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Pagination Indicator */}
                      <div style={{
                        position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
                        background: 'rgba(0,0,0,0.6)', padding: '4px 12px', borderRadius: '20px',
                        color: 'white', fontSize: '0.8rem', fontWeight: 600, zIndex: 11
                      }}>
                        {activeSnapshotIndex + 1} / {snapshots.length}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Fade Overlay (only for main image) */}
              {!isSnapshotView && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '50%',
                  background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 100%)',
                  pointerEvents: 'none'
                }} />
              )}
            </div>

            {/* Content Area */}
            <div style={{ padding: '2rem', paddingTop: image ? '2rem' : '3.5rem' }}>
              {!isSnapshotView && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ flex: 1, minWidth: 0, paddingRight: '1rem' }}>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', wordBreak: 'break-word' }}>{title}</h2>
                    <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1rem' }}>{subtitle}</p>
                    {date && <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{date}</p>}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexShrink: 0, flexWrap: 'wrap' }}>
                    <>
                      {snapshots && snapshots.length > 0 && !hideSnapshotsButton && (
                        <button 
                          onClick={() => setIsSnapshotView(true)} 
                          className="btn btn-primary" 
                          style={{ padding: '0.6rem 1.2rem' }}
                        >
                          {snapshotsLinkLabel || 'Snapshots'} <ExternalLink size={16} />
                        </button>
                      )}
                      {demoLink && (
                        <a href={demoLink} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>
                          {demoLinkLabel || 'Live Demo'} <ExternalLink size={16} />
                        </a>
                      )}
                      {githubLink && (
                        <a href={githubLink} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem' }}>
                          Source <Github size={16} />
                        </a>
                      )}
                    </>
                  </div>
                </div>
              )}

              {isSnapshotView ? (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Description:</h4>
                    <h5 style={{ color: 'var(--accent)', marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 600 }}>
                      {snapshots[activeSnapshotIndex].title}
                    </h5>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
                      {snapshots[activeSnapshotIndex].description}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0, marginTop: '0.25rem' }}>
                    <button 
                      onClick={() => setIsSnapshotView(false)} 
                      className="btn btn-secondary" 
                      style={{ padding: '0.7rem 1.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
                    >
                      <ArrowLeft size={18} /> Back to Details
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                    Description & Learnings
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', whiteSpace: 'pre-line' }}>
                    {description}
                  </p>
                </div>
              )}

              {tags && !isSnapshotView && (
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Technologies / Skills</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {tags.map(tag => (
                      <span key={tag} style={{
                        padding: '0.4rem 1rem', borderRadius: '99px', background: 'var(--bg-main)',
                        border: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.85rem'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
