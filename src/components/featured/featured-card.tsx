import Button from "components/atoms/Buttons";
import Image from "components/atoms/Image";
import Typography from "components/atoms/Typography";
import "./featured-card.scss";

interface FeaturedCardProps {
  title: string;
  description: string;
  buttonLink?: string;
  buttonText?: string;
  imgSrc: string;
  imgAlt: string;
}

export default function FeaturedCard({
  title,
  description,
  buttonLink,
  buttonText,
  imgSrc,
  imgAlt,
}: FeaturedCardProps) {
  return (
    <article className="featured">
      <div className="image--container">
        <Image src={imgSrc} alt={imgAlt} width={280} height={270} />
      </div>
      <div className="text--container">
        <Typography variant="h2" weight="bolder">
          {title}
        </Typography>
        <Typography variant="p">{description}</Typography>

        {buttonLink && buttonText && (
          <Button href={buttonLink}>{buttonText}</Button>
        )}
      </div>
    </article>
  );
}
