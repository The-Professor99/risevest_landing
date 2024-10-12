import CommunityImages from "./community-image";
import Typography from "components/atoms/Typography";
import Button from "components/atoms/Buttons";
import Container from "components/atoms/Container";

export default function Community() {
  return (
    <Container centerContent>
      <article className="w-full">
        <CommunityImages />

        <div>
          <Typography variant="h2" weight="bold" className="mt-lg">
            Join The Rise Community
          </Typography>

          <Typography className="m-md">
            If you want to go far, go together.
            {/* <Typography variant="span">
          Our Telegram community surrounds you with others who can help you
          along your financial journey with tips, support, advice and learning.
          It's completely free and open to new and seasoned investors.
        </Typography> */}
          </Typography>

          <Button onClick={() => {}} className="mb-sm">
            Join our Community
          </Button>
        </div>
      </article>
    </Container>
  );
}
