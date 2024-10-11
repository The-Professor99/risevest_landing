import Image from "components/atoms/Image";
import Typography from "components/atoms/Typography";
import "./testimonial-card.scss";

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
    <article className="testimonial m-md p-sm pt-md pb-md rounded-lg">
      <Typography>{testimonial}</Typography>
      <div className="flex flex-col align-center">
        <div className="w-8 h-8 my-md">
          <Image
            src={imgSrc}
            alt={imgAlt}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <Typography variant="h3" weight="bold">
          {name}
        </Typography>
        <Typography variant="em" className="mt-sm">
          {tag}
        </Typography>
      </div>
    </article>
  );
}
