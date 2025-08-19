import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
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


const OpinionCard: React.FC<NewsCardaSectionProps> = ({
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
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={600}
        height={300}
        className="card-img-top newsimg2"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body px-0">
        <small className="text-uppercase text-primary fw-bold">{category}</small>
        <h5 className="card-title fw-bold mt-2 mb-2">
          {title}
        </h5>
        <p className="card-text text-muted">
          {subtitle}
        </p>
        <p className="text-muted small mb-0">{date}</p>
      </div>
    </div>
    </Link>
  );
}

export default OpinionCard;