// components/FeaturedNews.tsx
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  category: string;
  title: string;
  date?: string;
  description: string;
  imageSrc: string;
  slug:string;
}

interface FeaturedNewsProps {
  item: NewsItem;
}

export default function FeaturedNews({ item }: FeaturedNewsProps) {
  return (
    <Link  href={`/${item.category.toLowerCase()}/${item.slug}`} className='text-decoration-none text-reset'>
    <div className="row g-3 align-items-start container">
      {/* Left side: text */}
      <div className="col-8">
        {/* Category */}
        <div className="text-uppercase small fw-bold category-name mb-1">
          {item.category}
        </div>

        {/* Title */}
        <h5 className="fw-bold fs-6 mb-2"> {item.title.length > 3
                ? item.title.slice(0, 50) + "..."
                : item.title}</h5>

        {/* Date */}
        <div className="text-muted small mb-2">{item.date}</div>

        {/* Description */}
        <p className="mb-0 text-muted small">{item.description.length > 70
                ? item.description.slice(0, 70) + "..."
                : item.description}</p>
      </div>

      {/* Right side: image */}
      <div className="col-4 position-relative py-3">
        
          <Image
          src={item.imageSrc}
          alt={item.title}
          width={130}
          height={100}
          className=""
        />
              
        {/* Play button overlay */}
        {/* <span className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ width: "36px", height: "36px" }}>
          ▶
        </span> */}
      </div>
    </div>
    </Link>
  );
}
