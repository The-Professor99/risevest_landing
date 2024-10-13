import Button from "components/atoms/Buttons";
import Image from "components/atoms/Image";
import Typography from "components/atoms/Typography";
import "./product-card.scss";
import { ArrowRight } from "components/atoms/Icons";

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
          <div className="product--text-container">
            <Typography
              variant="h3"
              weight="bold"
              size="medium"
              className="product--title m-md"
              color="tertiary"
            >
              {title}
            </Typography>
            <Typography
              variant="p"
              className="product--description my-md"
              fontType="secondaryText"
              color="tertiary"
            >
              {description}
            </Typography>
            <div>
              <Typography variant="strong">
                <Typography variant="span">Historical Returns: </Typography>{" "}
                <Typography variant="em">{historicalReturns}</Typography>
              </Typography>
              <br />
              <Typography variant="strong">
                <Typography variant="span">Risk Level: </Typography>
                <Typography variant="em">{riskLevel}</Typography>
              </Typography>
            </div>
          </div>

          <Button
            href={buttonLink}
            className="mt-12 mb-md"
            weight="bold"
            size="medium"
          >
            {buttonText}
            <ArrowRight className="ml-sm" />
          </Button>
        </div>
      </div>
    </article>
  );
}
