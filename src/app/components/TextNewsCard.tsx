import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';

interface NewsCardaSectionProps {
  title: string;
  subtitle: string;
  category: string;
  slug:string;
  date?:string;


  
}

const TextNewsCard: React.FC<NewsCardaSectionProps> = ({
  
  title,
  subtitle,
  category,
  slug,
  date
  

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
 <small className="text-uppercase fw-bold category-name">{category}</small>

        {/* Excerpt */}
        <p className="newscard-subtitle mb-0 py-2">
         {subtitle.length > 70
                  ?subtitle.slice(0, 100) + "..."
                  : subtitle}
        </p>
        <p className="small mb-0 text-muted">
            {<span className="date-text">{date}</span>}
            
                             <div className="d-flex align-items-center">
                               <Image
                                 src="/author1.jpg" // Replace with your author image path
                                 alt="Author"
                                 className="rounded-circle me-2"
                                 width={30}
                                 height={30}
                               />
                               <small className="text-muted">by Neil MacLeod</small>
                             </div>
          
          </p>
      </div>
    </div>
    </Link>
  );
};

export default TextNewsCard;
