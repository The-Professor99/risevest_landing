import Typography from "./atoms/Typography";
import AppstoreButtons from "./appstore-buttons";
import Container from "./atoms/Container";
import PhoneBody from "./phone-body";
import "./hero.scss";
import useDocumentDimensions from "lib/hooks";

export default function Hero() {
  const { width } = useDocumentDimensions();
  const mobileView = width < 768;
  return (
    <Container padding="none" centerContent>
      <section className="hero align-center justify-between w-full justify-between pt-md md-d-flex md-text-left md-pr-lg">
        <div className="hero--text-container md-w-half p-sm">
          <Typography
            variant="h1"
            color="primary"
            weight="bold"
            size="xl2"
            scale
            className="hero--header tracking-tighter"
          >
            <span>Dollar investments that help you grow</span>
          </Typography>
          <Typography
            className="my-md px-sm md-px-none"
            fontType="secondaryText"
            weight="semi-bold"
            color="tertiary"
          >
            {!mobileView
              ? `We put your money in high quality assets that help you build wealth
            and achieve your financial goals.`
              : ` Your personal wealth manager. Get started with a minimum of $10 and`}
          </Typography>

          <AppstoreButtons />
        </div>
        <PhoneBody />
      </section>
    </Container>
  );
}
