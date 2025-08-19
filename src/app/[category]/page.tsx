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
  return [
    { category: "politics" },
    { category: "business" },
    { category: "technology" },
    { category: "sports" },
    { category: "science" },
    { category: "health" },
    { category: "entertainment" },
    { category: "education" },
    { category: "lifestyle" },
  ];
}

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
    default:
      break;
  }

  if (!filteredArticles.length) {
    return (
      <div className="p-4">No articles found for category: {category}</div>
    );
  }

  return (
    <>
    <Header />
    <div className="with100">
  <div className="col-12 py-4 border-bottom">
        <h1 className="text-uppercase">{category}</h1>
        <p className="mb-0">
          Labore nonumes te vel, vis id errem tantas tempor. Solet quidam
          salutatus at quo.
        </p>
        <p>
          Tantas comprehensam te sea, usu sanctus similique ei. Viderer admodum
          mea et, probo tantas alienum ne vim.
        </p>
      </div>
      <div className="row border-bottom">
        <div className="col-lg-7 border-end">
          <NewsCard
            title={filteredArticles[20].title}
            imageAlt={filteredArticles[20].title}
            subtitle={filteredArticles[20].shortdescription}
            imageSrc={filteredArticles[20].image}
            category={filteredArticles[20].category}
            date={filteredArticles[20].date}
            slug={filteredArticles[20].slug}
          />
        </div>
        <div className="col-lg-5 py-4">
          <div className="row">
            <div className="col-lg-6 border-end">
              <OpinionCard
                title={filteredArticles[21].title}
                imageAlt={filteredArticles[21].title}
                subtitle={filteredArticles[21].shortdescription}
                imageSrc={filteredArticles[21].image}
                category={filteredArticles[21].category}
                date={filteredArticles[21].date}
                slug={filteredArticles[21].slug}
              />
            </div>
            <div className="col-lg-6">
              <TextNewsCard
                title={filteredArticles[22].title}
                category={filteredArticles[22].category}
                subtitle={filteredArticles[22].shortdescription}
                slug={filteredArticles[22].slug}
              />
              <TextNewsCard
                title={filteredArticles[23].title}
                category={filteredArticles[23].category}
                subtitle={filteredArticles[23].shortdescription}
                slug={filteredArticles[23].slug}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="border-bottom">
            <ArticleCard
              title={filteredArticles[24].title}
              imageAlt={filteredArticles[24].title}
              subtitle={filteredArticles[24].shortdescription}
              imageSrc={filteredArticles[24].image}
              category={filteredArticles[24].category}
              slug={filteredArticles[24].slug}
            />
          </div>

          <div className="border-bottom">
            <ArticleCard
              title={filteredArticles[25].title}
              imageAlt={filteredArticles[25].title}
              subtitle={filteredArticles[25].shortdescription}
              imageSrc={filteredArticles[25].image}
              category={filteredArticles[25].category}
              slug={filteredArticles[25].slug}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={filteredArticles[26].title}
              imageAlt={filteredArticles[26].title}
              subtitle={filteredArticles[26].shortdescription}
              imageSrc={filteredArticles[26].image}
              category={filteredArticles[26].category}
              slug={filteredArticles[26].slug}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={filteredArticles[27].title}
              imageAlt={filteredArticles[27].title}
              subtitle={filteredArticles[27].shortdescription}
              imageSrc={filteredArticles[27].image}
              category={filteredArticles[27].category}
              slug={filteredArticles[27].slug}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={filteredArticles[28].title}
              imageAlt={filteredArticles[28].title}
              subtitle={filteredArticles[28].shortdescription}
              imageSrc={filteredArticles[28].image}
              category={filteredArticles[28].category}
              slug={filteredArticles[28].slug}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={filteredArticles[29].title}
              imageAlt={filteredArticles[29].title}
              subtitle={filteredArticles[29].shortdescription}
              imageSrc={filteredArticles[29].image}
              category={filteredArticles[29].category}
              slug={filteredArticles[29].slug}
            />
          </div>
          <ArticleCard
            title={filteredArticles[30].title}
            imageAlt={filteredArticles[30].title}
            subtitle={filteredArticles[30].shortdescription}
            imageSrc={filteredArticles[30].image}
            category={filteredArticles[30].category}
            slug={filteredArticles[30].slug}
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
