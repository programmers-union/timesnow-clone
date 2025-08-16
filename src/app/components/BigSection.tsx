    // components/OpinionCard.tsx
import Image from "next/image";

interface NewsCardProps{
    imageSrc:string;
    title:string;
    subtitle:string;
    imageAlt:string;
    category:string;
}

export default function BigSection({imageSrc,title,subtitle,imageAlt,category}:NewsCardProps) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <Image
            src={imageSrc} 
            alt={imageAlt}
            className="newsimg3"
            width={600}
            height={600}
          />
        </div>

        {/* Text Content */}
        <div className="col-md-6">
          <p className="text-primary text-uppercase mb-2" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
            {category}
          </p>
          <h1 className="fw-bold mb-3">
           {title}
          </h1>
          <p className="text-muted mb-4">
            {subtitle}
          </p>

          {/* Author */}
          <div className="d-flex align-items-center">
            <Image
              src="/author1.jpg" // Replace with your author image path
              alt="Author"
              className="rounded-circle me-2"
              width={40}
              height={40}
            />
            <small className="text-muted">by Neil MacLeod</small>
          </div>
        </div>
      </div>
    </div>
  );
}
