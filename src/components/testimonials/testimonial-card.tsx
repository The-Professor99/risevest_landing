import Image from "components/atoms/Image";

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  tag: string;
  imgSrc: string;
  imgAlt: string;
}

export default function TestimonialCard({
  name,
  testimonial,
  tag,
  imgSrc,
  imgAlt,
}: TestimonialCardProps) {
  return (
    <article>
      <p>{testimonial}</p>
      <div>
        <Image src={imgSrc} alt={imgAlt} />
        <p>{name}</p>
        <em>{tag}</em>
      </div>
    </article>
  );
}
