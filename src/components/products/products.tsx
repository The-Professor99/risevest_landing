import stocks from "assets/products/stocks.png";
import realEstate from "assets/products/real_estate.png";
import fixedIncome from "assets/products/fixed_income.png";
import React from "react";
import ProductCard from "./product-card";
import Typography from "components/atoms/Typography";
import Container from "components/atoms/Container";
import "./products.scss";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Stocks",
      description:
        "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      buttonLink: "#",
      buttonText: "Learn how Stocks work",
      imgSrc: stocks,
      imgAlt: "Stocks Visualization",
      historicalReturns: "14% per annum",
      riskLevel: "Medium",
      decorationColor: "#FFF4F0",
    },
    {
      id: 2,
      title: "Real Estate",
      description:
        "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
      buttonLink: "#",
      buttonText: "Learn how Real Estate work",
      imgSrc: realEstate,
      imgAlt: "Real Estate visualization",
      historicalReturns: "14% per annum",
      riskLevel: "Medium",
      decorationColor: "#F6F2FF",
    },
    {
      id: 3,
      title: "Fixed Income",
      description:
        "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
      buttonLink: "#",
      buttonText: "Learn how Fixed Income work",
      imgSrc: fixedIncome,
      imgAlt: "Fixed Income visualization",
      historicalReturns: "14% per annum",
      riskLevel: "Medium",
      decorationColor: "#ECFEFE",
    },
  ];
  return (
    <Container padding="none" centerContent>
      <section className="center w-full mt-lg">
        <div className="pt-md">
          <Typography
            variant="h2"
            size="xlarge"
            weight="bold"
            color="secondary"
            scale
            className="tracking-tight"
          >
            Asset Classes
          </Typography>
          <Typography
            fontType="secondaryText"
            color="secondary"
            className="mt-sm mb-md"
          >
            It’s your money, choose where you invest it
          </Typography>
        </div>

        <div className="products--container flex flex-col gap-16 align-center md-align-stretch justify-center md-flex-row lg-justify-between">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ProductCard
                title={product.title}
                description={product.description}
                buttonLink={product.buttonLink}
                buttonText={product.buttonText}
                imgAlt={product.imgAlt}
                imgSrc={product.imgSrc}
                historicalReturns={product.historicalReturns}
                riskLevel={product.riskLevel}
                decorationColor={product.decorationColor}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </Container>
  );
}
