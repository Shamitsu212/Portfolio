import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import RoomsSection from "./components/RoomsSection/RoomsSection";
import MapSection from "./components/MapSection/MapSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <RoomsSection />
      <MapSection />
    </main>
  );
}

export default HomePage;