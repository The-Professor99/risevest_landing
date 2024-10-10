import phoneImage from "assets/phone.png";
import AppleLogo from "assets/apple_logo.svg";
import PlaystoreLogo from "assets/playstore_logo.svg";

export default function DownloadApp() {
  return (
    <section>
      <div>
        <p>Download The Rise App</p>
        <h2>Join our 100,000 users investing and setting long term goals!</h2>
        <p>Dollar investments that help you grow.</p>
        <div>
          <button>
            <span>
              <img src={AppleLogo} alt="apple phone" />
            </span>
            Download on the App Store
          </button>
          <button>
            <img src={PlaystoreLogo} alt="playstore" />
            Download on the Google Play
          </button>
        </div>
      </div>
      <div>
        <img src={phoneImage} alt="Risevest app display on a phone" />
      </div>
    </section>
  );
}
