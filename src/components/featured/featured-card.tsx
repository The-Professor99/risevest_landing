import Button from "components/atoms/Buttons";
import Image from "components/atoms/Image";
import Typography from "components/atoms/Typography";

interface FeaturedCardProps {
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
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
    <article>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="p">{description}</Typography>

      <Button href={buttonLink}>{buttonText}</Button>

      <div>
        <Image src={imgSrc} alt={imgAlt} />
      </div>
    </article>
  );
}
