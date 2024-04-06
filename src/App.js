

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Certificate from "./components/certificate";


function App() {
  return (
     <div >
        <Navbar />
        <Hero />
        <About />
        <Certificate />
        <Skill />
        <Portfolio />
        <Contact />
        <Newsletter />
        <Footer />
      </div>  
  );
}

export default App;
