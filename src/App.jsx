import Benefits from "./components/Benefits"
import ChallengesAndSolutions from "./components/ChallengesAndSolutions"
import Footer from "./components/Footer"
import GamifiedRBACAISection from "./components/GamifiedRBACAISection"
import KeyFeaturesSection from "./components/KeyFeaturesSection"
import HeroSection from "./components/LandingPage"
import Novelty from "./components/Novelty"
import OverviewSection from "./components/OverViewSection"
import RegistrationDataCollection from "./components/RegistrationDataCollection"
import Screenshots from "./components/Screenshots"
import TechnologyStackSection from "./components/TechnologyStack"

function App() {

  return (
    <>
      <HeroSection />
      <OverviewSection />
      <RegistrationDataCollection />
      <KeyFeaturesSection />
      <Novelty />
      <TechnologyStackSection />
      <Screenshots />
      <GamifiedRBACAISection />
      <Benefits />
      <ChallengesAndSolutions />
      <Footer />
    </>
  )
}

export default App
