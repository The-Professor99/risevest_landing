import Typography from "components/atoms/Typography";
import TestimonialCards from "./testimonial-cards";

export default function Testimonials() {
  return (
    <section className="center">
      <Typography weight="bold" size="large" variant="h2" color="primary">
        What our customers are saying
      </Typography>

      {/* <Typography weight="bolder" size="large" variant="h2" color="primary">
        From The People Who Use Rise
      </Typography> */}
      {/* <Typography>
        Our mission at Risevest is to empower more people just like you to
        achieve your personal financial goals.
      </Typography> */}

      <Typography>We serve over 80,000 amazing users.</Typography>

      <TestimonialCards />
    </section>
  );
}
