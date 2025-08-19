// components/PopularNews.tsx
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  title: string;
  shortdescription: string;
  image: string;
  category?: string;
  slug: string;
}

interface PopularNewsProps {
  data: NewsItem[];
}

export default function PopularNews({ data }: PopularNewsProps) {
  return (
    <div className="container px-lg-0">
      <h6 className="fw-bold text-uppercase mb-3">Popular</h6>
      {data.map((item, index) => (
        <Link
          key={index}
          href={`/${item.category?.toLowerCase() || "news"}/${item.slug}`}
          className="text-decoration-none text-reset"
        >
          <div className="d-flex mb-3 pb-3 border-bottom">
            {/* Thumbnail */}
            <div className="flex-shrink-0 me-3">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
              />
            </div>

            {/* Text */}
            <div className="flex-grow-1">
              <h6 className="fw-bold mb-1">
                {item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}
              </h6>
              <p className="text-muted small mb-0">
                {item.shortdescription.length > 70
                  ? item.shortdescription.slice(0, 70) + "..."
                  : item.shortdescription}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
