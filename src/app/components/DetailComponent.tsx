"use client";
import React from "react";
import Image from "next/image";
import NewsCard2 from "./NewsCard2";
import SocialNavComponent from "./SocialNavComponent";
import NewsBox from "./NewsBox";
import educationData from "../../../public/data/education.json";
import AuthorCommentBox from "./AuthorCommentBox";
import NewsCard from "./NewsCard";
import NewsCardDetail from "./NewsCardDetail";

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
      <div className="mb-2 title-subtitle-constrained">
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

      {/* Title - Now with constrained width */}
      <h2 className="fw-bold mb-3 title-subtitle-constrained">{title}</h2>

      {/* Subtitle / Description - Now with constrained width */}
      <p className="text-muted fs-5 mb-4 title-subtitle-constrained">
        {subtitle}
      </p>

      {/* Author + Meta Info */}
      <div className="d-block py-2 d-md-flex align-items-center title-subtitle-constrained">
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
        <p className="text-center text-muted mt-2 title-subtitle-constrained ">
          {subtitle}{" "}
        </p>
      </div>
      <div className="mt-4 article-content title-subtitle-constrained text-dark">
        <p>
          {description
            .split(". ")
            .filter((sentence) => sentence.trim() !== "")
            .map((sentence, index) => (
              <p key={index}>{sentence.trim()}.</p>
            ))}
        </p>

        <SocialNavComponent />
        <div className="row border-top">
          <h6 className="text-center py-2">RELATED POSTS</h6>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <NewsBox
              title={educationData[30].title}
              imageAlt={educationData[30].title}
              subtitle={educationData[30].shortdescription}
              imageSrc={educationData[30].image}
              category={educationData[30].category}
              date={educationData[30].date}
              slug={educationData[30].slug}
            />
          </div>
          <div className="col-lg-4">
            <NewsBox
              title={educationData[29].title}
              imageAlt={educationData[29].title}
              subtitle={educationData[29].shortdescription}
              imageSrc={educationData[29].image}
              category={educationData[29].category}
              date={educationData[29].date}
              slug={educationData[29].slug}
            />
          </div>
          <div className="col-lg-4">
            <NewsBox
              title={educationData[28].title}
              imageAlt={educationData[28].title}
              subtitle={educationData[28].shortdescription}
              imageSrc={educationData[28].image}
              category={educationData[28].category}
              date={educationData[28].date}
              slug={educationData[28].slug}
            />
          </div>
        </div>
        <AuthorCommentBox />
      </div>

      <div className="row border-top">
        <h6 className="text-center py-2">LATEST FROM BLOG</h6>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <NewsCardDetail
            title={educationData[27].title}
            imageAlt={educationData[27].title}
            subtitle={educationData[27].shortdescription}
            imageSrc={educationData[27].image}
            category={educationData[27].category}
            slug={educationData[27].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsCardDetail
            title={educationData[26].title}
            imageAlt={educationData[26].title}
            subtitle={educationData[26].shortdescription}
            imageSrc={educationData[26].image}
            category={educationData[26].category}
            slug={educationData[26].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsCardDetail
            title={educationData[25].title}
            imageAlt={educationData[25].title}
            subtitle={educationData[25].shortdescription}
            imageSrc={educationData[25].image}
            category={educationData[25].category}
            slug={educationData[25].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsCardDetail
            title={educationData[24].title}
            imageAlt={educationData[24].title}
            subtitle={educationData[24].shortdescription}
            imageSrc={educationData[24].image}
            category={educationData[24].category}
            slug={educationData[24].slug}
          />
        </div>
      </div>
    </div>
  );
}
