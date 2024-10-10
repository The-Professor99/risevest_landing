import stocks from "assets/products/stocks.png";
import realEstate from "assets/products/real_estate.png";
import fixedIncome from "assets/products/fixed_income.png";

export default function Products() {
  return (
    <section>
      <div>
        <h2>Asset Classes</h2>
        <p>It’s your money, choose where you invest it</p>
      </div>

      <div>
        <article>
          <img src={stocks} alt="Stocks visualization" />
          <h3>Stocks</h3>
          <p>
            We help you invest and manage your money by investing in our
            portfolio of 30 high-growth stocks across the US market with our
            equity portfolio of power stocks.
          </p>

          <div>
            <strong>
              <span>Historical returns:</span> <em>14% per annum</em>
            </strong>
            <strong>
              <span>Risk Level:</span> <em>Medium</em>
            </strong>
          </div>

          <a href="#">Learn how Stocks work</a>
        </article>

        <article>
          <img src={realEstate} alt="Real Estate visualization" />
          <h3>Real Estate</h3>
          <p>
            Our Real Estate plan is the sweet middle. Best for those who want a
            balance of good returns and medium risk. This plan invests in rented
            buildings in the US.
          </p>

          <div>
            <strong>
              <span>Historical returns:</span> <em>14% per annum</em>
            </strong>
            <strong>
              <span>Risk Level:</span> <em>Medium</em>
            </strong>
          </div>

          <a href="#">Learn how Real Estate work</a>
        </article>

        <article>
          <img src={fixedIncome} alt="Fixed Income visualization" />
          <h3>Fixed Income</h3>
          <p>
            A low-risk asset perfect for anyone who wants to protect their money
            in a secure, appreciating currency, i.e. the dollar. For people who
            want to protect their hard-earned money from inflation while earning
            steady returns.
          </p>

          <div>
            <strong>
              <span>Historical returns:</span> <em>14% per annum</em>
            </strong>
            <strong>
              <span>Risk Level:</span> <em>Medium</em>
            </strong>
          </div>

          <a href="#">Learn how Fixed Income work</a>
        </article>
      </div>
    </section>
  );
}
