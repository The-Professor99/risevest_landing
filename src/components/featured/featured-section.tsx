import featured1 from "assets/featured_section/featured_1.png";
import featured2 from "assets/featured_section/featured_2.png";
import featured3 from "assets/featured_section/featured_3.png";
import featured4 from "assets/featured_section/featured_4.png";
import React from "react";
import FeaturedCard from "./featured-card";
import Container from "components/atoms/Container";
import useDocumentDimensions from "lib/hooks";

export default function FeaturedSection() {
  const { width, height } = useDocumentDimensions();

  const featuredTablet = [
    {
      id: 1,
      title: "Invest your money in dollars",
      description:
        "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
      buttonLink: "#",
      buttonText: "Start Investing Now",
      imgSrc: featured1,
      imgAlt: "A woman looking at a frame with 1 written on it",
    },
    {
      id: 2,
      title: "Choose what's best for you",
      description:
        "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.",
      buttonLink: "#",
      buttonText: "Start Investing Now",
      imgSrc: featured2,
      imgAlt: "A woman reading a book",
    },

    {
      id: 3,
      title: "Set goals and reach them",
      description:
        "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.",
      buttonLink: "#",
      buttonText: "Start Investing Now",
      imgSrc: featured3,
      imgAlt: "A woman in a spacesuit",
    },

    {
      id: 4,
      title: "We remember so you dont have to",
      description:
        "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.",
      buttonLink: "#",
      buttonText: "Start Investing Now",
      imgSrc: featured4,
      imgAlt: "A man ringing a bell",
    },
  ];

  const featuredMobile = [
    {
      id: 1,
      title: "Superior Performance",
      description:
        "Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. ",
      imgSrc: featured1,
      buttonLink: "#",
      buttonText: "Start Investing Now",
      imgAlt: "A woman looking at a frame with 1 written on it",
    },
    {
      id: 2,
      title: "Personalization",
      description:
        "No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you.",

      imgSrc: featured2,
      buttonLink: "#",
      buttonText: "Start Investing Now",
      imgAlt: "A woman reading a book",
    },
    {
      id: 3,
      title: "Diversification",
      description:
        "Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or",
      imgSrc: featured3,
      buttonLink: "#",
      buttonText: "Start Investing Now",
      imgAlt: "A woman in a spacesuit",
    },
  ];

  const mobileView = width < 768;
  const homepageFeatured = mobileView ? featuredMobile : featuredTablet;

  return (
    <Container padding="sm" centerContent>
      <section className="featured--section">
        {homepageFeatured.map((feature) => (
          <React.Fragment key={feature.id}>
            <FeaturedCard
              title={feature.title}
              description={feature.description}
              imgAlt={feature.imgAlt}
              imgSrc={feature.imgSrc}
              buttonLink={feature?.buttonLink}
              buttonText={feature?.buttonText}
              mobileView={mobileView}
            />
          </React.Fragment>
        ))}
      </section>
    </Container>
  );
}
