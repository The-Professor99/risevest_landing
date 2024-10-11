import member1 from "assets/community/member1.jpg";
import member2 from "assets/community/member2.jpg";
import member3 from "assets/community/member3.jpg";
import member4 from "assets/community/member4.jpg";
import Image from "components/atoms/Image";

import "./community-image.scss";

export default function CommunityImages() {
  return (
    <div className="community--images flex flex-col align-center">
      <div className="h-20 w-20">
        <Image
          src={member1}
          alt="A man smiling"
          className="rounded-full w-full h-full object-cover mb-md ml-sm"
        />
      </div>
      <div className="w-full flex justify-around">
        <div className="h-20 w-20 mt-sm mr-md">
          <Image
            src={member2}
            alt="A man with sunglasses on"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="h-20 w-20 mb-lg">
          <Image
            src={member3}
            alt="five ladies posing for a group photograph"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="h-20 w-20 mr-sm">
        <Image
          src={member4}
          alt="A lady smiling"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
