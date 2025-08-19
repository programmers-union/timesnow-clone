// components/ArticleCard.tsx
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps{
    imageSrc:string;
    title:string;
    subtitle:string;
    imageAlt:string;
    category:string;
    slug:string;

}

export default function ArticleCard({imageSrc,imageAlt,title,subtitle,category,slug}:NewsCardProps) {
  
  return (
    <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
    <div className="container my-4">
      <div className="row g-1 align-items-start">
        
        {/* Image */}
        <div className="col-12 col-md-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="article-img"
            width={400}
            height={250}
          />
        </div>

        {/* Content */}
        <div className="col-12 col-md-8 ps-0 ">
          <h3 className="fw-bold mb-1 article-title">{title}</h3>
          <div className="text-muted small mb-2">
           24th August<span className="mx-2">•</span>{category}
          </div>
          <p className="text-secondary subtitle mb-0">
           {subtitle}
          </p>
          <a href="#" className=" text-decoration-none">
            READ MORE
          </a>
        </div>
      </div>
    </div>
    </Link>
  );
}
