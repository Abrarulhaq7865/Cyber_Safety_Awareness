import { useState, useEffect } from 'react';
import ScamAlertBanner from './components/ScamAlertBanner';
import './components/ScamAlertBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutProject from './components/AboutProject';
import ProjectTimeline from './components/ProjectTimeline';
import Gallery from './components/Gallery';
import DigitalLiteracyHub from './components/DigitalLiteracyHub';
import CyberThreatsCenter from './components/CyberThreatsCenter';
import CyberSafetyTips from './components/CyberSafetyTips';
import CyberAttackSimulator from './components/CyberAttackSimulator';
import CyberSafetyQuiz from './components/CyberSafetyQuiz';
import CommunityImpactDashboard from './components/CommunityImpactDashboard';
import CybercrimeReportingCenter from './components/CybercrimeReportingCenter';
import Downloads from './components/Downloads';
import Blog from './components/Blog';
import AIChatbot from './components/AIChatbot';
import ContactFeedback from './components/ContactFeedback';
import Footer from './components/Footer';

function App() {
  const [isTelugu, setIsTelugu] = useState(false);

  useEffect(() => {
    document.documentElement.lang = isTelugu ? 'te' : 'en';
  }, [isTelugu]);

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text overflow-x-hidden">
      <ScamAlertBanner isTelugu={isTelugu} />
      <Navbar isTelugu={isTelugu} setIsTelugu={setIsTelugu} />
      <main>
        <Hero isTelugu={isTelugu} />
        <AboutProject isTelugu={isTelugu} />
        <ProjectTimeline isTelugu={isTelugu} />
        <Gallery isTelugu={isTelugu} />
        <DigitalLiteracyHub isTelugu={isTelugu} />
        <CyberThreatsCenter isTelugu={isTelugu} />
        <CyberSafetyTips isTelugu={isTelugu} />
        <CyberAttackSimulator isTelugu={isTelugu} />
        <CyberSafetyQuiz isTelugu={isTelugu} />
        <CommunityImpactDashboard isTelugu={isTelugu} />
        <CybercrimeReportingCenter isTelugu={isTelugu} />
        <Downloads isTelugu={isTelugu} />
        <Blog isTelugu={isTelugu} />
        <ContactFeedback isTelugu={isTelugu} />
      </main>
      <Footer isTelugu={isTelugu} />
      <AIChatbot isTelugu={isTelugu} />
    </div>
  );
}

export default App;
