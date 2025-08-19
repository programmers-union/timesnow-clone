import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

interface NewsCardaSectionProps {
  title: string;
  subtitle?: string;
  category: string;
  slug:string


  
}

const TextNewsCard: React.FC<NewsCardaSectionProps> = ({
  
  title,
  subtitle,
  category,
  slug
  

}) => {
  return (
    <Link  href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
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
    </Link>
  );
};

export default TextNewsCard;
