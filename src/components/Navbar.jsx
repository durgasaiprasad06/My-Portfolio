import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsDark(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Training & Internships', path: '/training-internships' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Profile Overview', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '70px',
      background: 'var(--nav-bg)', backdropFilter: 'blur(12px)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'var(--nav-shadow)',
      zIndex: 1000, display: 'flex', alignItems: 'center', transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '-0.03em' }}>
          Portfolio
        </Link>

        {/* Desktop Links */}
        <div style={{ gap: '1rem', display: 'none', transform: 'translateX(20px)' }} className="nav-links">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{ 
                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-secondary)', 
                fontSize: '0.82rem', 
                fontWeight: 600, 
                textDecoration: 'none', 
                whiteSpace: 'nowrap',
                position: 'relative',
                paddingBottom: '2px',
                borderBottom: location.pathname === link.path ? '2px solid rgba(168, 85, 247, 0.6)' : 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} style={{
            background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem'
          }} aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
            background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem'
          }} className="mobile-only">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute', top: '70px', left: 0, width: '100%',
          background: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)',
          display: 'flex', flexDirection: 'column', padding: '1rem',
          boxShadow: 'var(--shadow-md)', maxHeight: 'calc(100vh - 70px)', overflowY: 'auto'
        }}>
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} style={{
              color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)', 
              padding: '0.75rem 0', 
              fontWeight: 600, 
              borderBottom: '1px solid var(--border-color)', 
              textDecoration: 'none',
              backgroundColor: location.pathname === link.path ? 'rgba(168, 85, 247, 0.05)' : 'transparent',
              paddingLeft: location.pathname === link.path ? '0.5rem' : '0'
            }}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
