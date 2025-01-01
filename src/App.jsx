import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BonySlider from "./components/bonySlider";
import HowToBuy from "./components/HTB";
import Tecknomics from "./components/tecknomics";
import Footer from "./components/footer";
import "./App.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full app-container overflow-hidden bg-[#1E1E1E] h-fit flex flex-col">
      <Navbar />
      <Hero />
      <BonySlider />
      <HowToBuy />
      <BonySlider />
      <Tecknomics />
      <BonySlider />
      <Footer />
    </div>
  );
}
