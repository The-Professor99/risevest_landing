import Navbar from "components/layout/header";
import Hero from "components/hero";
import Partners from "components/partners";
import FeaturedSection from "components/featured/featured_section";
import Products from "components/products/products";

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
      </main>
    </>
  );
}

export default App;
