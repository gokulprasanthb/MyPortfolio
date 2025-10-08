import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StoryTimeline from './components/StoryTimeline';
import PersonalityInsights from './components/PersonalityInsights';
import PhilosophySection from './components/PhilosophySection';
import CallToAction from './components/CallToAction';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About - Gokul Prasanth | Digital Craftsman & Fullstack Developer</title>
        <meta 
          name="description" 
          content="Discover the story behind Gokul Prasanth, a passionate fullstack developer who creates meaningful digital experiences. Learn about my journey, philosophy, and approach to building scalable web solutions." 
        />
        <meta name="keywords" content="about gokul prasanth, fullstack developer story, web developer philosophy, digital craftsman, react developer journey" />
        <meta property="og:title" content="About - Gokul Prasanth | Digital Craftsman & Fullstack Developer" />
        <meta property="og:description" content="Discover the story behind Gokul Prasanth, a passionate fullstack developer who creates meaningful digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gokulportfolio.com/about" />
        <link rel="canonical" href="https://gokulportfolio.com/about" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <StoryTimeline />
        <PersonalityInsights />
        <PhilosophySection />
        <CallToAction />
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">Gokul Prasanth</h3>
                <p className="text-sm text-text-secondary">Digital Craftsman</p>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              Creating meaningful digital experiences that drive results
            </p>
            <p className="text-sm text-text-secondary">
              © {new Date()?.getFullYear()} Gokul Prasanth. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;