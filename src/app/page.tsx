import NewsCard from "./components/NewsCard";
import politicsData from "../../public/data/politics.json";
import businessData from "../../public/data/business.json";
import technologyData from "../../public/data/technology.json";
import sportsData from "../../public/data/sports.json";
import scienceData from "../../public/data/science.json";
import educationData from "../../public/data/education.json";
import healthData from "../../public/data/health.json";
import entertainmentData from "../../public/data/entertainment.json";
import lifestyleData from "../../public/data/lifestyle.json";
import NewsCard2 from "./components/NewsCard2";
import OpinionCard from "./components/OpinionCard";
import TextNewsCard from "./components/TextNewsCard";
import NewsBox from "./components/NewsBox";
import RoundedCard from "./components/RoundedCard";
import SocialFollow from "./components/SocialFollow";
import BigSection from "./components/BigSection";
import ArticleCard from "./components/ArticleCard";
import SidebarProfile from "./components/SidebarProfile";
import PopularNews from "./components/PopularNews";
import Newsletter from "./components/NewsLetter";
import FeaturedNews from "./components/FeaturedNews";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <><Header/>
    <div className="with100">
      <div className="row">
        <div className="col-lg-7 border-end">
          <NewsCard
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-5 py-4">
          <div className="row">
            <div className="col-lg-6 border-end">
              <OpinionCard
                title={businessData[29].title}
                imageAlt={businessData[29].title}
                subtitle={businessData[29].shortdescription}
                imageSrc={businessData[29].image}
                category={businessData[29].category}
                date={businessData[29].date}
                slug={businessData[29].slug}
              />
            </div>
            <div className="col-lg-6">
              <TextNewsCard
                title={businessData[28].title}
                category={businessData[28].category}
                subtitle={businessData[28].shortdescription}
              />
              <TextNewsCard
                title={businessData[27].title}
                category={businessData[27].category}
                subtitle={businessData[27].shortdescription}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">politics</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>

      <div className="row py-3 g-0">
        <div className="col-lg-3 border-end">
          <NewsBox
            title={politicsData[30].title}
            imageAlt={politicsData[30].title}
            subtitle={politicsData[30].shortdescription}
            imageSrc={politicsData[30].image}
            category={politicsData[30].category}
            date={politicsData[30].date}
            slug={politicsData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsBox
            title={politicsData[29].title}
            imageAlt={politicsData[29].title}
            subtitle={politicsData[29].shortdescription}
            imageSrc={politicsData[29].image}
            category={politicsData[29].category}
            date={politicsData[29].date}
            slug={politicsData[29].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsBox
            title={politicsData[28].title}
            imageAlt={politicsData[28].title}
            subtitle={politicsData[28].shortdescription}
            imageSrc={politicsData[28].image}
            category={politicsData[28].category}
            date={politicsData[28].date}
            slug={politicsData[28].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsBox
            title={politicsData[27].title}
            imageAlt={politicsData[27].title}
            subtitle={politicsData[27].shortdescription}
            imageSrc={politicsData[27].image}
            category={politicsData[27].category}
            date={politicsData[27].date}
            slug={politicsData[27].slug}
          />
        </div>
      </div>
      <div className="row py-3 g-0">
        <div className="col-lg-3 border-end">
          <NewsBox
            title={politicsData[26].title}
            imageAlt={politicsData[26].title}
            subtitle={politicsData[26].shortdescription}
            imageSrc={politicsData[26].image}
            category={politicsData[26].category}
            date={politicsData[26].date}
            slug={politicsData[26].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsBox
            title={politicsData[25].title}
            imageAlt={politicsData[25].title}
            subtitle={politicsData[25].shortdescription}
            imageSrc={politicsData[25].image}
            category={politicsData[25].category}
            date={politicsData[25].date}
            slug={politicsData[25].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsBox
            title={politicsData[24].title}
            imageAlt={politicsData[24].title}
            subtitle={politicsData[24].shortdescription}
            imageSrc={politicsData[24].image}
            category={politicsData[24].category}
            date={politicsData[24].date}
            slug={politicsData[24].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsBox
            title={politicsData[23].title}
            imageAlt={politicsData[23].title}
            subtitle={politicsData[23].shortdescription}
            imageSrc={politicsData[23].image}
            category={politicsData[23].category}
            date={politicsData[23].date}
            slug={politicsData[23].slug}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">entertainment</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>
      <div className="row g-3">
        <div className="col-lg-2 border-end">
          <RoundedCard
            imageSrc={entertainmentData[30].image}
            title={entertainmentData[30].title}
            subtitle={entertainmentData[30].shortdescription}
          />
        </div>
        <div className="col-lg-2 border-end">
          <RoundedCard
            imageSrc={entertainmentData[29].image}
            title={entertainmentData[29].title}
            subtitle={entertainmentData[29].shortdescription}
          />
        </div>
        <div className="col-lg-2 border-end">
          <RoundedCard
            imageSrc={entertainmentData[28].image}
            title={entertainmentData[28].title}
            subtitle={entertainmentData[28].shortdescription}
          />
        </div>
        <div className="col-lg-2 border-end">
          <RoundedCard
            imageSrc={entertainmentData[27].image}
            title={entertainmentData[27].title}
            subtitle={entertainmentData[27].shortdescription}
          />
        </div>
        <div className="col-lg-4">
          <SocialFollow />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">opinion</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>
      <BigSection
        imageSrc={educationData[29].image}
        title={educationData[29].title}
        subtitle={educationData[29].shortdescription}
        category={educationData[29].category}
        imageAlt={educationData[29].title}
      />

      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">science</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>

      <div className="row py-3">
        <div className="col-lg-3 border-end py-4">
          <OpinionCard
            title={scienceData[30].title}
            imageAlt={scienceData[30].title}
            subtitle={scienceData[30].shortdescription}
            imageSrc={scienceData[30].image}
            category={scienceData[30].category}
            date={scienceData[30].date}
            slug={scienceData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <TextNewsCard
            title={scienceData[29].title}
            category={scienceData[29].category}
            subtitle={scienceData[29].shortdescription}
          />
          <div>
            <TextNewsCard
              title={scienceData[28].title}
              category={scienceData[28].category}
              subtitle={scienceData[28].shortdescription}
            />
          </div>
        </div>
        <div className="col-lg-6 ">
          <NewsCard
            title={scienceData[27].title}
            imageAlt={scienceData[27].title}
            subtitle={scienceData[27].shortdescription}
            imageSrc={scienceData[27].image}
            category={scienceData[27].category}
            date={scienceData[27].date}
            slug={scienceData[27].slug}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">Health</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>
      <div className="row py-3">
        <div className="col-lg-3 border-end">
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
        <div className="col-lg-3 border-end">
          <NewsCard2
            title={healthData[29].title}
            imageAlt={healthData[29].title}
            subtitle={healthData[29].shortdescription}
            imageSrc={healthData[29].image}
            category={healthData[29].category}
            date={healthData[29].date}
            slug={healthData[29].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsCard2
            title={healthData[28].title}
            imageAlt={healthData[28].title}
            subtitle={healthData[28].shortdescription}
            imageSrc={healthData[28].image}
            category={healthData[28].category}
            date={healthData[28].date}
            slug={healthData[28].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={healthData[27].title}
            imageAlt={healthData[27].title}
            subtitle={healthData[27].shortdescription}
            imageSrc={healthData[27].image}
            category={healthData[27].category}
            date={healthData[27].date}
            slug={healthData[27].slug}
          />
        </div>
      </div>
      <div className="row ">
        <div className="d-flex align-items-center">
          <h5 className="text-uppercase mb-0 me-2 fw-bold">Latest</h5>
          <div className="flex-grow-1 border-bottom"></div>
        </div>

        <div className="col-lg-8 border-end">
          <div className="border-bottom">
            <ArticleCard
              title={technologyData[30].title}
              imageAlt={technologyData[30].title}
              subtitle={technologyData[30].shortdescription}
              imageSrc={technologyData[30].image}
              category={technologyData[30].category}
            />
          </div>

          <div className="border-bottom">
            <ArticleCard
              title={technologyData[29].title}
              imageAlt={technologyData[29].title}
              subtitle={technologyData[29].shortdescription}
              imageSrc={technologyData[29].image}
              category={technologyData[29].category}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={lifestyleData[30].title}
              imageAlt={lifestyleData[30].title}
              subtitle={lifestyleData[30].shortdescription}
              imageSrc={lifestyleData[30].image}
              category={lifestyleData[30].category}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={lifestyleData[29].title}
              imageAlt={lifestyleData[29].title}
              subtitle={lifestyleData[29].shortdescription}
              imageSrc={lifestyleData[29].image}
              category={lifestyleData[29].category}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={sportsData[30].title}
              imageAlt={sportsData[30].title}
              subtitle={sportsData[30].shortdescription}
              imageSrc={sportsData[30].image}
              category={sportsData[30].category}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={sportsData[29].title}
              imageAlt={sportsData[29].title}
              subtitle={sportsData[29].shortdescription}
              imageSrc={sportsData[29].image}
              category={sportsData[29].category}
            />
          </div>
          <ArticleCard
            title={healthData[26].title}
            imageAlt={healthData[26].title}
            subtitle={healthData[26].shortdescription}
            imageSrc={healthData[26].image}
            category={healthData[26].category}
          />
        </div>

        <div className="col-lg-3">
          <SidebarProfile />
          <PopularNews
            data={[technologyData[28], lifestyleData[28], healthData[25]]}
          />
        </div>
      </div>
      <Newsletter />

      <div className="d-flex align-items-center py-3">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">Sports</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>
      <div className="row">
        <div className="col-lg-8 border-end">
          <NewsCard
            title={sportsData[27].title}
            imageAlt={sportsData[27].title}
            subtitle={sportsData[27].shortdescription}
            imageSrc={sportsData[27].image}
            category={sportsData[27].category}
            date={sportsData[27].date}
            slug={sportsData[27].slug}
          />
        </div>
        <div className="col-lg-4">
          <div className="py-2">
            
          </div>
          <FeaturedNews
            item={{
              category: sportsData[28].category,
              title: sportsData[28].title,
              date: sportsData[28].date,
              description: sportsData[28].shortdescription,
              imageSrc: sportsData[28].image, 
            }}
          />
        <div className="py-2"></div>
          <FeaturedNews
            item={{
              category: sportsData[26].category,
              title: sportsData[26].title,
              date: sportsData[26].date,
              description: sportsData[26].shortdescription,
              imageSrc: sportsData[26].image, 
            }}
          />
          <div className="py-2"></div>
          <FeaturedNews
            item={{
              category: sportsData[25].category,
              title: sportsData[25].title,
              date: sportsData[25].date,
              description: sportsData[25].shortdescription,
              imageSrc: sportsData[25].image, 
            }}
          />
          <div className="py-2"></div>
          <FeaturedNews
            item={{
              category: sportsData[24].category,
              title: sportsData[24].title,
              date: sportsData[24].date,
              description: sportsData[24].shortdescription,
              imageSrc: sportsData[24].image, 
            }}
          />
        </div>
        
      </div>
    </div>
    <Footer/>
    </>
  );
}
