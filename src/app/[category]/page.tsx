import politicsData from "../../../public/data/politics.json";
import businessData from "../../../public/data/business.json";
import technologyData from "../../../public/data/technology.json";
import sportsData from "../../../public/data/sports.json";
import scienceData from "../../../public/data/science.json";
import healthData from "../../../public/data/health.json";
import entertainmentData from "../../../public/data/entertainment.json";
import educationData from "../../../public/data/education.json";
import lifestyleData from "../../../public/data/lifestyle.json";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import OpinionCard from "../components/OpinionCard";
import TextNewsCard from "../components/TextNewsCard";
import ArticleCard from "../components/ArticleCard";
import SidebarProfile from "../components/SidebarProfile";
import PopularNews from "../components/PopularNews";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date?: string;
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

const ARTICLES_PER_PAGE = 10; // Number of ArticleCard components to show per page (change this to show more articles)

// Generate static parameters for all categories
export async function generateStaticParams() {
  const categories = [
    "politics", "business", "technology", "sports", 
    "science", "health", "entertainment", "education", "lifestyle"
  ];
  
  const params = [];
  
  // Generate static params for each category and their pages
  for (const category of categories) {
    let categoryData: Article[] = [];
    
    switch (category) {
      case "technology": categoryData = technologyData; break;
      case "sports": categoryData = sportsData; break;
      case "business": categoryData = businessData; break;
      case "health": categoryData = healthData; break;
      case "science": categoryData = scienceData; break;
      case "politics": categoryData = politicsData; break;
      case "entertainment": categoryData = entertainmentData; break;
      case "education": categoryData = educationData; break;
      case "lifestyle": categoryData = lifestyleData; break;
    }
    
    // Calculate total pages for this category (use all articles except first 4 for top section)
    const availableArticles = Math.max(0, categoryData.length - 4);
    const totalPages = Math.ceil(availableArticles / ARTICLES_PER_PAGE);
    
    // Generate params for each page
    for (let page = 1; page <= Math.max(1, totalPages); page++) {
      params.push({ category, page: page.toString() });
    }
  }
  
  return params;
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { category } = await params;
  const { page } = await searchParams;
  
  const currentPage = parseInt(page || '1', 10);
  console.log("categorySlug:", category, "page:", currentPage);

  let filteredArticles: Article[] = [];

  switch (category) {
    case "technology":
      filteredArticles = technologyData;
      break;
    case "sports":
      filteredArticles = sportsData;
      break;
    case "business":
      filteredArticles = businessData;
      break;
    case "health":
      filteredArticles = healthData;
      break;
    case "science":
      filteredArticles = scienceData;
      break;
    case "politics":
      filteredArticles = politicsData;
      break;
    case "entertainment":
      filteredArticles = entertainmentData;
      break;
    case "education":
      filteredArticles = educationData;
      break;
    case "lifestyle":
      filteredArticles = lifestyleData;
      break;
    default:
      break;
  }

  if (!filteredArticles.length) {
    return (
      <div className="p-4">No articles found for category: {category}</div>
    );
  }

  // Calculate pagination for ArticleCard components (starting from index 4 to use all data)
  const articleCardStartIndex = 4; // Reserve first 4 articles for top section
  const articleCardArticles = filteredArticles.slice(articleCardStartIndex);
  const totalArticleCardPages = Math.ceil(articleCardArticles.length / ARTICLES_PER_PAGE);
  
  // Get articles for current page
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentPageArticles = articleCardArticles.slice(startIndex, endIndex);

  // Ensure we have articles for the top section (indices 0-3)
  const hasTopSectionArticles = filteredArticles.length > 3;

  return (
    <>
      <Header />
      <div className="with100">
        <div className="col-12 py-4 border-bottom">
          <h2 className="text-uppercase fw-bold">{category}</h2>
          <p className="mb-0">
            Labore nonumes te vel, vis id errem tantas tempor. Solet quidam
            salutatus at quo.
          </p>
          <p>
            Tantas comprehensam te sea, usu sanctus similique ei. Viderer admodum
            mea et, probo tantas alienum ne vim.
          </p>
        </div>
        
        {hasTopSectionArticles && (
          <div className="row border-bottom">
            <div className="col-lg-7 border-end">
              <NewsCard
                title={filteredArticles[0].title}
                imageAlt={filteredArticles[0].title}
                subtitle={filteredArticles[0].shortdescription}
                imageSrc={filteredArticles[0].image}
                category={filteredArticles[0].category}
                date={filteredArticles[0].date}
                slug={filteredArticles[0].slug}
              />
            </div>
            <div className="col-lg-5 py-4">
              <div className="row">
                <div className="col-lg-6 border-end">
                  <OpinionCard
                    title={filteredArticles[1].title}
                    imageAlt={filteredArticles[1].title}
                    subtitle={filteredArticles[1].shortdescription}
                    imageSrc={filteredArticles[1].image}
                    category={filteredArticles[1].category}
                    date={filteredArticles[1].date}
                    slug={filteredArticles[1].slug}
                  />
                </div>
                <div className="col-lg-6">
                  <TextNewsCard
                    title={filteredArticles[2].title}
                    category={filteredArticles[2].category}
                    subtitle={filteredArticles[2].shortdescription}
                    slug={filteredArticles[2].slug}
                  />
                  <TextNewsCard
                    title={filteredArticles[3].title}
                    category={filteredArticles[3].category}
                    subtitle={filteredArticles[3].shortdescription}
                    slug={filteredArticles[3].slug}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="row">
          <div className="col-lg-8">
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
            {totalArticleCardPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalArticleCardPages}
                  category={category}
                />
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <SidebarProfile />
            <PopularNews
              data={[technologyData[28], lifestyleData[28], healthData[25]]}
            />
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}