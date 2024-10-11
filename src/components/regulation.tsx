import Container from "./atoms/Container";
import Typography from "./atoms/Typography";
import "./regulation.scss";

export default function Regulation() {
  return (
    <div className="regulation--container">
      <article className="regulation">
        <Container centerContent>
          <div>
            <Typography
              variant="h2"
              weight="bold"
              size="large"
              className="m-md"
            >
              How we are Regulated
            </Typography>
            {/* <Typography>
            Rise is registered and regulated both in the US and in Nigeria. Our
            team is made up of US registered investment advisers, our Nigerian
            users are covered by our SEC licensed trustees, ARM Trustees and all
            our assets are held with regulated third parties, in all relevant
            jurisdictions
          </Typography> */}
            <Typography>
              Rise is registered and regulated both in the US and in Nigeria.
              The founder is registered as an investment adviser with the US
              SEC. The Nigerian SEC regulates Rise's Nigerian investments
              through a trusteeship agreement with ARM Trustees, who oversees
              investments on behalf of the users. And a registered investment
              subsidiary holds all users' assets regulated in the US
            </Typography>
          </div>
        </Container>
      </article>
    </div>
  );
}
