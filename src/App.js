import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CompaniesSection from "./components/CompaniesSection";
import AdvantageSection from "./components/AdvantageSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import TrialSection from "./components/TrialSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <div className="nav-hero">
        <div className="overlay"></div>
        <Navbar />
        <HeroSection />
      </div>
      <CompaniesSection />
      <AdvantageSection />
      <TestimonialSection />
      <FAQSection />
      <TrialSection />
      <FooterSection />
    </div>
  );
}

export default App;
