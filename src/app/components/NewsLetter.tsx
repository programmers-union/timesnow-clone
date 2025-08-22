// components/Newsletter.tsx
'use client';
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-light py-5 text-center">
      <div className="container">
        <h4 className="fw-bold mb-3 fs-5">NEWSLETTER</h4>
        <h5 className="fw-bold mb-2">
          <i className="bi bi-envelope-fill me-2"></i> JOIN OUR MAILING LIST
        </h5>
        <p className="nav-category mb-4 fs-6">We hate spams like you do</p>

        <form className="row justify-content-center">
          <div className="col-12 col-md-3 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control fs-6"
              placeholder="Your Name"
            />
          </div>
          <div className="col-12 col-md-3 mb-2 mb-md-0">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="col-12 col-md-auto">
            <button type="submit" className="btn btn-primary  w-100">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
