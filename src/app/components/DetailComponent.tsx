"use client";
import React from "react";
import Image from "next/image";
import NewsCard2 from "./NewsCard2";

interface ArticleSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
  date?: string;
  shortdescription: string;
  description: string;
}

export default function DetailComponent({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  category,
  date,
  description,
}: ArticleSectionProps) {
  return (
    <div className="container my-5  ">
      {/* Category links */}
      <div className="mb-2 ">
        <a
          href="#"
          className="text-uppercase fw-bold text-secondary small me-2"
        >
          {category}
        </a>
        <a href="#" className="text-uppercase fw-bold text-secondary small">
          World
        </a>
      </div>

      {/* Title */}
      <h2
        className="fw-bold mb-3 mx-0 mx-lg-4 both-width"
      >
        {title}
      </h2>

      {/* Subtitle / Description */}
      <p
        className="text-muted fs-5 mb-4 mx-0 mx-lg-4
"
      >
        {subtitle}
      </p>

      {/* Author + Meta Info */}
      <div className="d-block py-2 d-md-flex  align-items-center mx-0 mx-lg-4">
        <small className="text-muted me-3">18th Aug 2025</small>
        <Image
          src="/author1.jpg"
          alt="Author"
          width={30}
          height={30}
          className="rounded-circle me-2 "
        />
        <small className="me-3">by Lucas</small>
        {/* <small className="text-muted me-3">
            <i className="bi bi-chat-left-text me-1"></i> 1
            </small> */}
        <small className="text-muted">1 min read</small>
      </div>

      {/* Main Image */}
      <div className="text-center">
        <Image
          src={imageSrc}
          alt="Article Image"
          width={800}
          height={500}
          className=" rounded img-fluid"
        />
        <p
          className="text-center  text-muted mt-2 mx-0 mx-lg-4
"
        >
          {subtitle}{" "}
        </p>
      </div>
      <div className="mt-4 article-content with1000 text-dark">
        <p>
          {description
            .split(". ")
            .filter((sentence) => sentence.trim() !== "")
            .map((sentence, index) => (
              <p key={index}>{sentence.trim()}.</p>
            ))}
        </p>
      </div>



    </div>
  );
}
