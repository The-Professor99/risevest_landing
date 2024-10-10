import featured1 from "assets/featured_section/featured_1.png";
import featured2 from "assets/featured_section/featured_2.png";
import featured3 from "assets/featured_section/featured_3.png";
import featured4 from "assets/featured_section/featured_4.png";

export default function FeaturedSection() {
  return (
    <>
      <section>
        <article>
          <h2>Invest your money in dollars</h2>
          <p>
            By holding your investments in a stable currency, your money grows
            more over time and retains its value better.
          </p>

          <a href="#">Start Investing Now</a>

          <div>
            <img
              src={featured1}
              alt="A woman looking at a frame with 1 written on it"
            />
          </div>
        </article>
      </section>

      <section>
        <article>
          <div>
            <img src={featured2} alt="A woman reading a book" />
          </div>

          <h2>Choose what's best for you</h2>
          <p>
            Unlike other platforms, Rise lets you pick between stocks, US real
            estate and fixed income, according to your risk appetite. That way
            you can spread your risk and tap into different investments all in
            one place.
          </p>

          <a href="#">Start Investing Now</a>
        </article>
      </section>

      <section>
        <article>
          <h2>Set goals and reach them</h2>
          <p>
            You can invest towards a goal on Rise--retirement, higher education,
            save for your home or travel budgets. Or create a goal of your own
            and invest periodically to achieve them.{" "}
          </p>

          <a href="#">Start Investing Now</a>

          <div>
            <img src={featured3} alt="A woman in a spacesuit" />
          </div>
        </article>
      </section>

      <section>
        <article>
          <div>
            <img src={featured4} alt="A man ringing a bell" />
          </div>
          <h2>We remember so you dont have to</h2>
          <p>
            Our Auto-invest feature makes it easy to stay consistent, even when
            you forget. Set a funding amount, frequency and payment method and
            Rise will automatically fund your investment, on schedule.{" "}
          </p>

          <a href="#">Start Investing Now</a>
        </article>
      </section>
    </>
  );
}
