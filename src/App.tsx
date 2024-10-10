import Navbar from "components/layout/header";
import Hero from "components/hero";
import Partners from "components/partners";
import FeaturedSection from "components/featured/featured-section";
import Products from "components/products/products";
import Banner from "components/banner/banner";
import Regulation from "components/regulation";
import TestimonialCards from "components/testimonials/testimonial-cards";
import Community from "components/community/community";

import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <FeaturedSection />
        <Products />
        <Banner />
        <Regulation />
        <TestimonialCards />
        <Community />
      </main>
    </>
  );
}

export default App;
