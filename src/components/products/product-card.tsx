import Button from "components/atoms/Buttons";
import Image from "components/atoms/Image";
import Typography from "components/atoms/Typography";

interface ProductCardProps {
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  imgSrc: string;
  imgAlt: string;
  historicalReturns: string;
  riskLevel: string;
}

export default function ProductCard({
  title,
  description,
  buttonLink,
  buttonText,
  imgSrc,
  imgAlt,
  historicalReturns,
  riskLevel,
}: ProductCardProps) {
  return (
    <article>
      <Image src={imgSrc} alt={imgAlt} />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="p">{description}</Typography>
      <div>
        <Typography variant="strong">
          <Typography variant="span">Historical Returns: </Typography>{" "}
          <Typography variant="em">{historicalReturns}</Typography>
        </Typography>
        <Typography variant="strong">
          <Typography variant="span">Risk Level: </Typography>{" "}
          <Typography variant="em">{riskLevel}</Typography>
        </Typography>
      </div>

      <Button href={buttonLink}>{buttonText}</Button>
    </article>
  );
}
