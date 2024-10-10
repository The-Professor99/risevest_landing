import phoneImage from "assets/phone.png";
import AppleLogo from "assets/apple_logo.svg";
import PlaystoreLogo from "assets/playstore_logo.svg";

export default function Hero() {
  return (
    <section>
      <div>
        <h2>Dollar investments that help you grow</h2>
        <p>
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>
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
