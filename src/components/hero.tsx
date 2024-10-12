import Typography from "./atoms/Typography";
import AppstoreButtons from "./appstore-buttons";
import Container from "./atoms/Container";
import PhoneBody from "./phone-body";
import "./hero.scss";

export default function Hero() {
  return (
    <Container padding="none" centerContent>
      <section className="hero align-center justify-between w-full justify-between pt-md md-d-flex md-text-left">
        <div className="md-w-half">
          <Typography variant="h1" color="primary" weight="bold">
            Dollar investments that help you grow
          </Typography>
          <Typography className="my-md">
            We put your money in high quality assets that help you build wealth
            and achieve your financial goals.
          </Typography>

          <AppstoreButtons />
        </div>
        <PhoneBody />
      </section>
    </Container>
  );
}
