import Image from "next/image";
import Link from "next/link";

interface NewsCardaSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
  date?:string;

  
}

const NewsBox: React.FC<NewsCardaSectionProps> = ({
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
    <div className="container border-0">
      {/* Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={400}
        className="card-img-top boxImg"
      />

      {/* Card Body */}
      <div className="card-body px-0 py-2">
        <h5 className="fw-bold" >
         {title}
        </h5>
        <p className="text-muted mb-0">{date}</p>   
      </div>
    </div>
    </Link>
  );
}

export default NewsBox;
