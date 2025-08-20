"use client";
import Image from "next/image";

interface NewsCardProps{
    imageSrc:string;
    title:string;
    subtitle:string;
    imageAlt:string;
    category:string;
    slug:string;

}

export default function NewsCardDetail({imageSrc,imageAlt,title,subtitle,category,slug}:NewsCardProps) {
  return (
    <div className="container my-4">
      <div className="card border-0">
        {/* Image */}
        <Image
          src={imageSrc}
          alt={title}
          width={150}
          height={150}
          className="card-img-top"
        />

        {/* Card Body */}
        <div className="card-body px-0">
          <h5 className="card-title fw-bold fs-6">
            {title}
          </h5>
          <p className="card-text text-muted sub-text">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
