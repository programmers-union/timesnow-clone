'use client'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date?: string;
};

interface CategoryContentProps {
  articles: Article[];
  category: string;
}

const ARTICLES_PER_PAGE = 10;

function CategoryContentInner({ articles, category }: CategoryContentProps) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  
  // Calculate pagination
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentPageArticles = articles.slice(startIndex, endIndex);

  return (
    <>
      {currentPageArticles.map((article, index) => (
        <div 
          key={`${article.slug}-${startIndex + index}`}
          className={index < currentPageArticles.length - 1 ? "border-bottom" : ""}
        >
          <ArticleCard
            title={article.title}
            imageAlt={article.title}
            subtitle={article.shortdescription}
            imageSrc={article.image}
            category={article.category}
            slug={article.slug}
          />
        </div>
      ))}
      
      {/* Pagination Component */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            category={category}
          />
        </div>
      )}
    </>
  );
}

export default function CategoryContent({ articles, category }: CategoryContentProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryContentInner articles={articles} category={category} />
    </Suspense>
  );
}