import useDocumentDimensions from "lib/hooks";
import Container from "./atoms/Container";
import Typography from "./atoms/Typography";
import "./regulation.scss";

export default function Regulation() {
  const { width } = useDocumentDimensions();
  const mobileView = width < 768;
  return (
    <div className="regulation--container py-sm">
      <article className="regulation">
        <Container centerContent className="regulation--text-container-main">
          <div className="regulation--text-container">
            <Typography
              variant="h2"
              weight="bold"
              size="xlarge"
              className="m-md tracking-tight"
              color="secondary"
              scale
            >
              How we are Regulated
            </Typography>
            <Typography
              fontType="secondaryText"
              weight="semi-bold"
              color="tertiary"
              scale
            >
              {!mobileView
                ? `
            Rise is registered and regulated both in the US and in Nigeria. Our
            team is made up of US registered investment advisers, our Nigerian
            users are covered by our SEC licensed trustees, ARM Trustees and all
            our assets are held with regulated third parties, in all relevant
            jurisdictions`
                : `
              Rise is registered and regulated both in the US and in Nigeria.
              The founder is registered as an investment adviser with the US
              SEC. The Nigerian SEC regulates Rise's Nigerian investments
              through a trusteeship agreement with ARM Trustees, who oversees
              investments on behalf of the users. And a registered investment
              subsidiary holds all users' assets regulated in the US`}
            </Typography>
          </div>
        </Container>
      </article>
    </div>
  );
}
