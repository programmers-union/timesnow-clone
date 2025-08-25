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
import SidebarProfile from "../components/SidebarProfile";
import PopularNews from "../components/PopularNews";
import Footer from "../components/Footer";
import CategoryContent from "../components/CategoryContent";

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
}

// Generate static parameters for all categories
export async function generateStaticParams() {
  const categories = [
    "politics", "business", "technology", "sports", 
    "science", "health", "entertainment", "education", "lifestyle"
  ];
  
  return categories.map(category => ({
    category
  }));
}


const categoryDescriptions: Record<string, string> = {
  business:
    "Stay updated with market trends, finance, startups, and strategies shaping today’s global business world.",
  technology:
    "Discover innovations, AI, gadgets, and digital trends transforming industries and everyday life.",
  health:
    "Explore wellness, fitness, nutrition, and medical research for a healthier, balanced lifestyle.",
  sports:
    "Catch game results, player updates, and inspiring stories driving the world of sports.",
  science:
    "Explore discoveries, space, environment, and research expanding human knowledge.",
  politics:
    "Stay informed on government policies, elections, and global political developments.",
  entertainment:
    "Movies, music, TV, celebrity news, and pop culture trends that captivate audiences worldwide.",
  education:
    "Insights, trends, and stories shaping learning, teaching, and the future of education.",
  lifestyle:
    "Discover fashion, travel, food, and culture trends inspiring modern living and creativity.",
};

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  
  console.log("categorySlug:", category);

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

  // Ensure we have articles for the top section (indices 0-3)
  const hasTopSectionArticles = filteredArticles.length > 3;

  return (
    <>
      <Header />
      <div className="with100">
        <div className="col-12 py-4 border-bottom">
          <h2 className="text-uppercase fw-bold">{category}</h2>
          <p className="mb-0">
 {categoryDescriptions[category] || "Explore the latest updates and stories."}
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
            {/* Client component handles pagination and searchParams */}
            <CategoryContent
              articles={filteredArticles.slice(4)} // Pass articles from index 4 onwards
              category={category}
            />
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