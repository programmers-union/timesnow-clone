
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

interface NewsCardaSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
  date?:string;

  
}


const NewsCard: React.FC<NewsCardaSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,
  date

}) => {
  console.log("sluggggggggggg:",slug)
  return (
     <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
      
    <div className="container my-4">
      <div className="card border-0">
        {/* Image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={500}
          className="card-img-top newsimg"
          style={{ objectFit: 'cover' }}
        />

        {/* Body */}
        <div className="card-body px-0">
          {/* Meta Info */}
          <div className="mb-2 small text-muted d-flex flex-wrap align-items-center gap-2">
            <span>{date}</span>
            <span className="mx-1">•</span>
            <a href="#" className="text-decoration-none text-muted">{category}</a>
            <span className="mx-1">•</span>
            <span className="text-danger fw-bold">Live</span>
            <span className="text-danger">3 years ago</span>
          </div>

          {/* Title */}
          <h4 className="fw-bold mb-2">
            <a href="#" className="text-dark text-decoration-none">
              {title}
            </a>
          </h4>

          {/* Description */}
          <p className="text-muted mb-0">
           {subtitle}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default NewsCard;
    