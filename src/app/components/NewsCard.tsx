
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
            <span className='date-text'>{date}</span>
            {/* <span className="mx-1">•</span> */}
            <a href="#" className="text-decoration-none fw-bold category-name text-uppercase ">{category}</a>
            <span className="mx-1">•</span>
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
          </div>

          {/* Title */}
          <h4 className="fw-bold mb-2 py-3">
           <span className="text-dark text-decoration-none">{title}</span> 
          </h4>

          {/* Description */}
          <p className="newscard-subtitle mb-0">
           {subtitle}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default NewsCard;
    