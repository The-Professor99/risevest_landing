import CommunityImages from "./community-image";
import Typography from "components/atoms/Typography";
import Button from "components/atoms/Buttons";
import Container from "components/atoms/Container";
import useDocumentDimensions from "lib/hooks";

export default function Community() {
  const { width } = useDocumentDimensions();

  const mobileView = width < 768;
  return (
    <Container centerContent padding="none">
      <article className="w-full justify-between align-center md-d-flex py-md pl-md pr-sm">
        <CommunityImages />

        <div className="md-w-half md-text-left">
          <Typography
            variant="h2"
            weight="bold"
            size="xlarge"
            color="secondary"
            className="mt-lg tracking-tight"
            scale
          >
            Join The Rise Community
          </Typography>

          <Typography
            className="my-md"
            fontType="secondaryText"
            color="secondary"
          >
            If you want to go far, go together.{" "}
            {!mobileView &&
              `
                Our Telegram community surrounds you with others who can help
                you along your financial journey with tips, support, advice and
                learning. It's completely free and open to new and seasoned
                investors.
            `}
          </Typography>

          <Button
            onClick={() => {}}
            className="mb-sm px-lg py-md"
            weight="bold"
            variant="tertiary"
          >
            Join our Community
          </Button>
        </div>
      </article>
    </Container>
  );
}
