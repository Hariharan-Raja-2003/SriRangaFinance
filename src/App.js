import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <main>
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
