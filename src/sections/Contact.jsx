import React, { useState } from 'react';
import portfolioData from '../data/portfolio.json';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const { personal } = portfolioData;
  const [btnText, setBtnText] = useState('Send Message');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setBtnText('Sending...');
    
    setTimeout(() => {
      setBtnText('Message Sent!');
      e.target.reset();
      
      setTimeout(() => {
        setBtnText('Send Message');
        setSubmitting(false);
      }, 3000);
    }, 1000);
  };

  const inputStyle = {
    width: '100%', padding: '0.75rem', background: 'var(--bg-main)', border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: '0.875rem',
    outline: 'none', transition: 'var(--transition)'
  };
  
  const labelStyle = { display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' };

  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '32rem', margin: '0 auto' }}>
            Currently open for opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          <div className="card">
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px',
                background: 'var(--bg-alt)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', flexShrink: 0
              }}>
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>Email</h4>
                <a href={`mailto:${personal.email}`} style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.875rem' }}>{personal.email}</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px',
                background: 'var(--bg-alt)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', flexShrink: 0
              }}>
                <Phone size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>Phone</h4>
                <a href={`tel:${personal.phone}`} style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.875rem' }}>{personal.phone}</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px',
                border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)'
              }}>
                <Linkedin size={20} />
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px',
                border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)'
              }}>
                <Github size={20} />
              </a>
            </div>
          </div>

          <form className="card" onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input type="text" id="name" required placeholder="John Doe" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input type="email" id="email" required placeholder="john@example.com" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" rows="4" required placeholder="Your message..." style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', opacity: submitting ? 0.7 : 1 }} disabled={submitting}>
              {btnText} <Send size={16} style={{ marginLeft: '4px' }} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
