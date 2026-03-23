import React from 'react';
import portfolioData from '../data/portfolio.json';
import { Database, LineChart, Code, ArrowRight, Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { personal, projects } = portfolioData;

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 0',
        backgroundColor: 'transparent'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '2rem',
          alignItems: 'center'
        }}>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ paddingRight: '2rem', paddingLeft: '0.5rem' }}
          >
            <h1 className="text-gradient" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginTop: '2rem',
              marginBottom: '1rem',
              lineHeight: 1.1
            }}>
              Hi, I'm Tunga <br /> <span style={{ whiteSpace: 'nowrap', color: 'inherit' }}>Durga Sai Prasad</span>
            </h1>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--text-primary)', maxWidth: '1000px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Aspiring Data Analyst | Identifying Patterns & Predicting Outcomes with Precision
            </h2>

            <p style={{ fontSize: '1.125rem', maxWidth: '750px', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              {personal.bio}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                to="/about"
                className="btn"
                style={{
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-main)',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '12px',
                  border: '2px solid var(--border-color)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                Read My Journey <ArrowRight size={18} />
              </Link>

              <a
                href={personal.resume}
                download
                className="btn"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  padding: '0.8rem 1.8rem',
                  borderRadius: '12px',
                  border: '2px solid var(--border-color)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Download size={18} /> Download Resume
              </a>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    border: '2px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-card)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <Github size={20} />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    border: '2px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-card)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image and Decor Wrapper */}
          <div style={{ position: 'relative', height: '100%', minHeight: '500px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '5rem' }}>

            {/* Orange/Yellow Blobs */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                position: 'absolute',
                top: '12%',
                left: '36%',
                width: '80px',
                height: '60px',
                backgroundColor: '#f59e0b',
                borderRadius: '54% 46% 75% 25% / 40% 50% 50% 60%',
                zIndex: 1
              }}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                position: 'absolute',
                top: '27%',
                right: '12%',
                width: '180px',
                height: '180px',
                backgroundColor: '#f59e0b',
                borderRadius: '35% 65% 35% 65% / 54% 39% 61% 46%',
                zIndex: 1
              }}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '25%',
                left: '18%',
                width: '180px',
                height: '150px',
                backgroundColor: '#f59e0b',
                borderRadius: '61% 39% 49% 51% / 44% 53% 47% 56%',
                zIndex: 1
              }}
            />

            {/* Scribbles */}
            <svg style={{ position: 'absolute', top: '10%', left: '15%', zIndex: 2, width: '60px', height: '60px' }} viewBox="0 0 100 100" fill="none" stroke="var(--text-secondary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
              <path d="M 80 20 C 60 0, 40 40, 20 80 M 20 80 L 40 80 M 20 80 L 20 60" />
            </svg>
            <svg style={{ position: 'absolute', top: '5%', right: '7%', zIndex: 2, width: '80px', height: '80px' }} viewBox="0 0 100 100" fill="none" stroke="var(--text-secondary)" strokeWidth="3" strokeLinecap="round" opacity="0.6">
              <path d="M 10 30 Q 30 10, 50 40 T 90 20 M 60 10 L 75 35 M 40 5 L 50 25" />
            </svg>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: 'relative',
                top: '-45px',
                left: '-50px',
                zIndex: 3,
                width: '55%',
                maxWidth: '280px',
                height: 'auto',
                display: 'block'
              }}
            >
              <div style={{
                background: 'var(--accent-gradient)',
                padding: '4px',
                borderRadius: '28px',
                width: '100%',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.25), var(--shadow-card)',
                display: 'block'
              }}>
                <img src={personal.avatar} alt={personal.name} style={{
                  width: '100%', height: 'auto', objectFit: 'contain', display: 'block',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  filter: 'brightness(0.85) contrast(1)'
                }} />
              </div>
            </motion.div>


            {/* Customers Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: '25%', right: '2%',
                background: 'var(--bg-card)', backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-color)',
                padding: '0.8rem 1.2rem', borderRadius: '12px',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.25), var(--shadow-md)', zIndex: 10,
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Projects Completed</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', position: 'relative', width: '70px', height: '28px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--bg-card)', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0 }}>
                      <LineChart size={14} color="white" />
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--bg-card)', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '15px' }}>
                      <Database size={14} color="white" />
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--bg-card)', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '30px' }}>
                      <Code size={14} color="white" />
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--bg-card)', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold', position: 'absolute', left: '45px' }}>
                      {projects?.length || '4'}+
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          zIndex: 20
        }}
        initial={{ x: '-50%' }}
        animate={{ y: [0, 10, 0], x: '-50%' }}
        transition={{ 
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
        onClick={() => {
          const aboutSection = document.getElementById('about-section');
          if (aboutSection) {
            const yOffset = -80; // offset for fixed header if any
            const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
      >
        <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
          Scroll Down
        </span>
        <ChevronDown size={28} strokeWidth={2.5} color="var(--text-primary)" />
      </motion.div>
    </section>
  );
};

export default Hero;
