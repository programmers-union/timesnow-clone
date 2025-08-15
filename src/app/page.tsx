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

export default function Home() {
  return (
    <div>
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
                title={businessData[30].title}
                imageAlt={businessData[30].title}
                subtitle={businessData[30].shortdescription}
                imageSrc={businessData[30].image}
                category={businessData[30].category}
                date={businessData[30].date}
                slug={businessData[30].slug}
              />
            </div>
            <div className="col-lg-6">
              <TextNewsCard
                title={businessData[30].title}
                category={businessData[30].category}
                subtitle={businessData[30].shortdescription}
              />
              <TextNewsCard
                title={businessData[30].title}
                category={businessData[30].category}
                subtitle={businessData[30].shortdescription}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">world</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>

      <div className="row py-3 g-0">
        <div className="col-lg-3 border-end">
          <NewsBox
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsBox
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsBox
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsBox
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
      </div>
      <div className="row py-3 g-0">
        <div className="col-lg-3 border-end">
          <NewsBox
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsBox
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsBox
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsBox
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">Arts</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>
      <div className="row g-3">
        <div className="col-lg-2 border-end">
          <RoundedCard
            imageSrc={businessData[30].image}
            title={businessData[30].title}
            subtitle={businessData[30].shortdescription}
          />
        </div>
        <div className="col-lg-2 border-end">
          <RoundedCard
            imageSrc={businessData[30].image}
            title={businessData[30].title}
            subtitle={businessData[30].shortdescription}
          />
        </div>
        <div className="col-lg-2 border-end">
          <RoundedCard
            imageSrc={businessData[30].image}
            title={businessData[30].title}
            subtitle={businessData[30].shortdescription}
          />
        </div>
        <div className="col-lg-2 border-end">
          <RoundedCard
            imageSrc={businessData[30].image}
            title={businessData[30].title}
            subtitle={businessData[30].shortdescription}
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
        imageSrc={businessData[30].image}
        title={businessData[30].title}
        subtitle={businessData[30].shortdescription}
        category={businessData[30].category}
        imageAlt={businessData[30].title}
      />

      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">Politics</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>

      <div className="row py-3">
        <div className="col-lg-3 border-end py-4">
          <OpinionCard
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <TextNewsCard
            title={businessData[30].title}
            category={businessData[30].category}
            subtitle={businessData[30].shortdescription}
          />
          <div>
            <TextNewsCard
              title={businessData[30].title}
              category={businessData[30].category}
              subtitle={businessData[30].shortdescription}
            />
          </div>
        </div>
        <div className="col-lg-6 ">
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
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-uppercase mb-0 me-2 fw-bold">Business</h5>
        <div className="flex-grow-1 border-bottom"></div>
      </div>
      <div className="row py-3">
        <div className="col-lg-3 border-end">
          <NewsCard2
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsCard2
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsCard2
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
          />
        </div>
        <div className="col-lg-3">
          <NewsCard2
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
            date={businessData[30].date}
            slug={businessData[30].slug}
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
              title={businessData[30].title}
              imageAlt={businessData[30].title}
              subtitle={businessData[30].shortdescription}
              imageSrc={businessData[30].image}
              category={businessData[30].category}
            />
          </div>

          <div className="border-bottom">
            <ArticleCard
              title={businessData[30].title}
              imageAlt={businessData[30].title}
              subtitle={businessData[30].shortdescription}
              imageSrc={businessData[30].image}
              category={businessData[30].category}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={businessData[30].title}
              imageAlt={businessData[30].title}
              subtitle={businessData[30].shortdescription}
              imageSrc={businessData[30].image}
              category={businessData[30].category}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={businessData[30].title}
              imageAlt={businessData[30].title}
              subtitle={businessData[30].shortdescription}
              imageSrc={businessData[30].image}
              category={businessData[30].category}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={businessData[30].title}
              imageAlt={businessData[30].title}
              subtitle={businessData[30].shortdescription}
              imageSrc={businessData[30].image}
              category={businessData[30].category}
            />
          </div>
          <div className="border-bottom">
            <ArticleCard
              title={businessData[30].title}
              imageAlt={businessData[30].title}
              subtitle={businessData[30].shortdescription}
              imageSrc={businessData[30].image}
              category={businessData[30].category}
            />
          </div>
          <ArticleCard
            title={businessData[30].title}
            imageAlt={businessData[30].title}
            subtitle={businessData[30].shortdescription}
            imageSrc={businessData[30].image}
            category={businessData[30].category}
          />
        </div>

        <div className="col-lg-3">
          <SidebarProfile />
          <PopularNews
            data={[businessData[30], businessData[30], businessData[30]]}
          />
        </div>
      </div>
    </div>
  );
}
