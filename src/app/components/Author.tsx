import React from 'react';

interface Article {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
}

interface AuthorPageProps {
  name?: string;
  title?: string;
  email?: string;
  bio?: string;
  experience?: string;
  personalLife?: string;
  initials?: string;
  recentArticles?: Article[];
  socialLinks?: SocialLinks;
}

const AuthorPage: React.FC<AuthorPageProps> = ({ 
  name = "Helen E. Lynch",
  title = "Editor",
  email = "helen.lynch@newsflashpro.com",
  bio = "I'm Helen, and I make sure the stories at NewsFlashPro are clear, accurate, and trustworthy. My role as editor isn't just about fixing typos or checking grammar — it's about helping our reporters tell stories that make sense and give readers the context they need. I read every story, ask questions, and sometimes challenge our own assumptions to make sure we get it right.",
  experience = "I've been in journalism for over ten years. I started covering local events and city politics, which taught me the value of listening carefully, following leads, and digging into the details that matter. Over time, I moved into editing, helping other reporters shape their stories and keeping our newsroom focused on honest, fair reporting.",
  personalLife = "Outside the newsroom, I love hiking, wandering through bookstores, and scribbling essays about anything that catches my curiosity. I think noticing the small details — both in stories and in life — makes all the difference in telling a story well.",
  initials,
  recentArticles = [],
  socialLinks = {}
}) => {
  // Generate initials if not provided
  const getInitials = (fullName: string): string => {
    return fullName.split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const authorInitials = initials || getInitials(name);

  return (
    <>


      <div className="author-hero py-5 mb-5">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div className="author-avatar">
                  {authorInitials}
                </div>
                <h1 className="display-4 fw-bold mb-2">{name}</h1>
                <p className="lead mb-4">{title}</p>
                <div className="mb-3">
                  <a href="/team" className="back-link">
                    ← Back to Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="bio-section p-4 mb-4">
              <h2 className="section-title h3">About {name.split(' ')[0]}</h2>
              <p className="bio-text mb-0">{bio}</p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <h3 className="section-title h4">Experience & Background</h3>
            <p className="experience-text">{experience}</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <h3 className="section-title h4">Beyond the Newsroom</h3>
            <div className="personal-text p-4">
              <p className="mb-0">{personalLife}</p>
            </div>
          </div>
        </div>

        {recentArticles && recentArticles.length > 0 && (
          <>
            <hr className="divider" />
            <div className="row mb-5">
              <div className="col-12">
                <h2 className="section-title h3">Recent Articles</h2>
              </div>
            </div>
            <div className="row g-4 mb-5">
              {recentArticles.map((article, index) => (
                <div key={index} className="col-lg-4">
                  <div className="card article-card h-100">
                    <div className="card-body p-4">
                      <h4 className="h5 mb-2 text-dark">{article.title}</h4>
                      <p className="text-muted small mb-2">{article.date}</p>
                      <p className="text-muted">{article.excerpt}</p>
                      <a href={article.link} className="btn btn-outline-primary btn-sm">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card contact-card">
              <div className="card-body p-4 text-center">
                <h3 className="h4 mb-3">Get in Touch</h3>
                <p className="mb-4">
                  I'm always happy to hear from readers. Whether you have feedback, story ideas, or just want to connect.
                </p>
                
                <a href={`mailto:${email}`} className="email-button mb-3">
                  📧 {email}
                </a>
                
                {Object.keys(socialLinks).length > 0 && (
                  <div className="mt-3">
                    {socialLinks.twitter && (
                      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                        <span className="social-icon">🐦</span>
                        Twitter
                      </a>
                    )}
                    {socialLinks.linkedin && (
                      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                        <span className="social-icon">💼</span>
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 mt-5 bg-light">

      </div>
    </>
  );
};

export default AuthorPage;