import lade from "assets/testimonials/lade.jpg";
import TestimonialCard from "./testimonial-card";
import React from "react";
import useDocumentDimensions from "lib/hooks";

export default function TestimonialCards() {
  const { width } = useDocumentDimensions();
  const mobileView = width < 768;
  const testimonials = [
    {
      id: 1,
      name: "Raye",
      tag: "UX Researcher",
      testimonial:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      imgSrc: lade,
      imgAlt: "Lade holding a camera",
    },

    {
      id: 2,
      name: "Lade",
      tag: "UX Researcher",
      testimonial:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      imgSrc: lade,
      imgAlt: "Lade holding a camera",
    },

    {
      id: 3,
      name: "Jesse",
      tag: "UX Researcher",
      testimonial:
        "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      imgSrc: lade,
      imgAlt: "Lade holding a camera",
    },

    {
      id: 4,
      name: "Lade",
      tag: "UX Researcher",
      testimonial:
        "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      imgSrc: lade,
      imgAlt: "Lade holding a camera",
    },
  ];

  //   implement carousel
  const testimonialsDisplayed = !mobileView
    ? testimonials.slice(0, 3)
    : testimonials.slice(0, 1);
  return (
    <div className="flex">
      {testimonialsDisplayed.map((testimonial) => (
        <React.Fragment key={testimonial.id}>
          <TestimonialCard
            name={testimonial.name}
            tag={testimonial.tag}
            testimonial={testimonial.testimonial}
            imgSrc={testimonial.imgSrc}
            imgAlt={testimonial.imgAlt}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
