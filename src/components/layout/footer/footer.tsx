import risevestLogo from "assets/logo_dark.svg";
import FooterMenu from "./footer-menu";

export default function Footer() {
  const mainFooterItems = [
    { id: 1, name: "About Us", link: "#" },
    { id: 2, name: "Careers", link: "#" },
    { id: 3, name: "FAQs", link: "#" },
    { id: 4, name: "Contact", link: "#" },
    { id: 5, name: "Press", link: "#" },
    { id: 6, name: "Rise Impact", link: "#" },
  ];

  const exploreItems = [
    { id: 1, name: "Investment Club", link: "#" },
    { id: 2, name: "Blog", link: "#" },
  ];

  const productItems = [
    { id: 1, name: "Rise App", link: "#" },
    { id: 2, name: "Wallets", link: "#" },
    { id: 3, name: "Asset Classes", link: "#" },
  ];

  const contactItems = [
    { id: 1, name: "0818 714 7405", link: "#" },
    { id: 2, name: "hello@rise.capital", link: "#" },
    { id: 3, name: "Newsletter", link: "#" },
    { id: 4, name: "Instagram", link: "#" },
    { id: 5, name: "Twitter", link: "#" },
  ];

  return (
    <footer>
      <FooterMenu
        menuItems={mainFooterItems}
        menuTitle={<img src={risevestLogo} alt="Risevest logo" />}
      />
      <FooterMenu menuItems={exploreItems} menuTitle={<p>Explore</p>} />
      <FooterMenu menuItems={productItems} menuTitle={<p>Products</p>} />
      <FooterMenu menuItems={contactItems} menuTitle={<p>Contact Us</p>} />
    </footer>
  );
}
