import politicsData from '../../../../public/data/politics.json';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import scienceData from '../../../../public/data/science.json';
import healthData from '../../../../public/data/health.json';
import entertainmentData from '../../../../public/data/entertainment.json';
import educationData from '../../../../public/data/education.json'; 
import DetailComponent from '@/app/components/DetailComponent';
import Header from '@/app/components/Header';
import NewsCard2 from '@/app/components/NewsCard2';

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
};

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const allData = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'technology', articles: technologyData },
    { category: 'sports', articles: sportsData },
    { category: 'science', articles: scienceData },
    { category: 'health', articles: healthData },
    {category:'entertainment',articles:entertainmentData},
    {category:'education',articles:educationData}
  ];

  const params: { category: string; slug: string }[] = [];

  allData.forEach(({ category, articles }) => {
    articles.forEach((article: Article) => {
      params.push({
        category: category,
        slug: article.slug,
      });
    });
  });

  return params;
}


export default async function DetailPage({ params }: PageProps) {
   
  const { category, slug } = await params;
  console.log("category:",category)
  console.log("slug:",slug)

  let filteredArticles: Article[] = [];

  switch (category) {
    case 'technology':
      filteredArticles = technologyData;
      break;
    case 'sports':
      filteredArticles = sportsData;
      break;
    case 'business':
      filteredArticles = businessData;
      break;
    case 'health':
      filteredArticles = healthData;
      break;
    case 'science':
      filteredArticles = scienceData;
      break;
    case 'politics':
      filteredArticles = politicsData;
      break;
    case'entertainment':
      filteredArticles=entertainmentData;
    case 'education':
      filteredArticles=educationData
    default:
      break;
  }

  const article = filteredArticles.find((item) => item.slug === slug);
  console.log("articleeeeeeeeeeee:",article)

  if (!article) {
    return <div className="p-4">No article found for slug: {slug}</div>;
  }
  return (
     
    <div className='with100'>
      <Header/>
     <DetailComponent
        title={article.title}
        subtitle={article.shortdescription}
        imageSrc={article.image}
        category={article.category}
        slug={article.slug}
        imageAlt={article.title}
        shortdescription={article.shortdescription}
        description={article.description}
     />
     
            {/* <div className="row border-top text-center ">
        <p className="">Related  posts</p>
       </div>
       <div className="row">
        <div className="col-lg-3">
            <NewsCard2
            title={healthData[30].title}
            imageAlt={healthData[30].title}
            subtitle={healthData[30].shortdescription}
            imageSrc={healthData[30].image}
            category={healthData[30].category}
            date={healthData[30].date}
            slug={healthData[30].slug}
          />
        </div>
       </div> */}
    </div>
  )
}
