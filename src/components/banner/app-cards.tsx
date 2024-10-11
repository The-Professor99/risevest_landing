import buildWealth from "assets/appcard/build_wealth.jpg";
import React from "react";
import AppCard from "./app-card";

export default function AppCards() {
  const appCards = [
    {
      id: 1,
      title: "Build Wealth",
      description:
        "Invest for long-term goals like retirement with this plan. It’s your financial freedom partner.",
      buttonLink: "#",
      buttonText: "Start Investing",
      imgSrc: buildWealth,
      imgAlt: "Stacked Coins",
    },
    {
      id: 2,
      title: "Build Wealth",
      description:
        "Invest for long-term goals like retirement with this plan. It’s your financial freedom partner.",
      buttonLink: "#",
      buttonText: "Start Investing",
      imgSrc: buildWealth,
      imgAlt: "Stacked Coins",
    },

    {
      id: 3,
      title: "Build Wealth",
      description:
        "Invest for long-term goals like retirement with this plan. It’s your financial freedom partner.",
      buttonLink: "#",
      buttonText: "Start Investing",
      imgSrc: buildWealth,
      imgAlt: "Stacked Coins",
    },

    {
      id: 4,
      title: "Build Wealth",
      description:
        "Invest for long-term goals like retirement with this plan. It’s your financial freedom partner.",
      buttonLink: "#",
      buttonText: "Start Investing",
      imgSrc: buildWealth,
      imgAlt: "Stacked Coins",
    },
  ];
  return (
    <div>
      {appCards.map((appCard) => (
        <React.Fragment key={appCard.id}>
          <AppCard
            title={appCard.title}
            description={appCard.description}
            buttonLink={appCard.buttonLink}
            buttonText={appCard.buttonText}
            imgSrc={appCard.imgSrc}
            imgAlt={appCard.imgAlt}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
