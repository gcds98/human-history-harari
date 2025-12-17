import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProblemSolution } from '../components/ProblemSolution';
import { AuthoritySection } from '../components/AuthoritySection';
import { ContentBreakdown } from '../components/ContentBreakdown';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { StickyCTA } from '../components/StickyCTA';
import { Footer } from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900">
      <HeroSection />
      <ProblemSolution />
      <AuthoritySection />
      <ContentBreakdown />
      <GuaranteeSection />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;