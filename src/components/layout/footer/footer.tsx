import risevestLogo from "assets/logo_dark.svg";
import FooterMenu from "./footer-menu";
import type { FooterMenuItems } from "lib/definitions";

export default function Footer() {
  const mainFooterItems: FooterMenuItems = [
    { id: 1, name: "About Us", link: "#", target: "_self" },
    { id: 2, name: "Careers", link: "#", target: "_self" },
    { id: 3, name: "FAQs", link: "#", target: "_self" },
    { id: 4, name: "Contact", link: "#", target: "_self" },
    { id: 5, name: "Press", link: "#", target: "_self" },
    { id: 6, name: "Rise Impact", link: "#", target: "_self" },
  ];

  const exploreItems: FooterMenuItems = [
    { id: 1, name: "Investment Club", link: "#", target: "_blank" },
    { id: 2, name: "Blog", link: "#", target: "_blank" },
  ];

  const productItems: FooterMenuItems = [
    { id: 1, name: "Rise App", link: "#", target: "_self" },
    { id: 2, name: "Wallets", link: "#", target: "_self" },
    { id: 3, name: "Asset Classes", link: "#", target: "_self" },
  ];

  const contactItems: FooterMenuItems = [
    {
      id: 1,
      name: "0818 714 7405",
      link: "tel:+2348113831377",
      target: "_blank",
    },
    {
      id: 2,
      name: "hello@rise.capital",
      link: "mailto:hello@rise.capital",
      target: "_blank",
    },
    { id: 3, name: "Newsletter", link: "#", target: "_blank" },
    { id: 4, name: "Instagram", link: "#", target: "_blank" },
    { id: 5, name: "Twitter", link: "#", target: "_blank" },
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
