import Button from "components/atoms/Buttons";
import Image from "components/atoms/Image";
import Typography from "components/atoms/Typography";
import "./product-card.scss";

interface ProductCardProps {
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  imgSrc: string;
  imgAlt: string;
  historicalReturns: string;
  riskLevel: string;
  decorationColor: string;
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
  decorationColor,
}: ProductCardProps) {
  return (
    <article className="product--card ">
      <div
        className="visual--decoration-block"
        style={{ backgroundColor: `${decorationColor}` }}
      ></div>
      <div className="product--container">
        <div className="image--container">
          <Image src={imgSrc} alt={imgAlt} className="rounded-full" />
        </div>
        <div className="p-sm">
          <Typography
            variant="h3"
            weight="bold"
            size="large"
            className="product--title m-md"
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            weight="light"
            className="product--description my-md"
          >
            {description}
          </Typography>
          <div>
            <Typography variant="strong" weight="light">
              <Typography variant="span">Historical Returns: </Typography>{" "}
              <Typography variant="em">{historicalReturns}</Typography>
            </Typography>
            <br />
            <Typography variant="strong" weight="light">
              <Typography variant="span">Risk Level: </Typography>
              <Typography variant="em">{riskLevel}</Typography>
            </Typography>
          </div>

          <Button
            href={buttonLink}
            className="mt-12 mb-md"
            weight="bold"
            size="medium"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </article>
  );
}
