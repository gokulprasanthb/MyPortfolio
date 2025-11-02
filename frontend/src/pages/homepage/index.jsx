import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import SkillsPreview from './components/SkillsPreview';
import ProjectsPreview from './components/ProjectsPreview';
import ContactPreview from './components/ContactPreview';

import Icon from '../../components/Appicon';
import { useLocation } from 'react-router-dom';


const Homepage = () => {

  const scrollToHeroSection = (sectionId) => {
    const targetId = sectionId?.startsWith('#') ? sectionId?.substring(1) : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Gokul Prasanth - Portfolio</title>
        <meta name="description" content="Gokul Prasanth is a Digital Craftsman specializing in React, Node.js, and modern web development. I create digital experiences that drive results through precision, creativity, and technical excellence." />
        <meta name="keywords" content="Gokul Prasanth, Digital Craftsman, Fullstack Developer, React Developer, Node.js, Web Development, Portfolio, JavaScript, TypeScript" />
        <meta property="og:title" content="Gokul Prasanth - Digital Craftsman | Fullstack Developer" />
        <meta property="og:description" content="I don't just build websites, I create digital experiences that drive results. Precision meets creativity, technical excellence with human-centered design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gokulprasanth.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gokul Prasanth - Digital Craftsman" />
        <meta name="twitter:description" content="Fullstack Developer creating digital experiences that drive results" />
        <link rel="canonical" href="https://gokulprasanth.dev" />
      </Helmet>

      <div className="min-h-screen bg-background px-10">
        <Header />
        
        <main>
          <HeroSection onNavigate={scrollToSection} />
          
          <section id="about">
            <AboutPreview onNavigate={scrollToSection} />
          </section>
          
          <section id="portfolio">
            <ProjectsPreview onNavigate={scrollToSection} />
          </section>

          <section id="skills">
            <SkillsPreview onNavigate={scrollToSection} />
          </section>
          
          <section id="contact">
            <ContactPreview onNavigate={scrollToSection} />
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center">
                  <button
                    onClick={() => scrollToHeroSection('#hero')}
                    className="flex items-center space-x-3 group pb-4"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-brand flex items-center justify-center shadow-brand-subtle group-hover:shadow-brand-medium transition-all duration-brand-medium">
                        <span className="text-white font-bold text-lg">G</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></div>
                    </div>
                  </button>
              </div>

                <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                  Creating digital experiences that bridge the gap between complex technical requirements and intuitive user experiences.
                </p>

                <div className="flex space-x-4">
                  {[
                  { icon: 'Github', url: 'https://github.com/gokulprasanthb', label: 'GitHub' },
                  { icon: 'Linkedin', url: 'https://www.linkedin.com/in/gokul-prasanth-ab3ab7365/', label: 'LinkedIn' },
                  { icon: 'Twitter', url: 'https://twitter.com', label: 'Twitter' },
                  { icon: 'Instagram', url: 'https://instagram.com', label: 'Instagram' }
                ]?.map((social) => (
                  <button
                    key={social?.icon}
                    onClick={() => window.open(social?.url, '_blank')}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-brand-medium flex items-center justify-center brand-button-hover"
                    aria-label={social?.label}
                  >
                    <Icon name={social?.icon} size={18} />
                  </button>
                ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { name: 'About', path: 'about' },
                    { name: 'Skills', path: 'skills' },
                    { name: 'Projects', path: 'portfolio' },
                    { name: 'Contact', path: 'contact' }
                  ]?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => scrollToSection(link?.path)}
                        className="text-text-secondary hover:text-primary transition-colors duration-brand-medium"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-text-primary mb-4">Get in Touch</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li>gokulprasanthbm@gmail.com</li>
                  <li>Bengaluru, karnataka</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-text-secondary text-sm">
                © {new Date()?.getFullYear()} Gokul Prasanth. All rights reserved.
              </p>
              <p className="text-text-secondary text-sm mt-4 md:mt-0">
                Coded with React, styled with Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;