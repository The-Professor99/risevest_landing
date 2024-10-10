import armLogo from "assets/arm.png";
import westernUnionLogo from "assets/western_union.png";
import techstarsLogo from "assets/techstars.jpg";
import venturesLogo from "assets/ventures_platform.png";

export default function Partners() {
  return (
    <article>
      <h2>We are supported by</h2>
      <div>
        <img src={armLogo} alt="ARM logo" />
        <img src={westernUnionLogo} alt="Western Union logo" />
        <img src={techstarsLogo} alt="Techstars logo" />
        <img src={venturesLogo} alt="Ventures Platform logo" />
      </div>
    </article>
  );
}
