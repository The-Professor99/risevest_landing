import Typography from "./atoms/Typography";
import Container from "./atoms/Container";
import "./download-app.scss";
import AppstoreButtons from "./appstore-buttons";
import PhoneBody from "./phone-body";

export default function DownloadApp() {
  return (
    <Container centerContent>
      <section className="download--app rounded-3xl p-sm pb-none">
        <div>
          <Typography variant="h2" color="primary" className="mt-lg mb-md">
            Download The Rise App
          </Typography>
          <Typography variant="h3" weight="bold">
            Join our 100,000 users investing and setting long term goals!
          </Typography>

          <Typography weight="bold" className="mt-md mb-lg">
            Dollar investments that help you grow.
          </Typography>

          <AppstoreButtons />
        </div>
        <div className="h-32 overflow-hidden">
          <PhoneBody />
        </div>
      </section>
    </Container>
  );
}
