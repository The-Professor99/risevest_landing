import Button from "components/atoms/Buttons";
import Image from "components/atoms/Image";
import Typography from "components/atoms/Typography";
import "./featured-card.scss";
import { ArrowRight } from "components/atoms/Icons";

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
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={280}
          height={270}
          className="md-w-full"
        />
      </div>
      <div className="featured--text-container md-w-half md-text-left">
        <Typography
          variant="h2"
          weight="bold"
          className="mb-md tracking-tight md-tracking-tighter"
          size="large"
          color="secondary"
          scale
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          className="my-sm "
          fontType="secondaryText"
          color="tertiary"
          weight="semi-bold"
        >
          {description}
        </Typography>

        {!mobileView && (
          <Button
            href={buttonLink}
            className="mt-md"
            weight="semi-bold"
            size="medium"
          >
            {buttonText}

            <ArrowRight className="ml-sm" />
          </Button>
        )}
      </div>
    </article>
  );
}
