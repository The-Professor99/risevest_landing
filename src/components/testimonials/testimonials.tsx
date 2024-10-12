import Typography from "components/atoms/Typography";
import TestimonialCards from "./testimonial-cards";
import useDocumentDimensions from "lib/hooks";

export default function Testimonials() {
  const { width } = useDocumentDimensions();
  const mobileView = width < 768;

  return (
    <section className="center">
      <Typography weight="bold" size="xlarge" variant="h2" color="accent" scale>
        {!mobileView
          ? "From The People Who Use Rise"
          : "What our customers are saying"}
      </Typography>

      <Typography
        fontType="secondaryText"
        weight="semi-bold"
        size="small"
        color="tertiary"
        scale
        className="pt-md pb-lg"
      >
        {!mobileView
          ? `Our mission at Risevest is to empower more people just like you to
        achieve your personal financial goals.`
          : "We serve over 80,000 amazing users."}
      </Typography>

      <TestimonialCards />
    </section>
  );
}
