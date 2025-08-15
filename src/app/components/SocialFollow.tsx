'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SocialFollow() {
  return (
    <div className="p-4">
      {/* FOLLOW Title */}
      <h6 className="fw-bold text-dark mb-4 text-uppercase tracking-wide">
        FOLLOW
      </h6>

      {/* Social Icons */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        {/* Facebook */}
        <a href="#" className="text-decoration-none">
          <div 
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#e9ecef',
              color: '#6c757d',
              fontSize: '16px'
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </div>
        </a>

        {/* Twitter */}
        <a href="#" className="text-decoration-none">
          <div 
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#e9ecef',
              color: '#6c757d',
              fontSize: '16px'
            }}
          >
            <i className="fab fa-twitter"></i>
          </div>
        </a>

        {/* Instagram */}
        <a href="#" className="text-decoration-none">
          <div 
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#e9ecef',
              color: '#6c757d',
              fontSize: '16px'
            }}
          >
            <i className="fab fa-instagram"></i>
          </div>
        </a>

        {/* Pinterest */}
        <a href="#" className="text-decoration-none">
          <div 
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#e9ecef',
              color: '#6c757d',
              fontSize: '16px'
            }}
          >
            <i className="fab fa-pinterest-p"></i>
          </div>
        </a>

        {/* YouTube */}
        <a href="#" className="text-decoration-none">
          <div 
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#e9ecef',
              color: '#6c757d',
              fontSize: '16px'
            }}
          >
            <i className="fab fa-youtube"></i>
          </div>
        </a>
      </div>

      {/* Follow Us Button */}
      <button 
        className="btn w-100 text-white fw-semibold py-3"
        style={{
          backgroundColor: '#6c8db5',
          border: 'none',
          fontSize: '14px',
          letterSpacing: '0.5px'
        }}
      >
        FOLLOW US
      </button>
    </div>
  );
}