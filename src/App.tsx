import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PlatformComponents from './components/PlatformComponents';
import Features from './components/Features';
import WhyCourierAI from './components/WhyCourierAI';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <PlatformComponents />
      <Features />
      <WhyCourierAI />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
