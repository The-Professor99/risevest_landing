import armLogo from "assets/arm.png";
import westernUnionLogo from "assets/western_union.png";
import techstarsLogo from "assets/techstars.jpg";
import venturesLogo from "assets/ventures_platform.png";
import Container from "./atoms/Container";
import Image from "./atoms/Image";
import React from "react";

const Partner = ({
  imgSrc,
  imgAlt,
  imgLink,
}: {
  imgSrc: string;
  imgAlt: string;
  imgLink: string;
}) => {
  return (
    <div>
      <a href={imgLink}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-full object-contain "
        />
      </a>
    </div>
  );
};

export default function Partners() {
  const partners = [
    { id: 1, imgSrc: armLogo, imgAlt: "ARM Logo", imgLink: "#" },
    {
      id: 2,
      imgSrc: westernUnionLogo,
      imgAlt: "Western Union logo",
      imgLink: "#",
    },
    { id: 3, imgSrc: techstarsLogo, imgAlt: "Techstars logo", imgLink: "#" },
    {
      id: 4,
      imgSrc: venturesLogo,
      imgAlt: "Ventures Platform logo",
      imgLink: "#",
    },
  ];
  return (
    <Container>
      <article>
        <h2>We are supported by</h2>
        <div className="flex h-16">
          {partners.map((partner) => (
            <React.Fragment key={partner.id}>
              <Partner
                imgAlt={partner.imgAlt}
                imgLink={partner.imgLink}
                imgSrc={partner.imgSrc}
              />
            </React.Fragment>
          ))}
        </div>
      </article>
    </Container>
  );
}
