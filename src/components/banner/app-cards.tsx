import buildWealth from "assets/appcard/build_wealth.jpg";
import saveKid from "assets/appcard/save_kid.jpg";
// import planWedding from "assets/appcard/plan_wedding.png";
import saveSchool from "assets/appcard/save_school.jpg";

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
    },
    {
      id: 2,
      title: "Save for School",
      description:
        "In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work.",
      buttonLink: "#",
      buttonText: "Start Investing",
      imgSrc: saveSchool,
    },

    // {
    //   id: 3,
    //   title: "Plan a Wedding",
    //   description:
    //     "In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work.",
    //   buttonLink: "#",
    //   buttonText: "Start Investing",
    //   imgSrc: planWedding,
    // },

    {
      id: 4,
      title: "Save for Kid",
      description:
        "In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work.",
      buttonLink: "#",
      buttonText: "Start Investing",
      imgSrc: saveKid,
    },
  ];
  return (
    <div>
      {/* Showing 1 cause wasn't able to implement a carousel with time given */}
      {appCards.slice(0, 1).map((appCard) => (
        <React.Fragment key={appCard.id}>
          <AppCard
            title={appCard.title}
            description={appCard.description}
            buttonLink={appCard.buttonLink}
            buttonText={appCard.buttonText}
            imgSrc={appCard.imgSrc}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
