import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutRates } from './components/AboutRates';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { TermsOfUse } from './components/TermsOfUse';
import { PrivacyPolicy } from './components/PrivacyPolicy';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'terms' | 'privacy'>('home');

  if (currentView === 'terms') {
    return <TermsOfUse onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentView('home')} />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutRates />
      <Testimonials />
      <Footer 
        onOpenTerms={() => setCurrentView('terms')} 
        onOpenPrivacy={() => setCurrentView('privacy')} 
      />
    </div>
  );
}

export default App;