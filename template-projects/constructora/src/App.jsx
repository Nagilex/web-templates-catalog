import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
