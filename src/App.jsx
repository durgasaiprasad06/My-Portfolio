import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

// Scroll to top component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import TrainingInternships from './pages/TrainingInternships';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <div className="bg-atmosphere">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
      </div>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/training-internships" element={<PageTransition><TrainingInternships /></PageTransition>} />
            <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
            <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
            <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer style={{
        borderTop: '1px solid var(--border-color)', padding: '2rem 0',
        background: 'var(--bg-card)', backdropFilter: 'blur(10px)', color: 'var(--text-muted)', fontSize: '0.875rem', textAlign: 'center'
      }}>
        <div className="container">
          <p>&copy; 2026 Tunga Durga Sai Prasad. Built with precision.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
