import Button from "components/atoms/Buttons";
import Image from "components/atoms/Image";
import Typography from "components/atoms/Typography";

interface AppCardProps {
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  imgSrc: string;
  imgAlt: string;
}

export default function AppCard({
  title,
  description,
  buttonLink,
  buttonText,
  imgSrc,
  imgAlt,
}: AppCardProps) {
  return (
    <article>
      <Image src={imgSrc} alt={imgAlt} />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="p">{description}</Typography>
      <Button href={buttonLink}>{buttonText}</Button>
    </article>
  );
}
