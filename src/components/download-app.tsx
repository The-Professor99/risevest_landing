import phoneImage from "assets/phone.png";
import AppleLogo from "assets/apple_logo.svg";
import PlaystoreLogo from "assets/playstore_logo.svg";
import Typography from "./atoms/Typography";
import Button from "./atoms/Buttons";
import Image from "./atoms/Image";
import Container from "./atoms/Container";
import "./download-app.scss";

export default function DownloadApp() {
  return (
    <Container centerContent>
      <section className="download--app rounded-3xl p-sm">
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

          <div className="flex mt-lg mb-lg gap-3 ">
            <Button>
              <div>
                <img src={AppleLogo} alt="apple phone" />
                <Typography weight="light">
                  Download on the
                  <br />
                  <Typography variant="span" weight="bold">
                    App Store
                  </Typography>
                </Typography>
              </div>
            </Button>

            <Button>
              <div>
                <img src={PlaystoreLogo} alt="playstore" />

                <Typography weight="light">
                  Download on the
                  <br />
                  <Typography variant="span" weight="bold">
                    Google Play
                  </Typography>
                </Typography>
              </div>
            </Button>
          </div>
        </div>
        <div>
          <Image src={phoneImage} alt="Risevest app display on a phone" />
        </div>
      </section>
    </Container>
  );
}
