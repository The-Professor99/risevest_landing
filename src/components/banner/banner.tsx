import Typography from "components/atoms/Typography";
import AppOutlook from "./app-outlook";
import Button from "components/atoms/Buttons";
import useDocumentDimensions from "lib/hooks";

export default function Banner() {
  const { width } = useDocumentDimensions();
  if (width < 768) {
    return;
  }
  return (
    <section>
      <AppOutlook />
      <article>
        <Typography variant="p" weight="bold">
          The Rise App
        </Typography>
        <Typography variant="h2" weight="bold" className="my-md">
          Save for your future
        </Typography>
        <Typography className="my-md">
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future and more.
        </Typography>
        <Button>Start Saving</Button>
      </article>
    </section>
  );
}
