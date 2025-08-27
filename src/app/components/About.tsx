import React from 'react';

const AboutPage = () => {
  return (
    <>
      <div className="about-hero py-5 mb-5">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">About NewsFlashPro</h1>
                <p className="lead mb-0">
                  A newsroom without walls. No corporate owners. Just journalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="intro-text mb-4">
              We're <span className="text-highlight">NewsFlashPro</span>, a newsroom without walls. No skyscraper office, no corporate owners. Just a handful of journalists and editors working online from different places, tied together by one thing — the belief that news should be reported straight.
            </div>
            
            <div className="body-text">
              <p>
                This project began as a conversation between reporters who were tired of watching important stories get buried under clickbait, opinion, or press releases disguised as news. We didn't want to build another echo chamber. We wanted to create a space where facts come first and readers can decide for themselves what matters.
              </p>
              
              <p>
                We write, edit, and argue over drafts across time zones. Some of us are in cities, some in small towns. We don't all see the world the same way, and that's the point — the reporting gets sharper when you're challenged by your own team.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-title h3">What We Stand For</h2>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-4">
            <div className="card principle-card">
              <div className="card-body p-4">
                <div className="principle-icon">
                  <span>✓</span>
                </div>
                <h3 className="h5 mb-3 text-dark">Accuracy Over Speed</h3>
                <p className="text-muted mb-0">
                  We believe in getting it right, not getting it first. Every fact is checked, every source is verified before we publish.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card principle-card">
              <div className="card-body p-4">
                <div className="principle-icon">
                  <span>💡</span>
                </div>
                <h3 className="h5 mb-3 text-dark">Clarity Over Jargon</h3>
                <p className="text-muted mb-0">
                  Complex stories deserve clear explanations. We cut through the noise to deliver news you can understand and use.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card principle-card">
              <div className="card-body p-4">
                <div className="principle-icon">
                  <span>🔍</span>
                </div>
                <h3 className="h5 mb-3 text-dark">Transparency When Wrong</h3>
                <p className="text-muted mb-0">
                  Mistakes happen. When they do, we own them, correct them, and learn from them. No hiding, no excuses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <div className="quote-section p-4 rounded">
              <p className="h5 mb-3 text-dark" style={{ marginTop: '1rem' }}>
                That's it. No marketing language, no hidden agendas. Just journalism.
              </p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title h3">Why We Publish</h2>
            <div className="body-text">
              <p>
                The world is crowded with voices, but real reporting — the kind that checks sources, adds context, and doesn't flinch from uncomfortable truths — is harder to find than it should be. That's what we're here to do.
              </p>
              
              <p>
                We believe in journalism that serves the public interest, not corporate interests. Our independence allows us to follow stories wherever they lead, ask the hard questions, and provide the context you need to make informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card contact-card">
              <div className="card-body p-4 text-center">
                <h2 className="h3 mb-4">Stay in Touch</h2>
                <p className="mb-4 lead">
                  News isn't a one-way street. If you have a tip, a correction, or even just a reaction to a story, reach out. We read every note.
                </p>
                
                <div className="d-flex flex-wrap justify-content-center">
                  <a href="mailto:contact@newsflashpro.com" className="social-link">
                    <span className="social-icon">📧</span>
                    contact@newsflashpro.com
                  </a>
                  
                  <a href="https://twitter.com/ProNewsfla83766" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">🐦</span>
                    @ProNewsfla83766
                  </a>
                  
                  <a href="https://instagram.com/newsflashpro" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">📸</span>
                    @newsflashpro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 mt-5 bg-light">
        <div className="container">
          {/* <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted mb-0">
                © 2024 NewsFlashPro. Independent journalism without compromise.
              </p>
            </div> 
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutPage;