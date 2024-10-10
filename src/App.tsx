import Navbar from "components/layout/header";
import Hero from "components/hero";
import "./App.scss";
import Partners from "components/partners";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
      </main>
    </>
  );
}

export default App;
