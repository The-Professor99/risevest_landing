import Typography from "./atoms/Typography";
import Container from "./atoms/Container";
import "./download-app.scss";
import AppstoreButtons from "./appstore-buttons";
import PhoneBody from "./phone-body";

export default function DownloadApp() {
  return (
    <Container centerContent>
      <section className="download--app rounded-3xl p-sm pb-none w-full md-d-flex justify-between align-center pt-lg md-pl-lg md-pr-24">
        <div className="md-text-left appdownload--text-container">
          <Typography
            variant="h2"
            weight="semi-bold"
            fontType="secondaryText"
            className="mt-lg mb-md"
          >
            Download The Rise App
          </Typography>
          <Typography
            variant="h3"
            weight="bold"
            size="large"
            color="secondary"
            scale
            className="tracking-tight"
          >
            Join our 100,000 users investing and setting long term goals!
          </Typography>

          <Typography
            weight="semi-bold"
            color="tertiary"
            fontType="secondaryText"
            className="mt-md mb-lg"
          >
            Dollar investments that help you grow.
          </Typography>

          <AppstoreButtons />
        </div>
        <div className="h-32 overflow-hidden md-h-80">
          <PhoneBody />
        </div>
      </section>
    </Container>
  );
}
