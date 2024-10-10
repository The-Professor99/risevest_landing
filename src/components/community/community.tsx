import member1 from "assets/community/member1.jpg";

export default function Community() {
  return (
    <article>
      <h2>Join The Rise Community</h2>
      <p>
        If you want to go far, go together.
        <span>
          Our Telegram community surrounds you with others who can help you
          along your financial journey with tips, support, advice and learning.
          It's completely free and open to new and seasoned investors.
        </span>
      </p>
      <button>Join our Community</button>

      <div>
        <img src={member1} alt="A man smiling" />
        <img src={member1} alt="A man smiling" />
        <img src={member1} alt="A man smiling" />
        <img src={member1} alt="A man smiling" />
      </div>
    </article>
  );
}
