import featured1 from "assets/featured_section/featured_1.png";
import featured2 from "assets/featured_section/featured_2.png";
import featured3 from "assets/featured_section/featured_3.png";
import featured4 from "assets/featured_section/featured_4.png";
import React from "react";
import FeaturedCard from "./featured-card";
import Container from "components/atoms/Container";

export default function FeaturedSection() {
  const featured = [
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

  return (
    <Container maxWidth="md" padding="sm" centerContent>
      <section>
        {featured.map((feature) => (
          <React.Fragment key={feature.id}>
            <FeaturedCard
              title={feature.title}
              description={feature.description}
              buttonLink={feature.buttonLink}
              buttonText={feature.buttonText}
              imgAlt={feature.imgAlt}
              imgSrc={feature.imgSrc}
            />
          </React.Fragment>
        ))}
      </section>
    </Container>
  );
}
