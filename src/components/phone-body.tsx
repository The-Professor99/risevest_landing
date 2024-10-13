import Image from "./atoms/Image";
import fullPhone from "assets/full_phone.png";

export default function PhoneBody() {
  return (
    <div className="phone--body flex justify-center">
      <Image
        src={fullPhone}
        alt="Risevest app display on a phone"
        loading="eager"
      />
    </div>
  );
}
