'use client'
import React, { useState } from 'react';

const ContactPage = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const contactSections = [
    {
      id: 'general',
      title: 'General Inquiries',
      email: 'contact@newsflashpro.com',
      icon: '💬',
      description: 'For questions about NewsFlashPro, our reporting, partnerships, or the website itself',
      details: 'We read every message, and while we can\'t always respond immediately, we promise it will land with a real editor who cares.'
    },
    {
      id: 'tips',
      title: 'Story Tips & Leads',
      email: 'tips@newsflashpro.com',
      icon: '💡',
      description: 'If you have a tip, an idea for a story, or documents that could inform our reporting',
      details: 'We take tips seriously. If you want to remain anonymous, we respect that. Confidentiality is part of how we operate — your safety and trust come first.'
    },
    {
      id: 'corrections',
      title: 'Corrections & Clarifications',
      email: 'corrections@newsflashpro.com',
      icon: '🔍',
      description: 'Mistakes happen. When they do, we own them and fix them fast',
      details: 'We\'ll investigate and, if necessary, update the story promptly. Transparency isn\'t optional — it\'s part of what makes independent journalism work.'
    }
  ];

  return (
    <>


      <div className="contact-hero py-5 mb-5">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
                <p className="lead mb-0">
                  Real people. Real responses. Your voice matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <div className="intro-section p-4">
              <p className="lead mb-3">
                We're a small, independent newsroom, and we run <span className="highlight-text">NewsFlashPro</span> entirely online. That means we don't have a big office or a call center — but we do have real people behind every email.
              </p>
              <p className="mb-0">
                We want to hear from you. Whether you have a tip, a question, feedback on a story, or a correction to report, your voice matters. Journalism works best when it's a conversation, not a one-way broadcast.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {contactSections.map((section, index) => (
            <div key={section.id} className="col-lg-4">
              <div 
                className={`card contact-card ${activeCard === section.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(section.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-body p-4 text-center">
                  <div className="contact-icon">
                    {section.icon}
                  </div>
                  
                  <h3 className="h4 mb-3 text-dark">{section.title}</h3>
                  
                  <p className="text-muted mb-3">
                    {section.description}
                  </p>
                  
                  <a 
                    href={`mailto:${section.email}`}
                    className="email-button mb-3"
                  >
                    📧 {section.email}
                  </a>
                  
                  <div className="details-text p-3 mt-3">
                    <small>{section.details}</small>  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <div className="row">
          <div className="col-12">
            <h2 className="section-title h3 text-center">Connect on Social Media</h2>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="social-section p-4 text-center">
              <p className="lead mb-4 text-muted">
                We also engage with readers on social platforms. Follow, comment, or message us there — your feedback shapes our reporting.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center">
                <a 
                  href="https://twitter.com/ProNewsfla83766" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <span className="social-icon">🐦</span>
                  @ProNewsfla83766
                </a>
                
                <a 
                  href="https://instagram.com/newsflashpro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <span className="social-icon">📸</span>
                  @newsflashpro
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="bg-light p-4 rounded">
              <h3 className="h5 mb-3 text-dark">Response Time</h3>
              <p className="text-muted mb-0">
                Every message we get is read by someone on the team, and we do our best to respond as quickly as possible. While we can't always reply immediately, we promise your message will reach a real person who cares about your input.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 mt-5 ">

      </div>
    </>
  );
};

export default ContactPage;