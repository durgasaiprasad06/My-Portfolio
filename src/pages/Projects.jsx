import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import { ExternalLink, Database, BarChart3, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';

const categories = ['All Projects', 'Python', 'SQL', 'Dashboard'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  const filteredProjects = activeTab === 'All Projects'
    ? projects
    : projects.filter(p => p.tags.some(tag => tag.toUpperCase() === activeTab.toUpperCase()) || p.title.toUpperCase().includes(activeTab.toUpperCase()));

  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '3rem', display: 'inline-block', marginBottom: '1rem' }}>
          Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          A showcase of my technical work, from data analytics and visualization to full-stack development and system design.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              background: activeTab === category ? 'var(--primary)' : 'var(--bg-card)',
              color: activeTab === category ? '#ffffff' : 'var(--text-secondary)',
              boxShadow: activeTab === category ? '0 4px 15px rgba(110, 86, 207, 0.4)' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card project-card"
              onClick={() => setSelectedProject(project)}
              style={{
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                background: 'var(--bg-card)', cursor: 'pointer',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '0',
                height: '100%',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
              }}
            >
              {/* Image Area with Badge */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#000', borderBottom: '1px solid var(--border-color)' }}>
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-alt)', color: 'var(--primary)' }}>
                    {index % 2 === 0 ? <BarChart3 size={48} /> : <Database size={48} />}
                  </div>
                )}
                {/* Bottom-Left Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(8px)',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '99px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  zIndex: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {project.tags[0] || 'PROJECT'}
                </div>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  lineHeight: 1.4
                }}>{project.title}</h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600,
                      background: 'rgba(110, 86, 207, 0.1)', color: 'var(--primary)', border: '1px solid rgba(110, 86, 207, 0.2)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--bg-alt)',
                  borderTop: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.3s ease'
                }}
                className="card-action-bar"
              >
                <Search size={14} style={{ opacity: 0.8 }} />
                View Project Insights
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        subtitle={selectedProject?.tags[0] || "Data Project"}
        description={selectedProject?.modalContent || selectedProject?.description}
        tags={selectedProject?.tags}
        image={selectedProject?.image}
        snapshots={selectedProject?.snapshots}
        snapshotsLinkLabel={selectedProject?.id === 'p4' ? 'Live Demo' : 'Snapshots'}
        githubLink={selectedProject?.githubLink}
        demoLink={selectedProject?.demoLink}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        .project-card:hover .card-action-bar {
          background: rgba(110, 86, 207, 0.15) !important;
          color: #fff !important;
        }
      `}} />
    </div>
  );
};

export default Projects;
