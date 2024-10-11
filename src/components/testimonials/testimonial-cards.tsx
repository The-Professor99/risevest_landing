import lade from "assets/testimonials/lade.jpg";
import TestimonialCard from "./testimonial-card";
import React from "react";

export default function TestimonialCards() {
  const testimonials = [
    {
      id: 1,
      name: "Lade",
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
      name: "Lade",
      tag: "UX Researcher",
      testimonial:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      imgSrc: lade,
      imgAlt: "Lade holding a camera",
    },

    {
      id: 4,
      name: "Lade",
      tag: "UX Researcher",
      testimonial:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      imgSrc: lade,
      imgAlt: "Lade holding a camera",
    },
  ];
  return (
    <div>
      {testimonials.map((testimonial) => (
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
