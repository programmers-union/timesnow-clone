import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Helen E. Lynch",
      title: "Editor",
      bio: "Helen runs the newsroom and keeps everything on track. She reads every story, checks the facts, and makes sure what we publish is clear and fair. With more than ten years in journalism, she has seen almost everything, and she knows how to make a story resonate without losing accuracy.",
      interests: "When she's not editing, Helen enjoys hiking local trails, reading history, and scribbling essays about topics that interest her.",
      initials: "HL"
    },
    {
      name: "Melissa T. Daniel",
      title: "Journalist",
      bio: "Melissa writes for all kinds of stories, bringing curiosity and persistence to everything she touches. She digs into leads, talks to people on the ground, and turns complicated information into stories readers can understand.",
      interests: "Outside the newsroom, Melissa can often be found exploring markets, sketching, or chatting with neighbors about what matters most in their community.",
      initials: "MD"
    },
    {
      name: "Patricia T. Winter",
      title: "Reporter",
      bio: "Patricia contributes to every kind of news story. She has a talent for making complex topics understandable and for asking questions that get to the heart of a story.",
      interests: "When she's not reporting, Patricia enjoys a strong cup of coffee, running in the mornings, and listening to podcasts about entrepreneurship, ideas, and innovation.",
      initials: "PW"
    },
    {
      name: "Justin M. Franklin",
      title: "Correspondent",
      bio: "Justin writes across all types of news. He's endlessly curious and likes to explore topics in a way that readers can relate to and understand.",
      interests: "When he isn't working, Justin enjoys street photography, playing chess, and experimenting with new software tools just for fun.",
      initials: "JF"
    },
    {
      name: "James D. Wade",
      title: "Investigative Reporter",
      bio: "James works on stories in every area of news. He follows leads, asks the hard questions, and digs into the details to make sure readers get the full story.",
      interests: "Outside the newsroom, James enjoys watching history documentaries, taking quiet walks, and sitting in coffee shops to read or brainstorm ideas.",
      initials: "JW"
    },
    {
      name: "NewsFlashPro Staff",
      title: "Contributing Writers",
      bio: "Some stories are the result of teamwork among our reporters or contributions from trusted external writers. In those cases, the byline is NewsFlashPro Staff.",
      interests: "Every story under this name is fact-checked, edited, and held to the same high standards as all our reporting.",
      initials: "NF"
    }
  ];

  return (
    <>


      <div className="team-hero py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-4">Our Team</h1>
              <p className="lead mb-0 px-3">
                Meet the dedicated journalists behind NewsFlashPro's independent reporting
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="team-title h3 mb-4">About NewsFlashPro</h2>
            <p className="lead text-muted">
              We're a small, independent team of journalists.We don’t have a big newsroom, and we’re not a corporation. Instead,we work from different cities, connected online by our shared commitment to telling the news honestly and clearly. Every story you read here comes from people who care about facts, follow leads, and double-check every detail before publishing.
            </p>
            <p className="text-muted">
             Our reporters don’t stick to just one topic. They cover everything—politics, business, technology, culture, investigative work, and more. That way, no matter the story, you know it’s been handled with curiosity, care, and accuracy.
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        <div className="row g-4 mb-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-6 col-xl-4">
              <div className="card team-member-card h-100">
                <div className="card-body p-4 text-center">
                  <div className="avatar-circle">
                    {member.initials}
                  </div>
                  
                  <h3 className="h4 mb-2 text-dark">{member.name}</h3>
                  <span className="role-badge d-inline-block mb-3">{member.title}</span>
                  
                  <div className="text-start">
                    <p className="bio-text mb-3">
                      {member.bio}
                    </p>
                    <p className="interests-text small mb-3">
                      {member.interests}
                    </p>
                    
                    <div className="d-grid">
                      <button className="btn btn-outline-primary btn-sm">
                        Read Full Bio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="contact-section p-4 rounded">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h3 className="h4 mb-2 text-dark">Join Our Team</h3>
                  <p className="mb-0 text-muted">
                    At NewsFlashPro, every story reflects the effort of real people who care about the truth. 
                    Our reporters are versatile, curious, and committed to clarity, accuracy, and fairness.
                  </p>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <a 
                    href="mailto:contact@newsflashpro.com" 
                    className="btn btn-primary btn-lg"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 mt-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted mb-0">
                © 2024 NewsFlashPro. Independent journalism you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;