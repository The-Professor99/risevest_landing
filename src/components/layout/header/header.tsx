import React, { useState } from "react";
import Container from "components/atoms/Container";
import Button from "components/atoms/Buttons";
import risevestLogo from "assets/logo.svg";
import "./header.scss";

const NavLink = ({
  buttonLink,
  buttonText,
  closeMenu,
}: {
  buttonLink: string;
  buttonText: string;
  closeMenu: () => void;
}) => {
  return (
    <Button
      href={buttonLink}
      onClick={closeMenu}
      className="navlink py-sm md-px-sm"
    >
      {buttonText}
    </Button>
  );
};
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Product", link: "#" },
    { id: 3, name: "Investment Club", link: "#" },
    { id: 4, name: "Blog", link: "#" },
    { id: 5, name: "About Us", link: "#" },
    { id: 6, name: "FAQs", link: "#" },
  ];

  return (
    <Container padding="sm" className="header-container">
      <header className="header flex justify-between align-center py-md ">
        <div className="logo">
          <a href="/">
            <img src={risevestLogo} alt="Risevest logo" />
          </a>
        </div>

        <nav
          className={`nav main-menu nav-links gap-3 p-sm ${
            menuOpen ? "active" : ""
          }`}
        >
          {navLinks.map((navLink) => (
            <React.Fragment key={navLink.id}>
              <NavLink
                buttonLink={navLink.link}
                buttonText={navLink.name}
                closeMenu={closeMenu}
              />
            </React.Fragment>
          ))}
        </nav>

        <div className="menu-toggle">
          <Button
            className={`modal-close bars p-none ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
