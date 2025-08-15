import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NewsCardaSectionProps {
  title: string;
  subtitle?: string;
  category: string;


  
}

const TextNewsCard: React.FC<NewsCardaSectionProps> = ({
  
  title,
  subtitle,
  category,
  

}) => {
  return (
    <div className="card border-0 bg-transparent container">
      <div className="card-body px-0">
        {/* Title */}
        <h5 className="fw-bold mb-1">
          <a href="#" className="text-dark text-decoration-none">
           {title}
          </a>
        </h5>

        {/* Category */}
        <div className="text-muted mb-2" style={{ fontSize: '14px' }}>
          {category}
        </div>

        {/* Excerpt */}
        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
         {subtitle}
        </p>
      </div>
    </div>
  );
};

export default TextNewsCard;
