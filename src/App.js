import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Charts from "./components/Charts";
import Features from "./components/Features";
import Services from "./components/Services";
import WeDo from "./components/WeDo";
import Gallery from "./components/Gallery";
import Invitation from "./components/Invitation";
import Contact from "./components/Contact";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Features />
      <Charts />
      <Services />
      <WeDo />
      <Gallery />
      <Invitation />
      <Contact />
      <Instagram />
      <Footer />
    </Router>
  );
}

export default App;
