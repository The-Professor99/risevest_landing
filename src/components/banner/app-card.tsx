import Button from "components/atoms/Buttons";
import Typography from "components/atoms/Typography";
import "./app-card.scss";

interface AppCardProps {
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  imgSrc: string;
}

export default function AppCard({
  title,
  description,
  buttonLink,
  buttonText,
  imgSrc,
}: AppCardProps) {
  return (
    <article
      className="appcard p-md rounded-3xl my-md"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="content--container mb-md">
        <Typography variant="h3" weight="bold">
          {title}
        </Typography>
        <Typography variant="p" className="my-md ">
          {description}
        </Typography>
        <Button
          href={buttonLink}
          className="p-none"
          weight="bold"
          size="medium"
        >
          {buttonText}
        </Button>
      </div>
    </article>
  );
}
