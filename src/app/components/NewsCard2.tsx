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

const NewsCard2: React.FC<NewsCardaSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,
  date

}) => {
  return (
    <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
    <div className="card border-0 container">
      {/* Image */}
      <Image
        src={imageSrc} 
        alt={imageAlt}
        width={350}
        height={200}
        className="card-img-top newsimg2"
        style={{ objectFit: 'cover' }}
      />

      {/* Body */}
      <div className="card-body px-0">
        {/* Title */}
        <h5 className="fw-bold mb-2">
          <a href="#" className="text-dark text-decoration-none">
            {title}
          </a>
        </h5>

        {/* Meta Info */}
        <div className="small date-text text-capitalize mb-2">
         {date} &nbsp;•&nbsp; {category}
        </div>

        {/* Description */}
        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
         {subtitle}
        </p>
      </div>
                <a href="#" className=" small text-decoration-none text-danger fw-bold">
            READ MORE
          </a>
    </div>
    </Link>
  );
};

export default NewsCard2;
