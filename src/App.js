import { FcContacts } from "react-icons/fc";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
      
      </div>
  );
}

export default App;

