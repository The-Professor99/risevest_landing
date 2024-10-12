import CommunityImages from "./community-image";
import Typography from "components/atoms/Typography";
import Button from "components/atoms/Buttons";
import Container from "components/atoms/Container";
import useDocumentDimensions from "lib/hooks";

export default function Community() {
  const { width, height } = useDocumentDimensions();

  const mobileView = width < 768;
  return (
    <Container centerContent>
      <article className="w-full justify-between align-center md-d-flex">
        <CommunityImages />

        <div className="md-w-half md-text-left">
          <Typography variant="h2" weight="bold" className="mt-lg">
            Join The Rise Community
          </Typography>

          <Typography className="my-md">
            If you want to go far, go together.{" "}
            {!mobileView && (
              <Typography variant="span">
                Our Telegram community surrounds you with others who can help
                you along your financial journey with tips, support, advice and
                learning. It's completely free and open to new and seasoned
                investors.
              </Typography>
            )}
          </Typography>

          <Button onClick={() => {}} className="mb-sm ">
            Join our Community
          </Button>
        </div>
      </article>
    </Container>
  );
}
