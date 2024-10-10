import risevestLogo from "assets/logo.svg";

export default function Navbar() {
  const navItems = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Product", link: "#" },
    { id: 3, name: "Investment Club", link: "#" },
    { id: 4, name: "Blog", link: "#" },
    { id: 5, name: "About Us", link: "#" },
    { id: 6, name: "FAQs", link: "#" },
  ];

  return (
    <header>
      <a href="/">
        <img src={risevestLogo} className="logo" alt="Risevest logo" />
      </a>
      <nav>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <a href={navItem.link}> {navItem.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
