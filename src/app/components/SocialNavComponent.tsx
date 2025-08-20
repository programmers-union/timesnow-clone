"use client";
import React from "react";

export default function SocialNavComponent() {
  return (
    <div className="container-fluid py-4">
      {/* Social Media Icons */}
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          <div className="d-flex flex-wrap justify-content-center gap-1 gap-sm-2">
            {/* Facebook */}
            <a
              href="#"
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef' }}
            >
              <svg width="16" height="16" fill="#6c757d" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="#"
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef' }}
            >
              <svg width="16" height="16" fill="#6c757d" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="#"
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef' }}
            >
              <svg width="16" height="16" fill="#6c757d" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.69-2.436-2.878-2.436-4.632 0-3.78 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef' }}
            >
              <svg width="16" height="16" fill="#6c757d" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef' }}
            >
              <svg width="16" height="16" fill="#6c757d" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.889 3.488"/>
              </svg>
            </a>

            {/* Reddit */}
            <a
              href="#"
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef' }}
            >
              <svg width="16" height="16" fill="#6c757d" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="#"
              className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#e9ecef' }}
            >
              <svg width="16" height="16" fill="#6c757d" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="row justify-content-center">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <div className="navbar-nav d-flex flex-wrap justify-content-center gap-2 gap-sm-3 gap-lg-5">
              <a 
                className="nav-link fw-bold text-dark text-uppercase px-1 px-sm-2 px-lg-3" 
                href="#"
                style={{ fontSize: '12px', letterSpacing: '0.5px' }}
              >
                INTERVIEW
              </a>
              <a 
                className="nav-link fw-bold text-dark text-uppercase px-1 px-sm-2 px-lg-3" 
                href="#"
                style={{ fontSize: '12px', letterSpacing: '0.5px' }}
              >
                JOURNAL
              </a>
              <a 
                className="nav-link fw-bold text-dark text-uppercase px-1 px-sm-2 px-lg-3" 
                href="#"
                style={{ fontSize: '12px', letterSpacing: '0.5px' }}
              >
                POLITICS
              </a>
              <a 
                className="nav-link fw-bold text-dark text-uppercase px-1 px-sm-2 px-lg-3" 
                href="#"
                style={{ fontSize: '12px', letterSpacing: '0.5px' }}
              >
                WORDPRESS
              </a>
              <a 
                className="nav-link fw-bold text-dark text-uppercase px-1 px-sm-2 px-lg-3" 
                href="#"
                style={{ fontSize: '12px', letterSpacing: '0.5px' }}
              >
                WORLD
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}