import Navbar from "components/layout/header";
import Hero from "components/hero";
import Partners from "components/partners";
import FeaturedSection from "components/featured/featured-section";
import Products from "components/products/products";
import Banner from "components/banner/banner";

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
      </main>
    </>
  );
}

export default App;
