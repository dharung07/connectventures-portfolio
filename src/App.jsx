import ChallengesAndSolutions from "./components/ChallengesAndSolutions"
import Footer from "./components/Footer"
import GamifiedRBACAISection from "./components/GamifiedRBACAISection"
import KeyFeaturesSection from "./components/KeyFeaturesSection"
import HeroSection from "./components/LandingPage"
import OverviewSection from "./components/OverViewSection"
import RegistrationDataCollection from "./components/RegistrationDataCollection"
import TechnologyStackSection from "./components/TechnologyStack"

function App() {

  return (
    <>
      <HeroSection />
      <OverviewSection />
      <RegistrationDataCollection />
      <KeyFeaturesSection />
      <TechnologyStackSection />
      <GamifiedRBACAISection />
      <ChallengesAndSolutions />
      <Footer />
    </>
  )
}

export default App
