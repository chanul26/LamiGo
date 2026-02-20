import Hero from './Hero';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import PlatformComponents from './PlatformComponents';
import Features from './Features';
import WhyCourierAI from './WhyCourierAI';
import CTA from './CTA';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-lamigo-soft-white dark:bg-lamigo-gunmetal">
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