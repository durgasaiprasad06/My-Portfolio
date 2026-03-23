import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Loader2 } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const ContactPreview = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="container" id="contact-preview" style={{ padding: '6rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'inline-block' }}>
          Contact
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Establish a secure uplink to discuss data insights and collaborative projects.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card" style={{ padding: '2rem', background: '#0f172a', border: '1px solid #1e293b', boxShadow: '0 0 40px rgba(56, 189, 248, 0.1)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fbbf24' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', marginLeft: '0.5rem', fontFamily: 'monospace' }}>sai@data-analyst: ~</span>
            </div>

            <h3 style={{ color: '#f8fafc', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Contact <span style={{ color: '#38bdf8' }}>•</span> EndPoints</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</p>
                  <p style={{ margin: 0, color: '#f8fafc', fontWeight: 500 }}>{personal.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone Channel</p>
                  <p style={{ margin: 0, color: '#f8fafc', fontWeight: 500 }}>{personal.phone}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Social Clusters</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[
                  { icon: <Github size={20} />, link: personal.github, color: '#ffffff' },
                  { icon: <Linkedin size={20} />, link: personal.linkedin, color: '#8b5cf6' },
                  { icon: <Mail size={20} />, link: `mailto:${personal.email}`, color: '#ec4899' }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" style={{ 
                    width: '44px', height: '44px', borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: social.color, transition: 'all 0.3s ease', textDecoration: 'none'
                  }}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={{
                    padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  style={{
                    padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Inquiry"
                required
                style={{
                  padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Describe your project..."
                required
                style={{
                  padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)', color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.3s',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              ></textarea>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={status === 'sending'}
                style={{ 
                  padding: '1rem 2.5rem',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  minWidth: '200px'
                }}
              >
                {status === 'sending' ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : status === 'success' ? (
                  <>Payload Delivered <CheckCircle size={18} /></>
                ) : (
                  <>Push Updates <Send size={18} /></>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;
