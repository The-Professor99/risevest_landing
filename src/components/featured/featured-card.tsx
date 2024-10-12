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
  mobileView: boolean;
}

export default function FeaturedCard({
  title,
  description,
  buttonLink,
  buttonText,
  imgSrc,
  imgAlt,
  mobileView,
}: FeaturedCardProps) {
  return (
    <article className="featured flex align-center flex-col justify-between md-flex-row">
      <div className="image--container">
        <Image src={imgSrc} alt={imgAlt} width={280} height={270} />
      </div>
      <div className="text--container md-w-half md-text-left">
        <Typography variant="h2" weight="bolder" className="mb-md">
          {title}
        </Typography>
        <Typography variant="p" className="my-sm ">
          {description}
        </Typography>

        {!mobileView && (
          <Button href={buttonLink} className="mt-md">
            {buttonText}
          </Button>
        )}
      </div>
    </article>
  );
}
