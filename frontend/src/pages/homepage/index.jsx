import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import SkillsPreview from './components/SkillsPreview';
import ProjectsPreview from './components/ProjectsPreview';
import TestimonialsSection from './components/TestimonialsSection';
import ContactPreview from './components/ContactPreview';

const Homepage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Gokul Prasanth - Digital Craftsman | Fullstack Developer Portfolio</title>
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
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection onNavigate={scrollToSection} />
          <section id="about">
            <AboutPreview onNavigate={scrollToSection} />
          </section>
          <section id="skills">
            <SkillsPreview onNavigate={scrollToSection} />
          </section>
          <section id="portfolio">
            <ProjectsPreview onNavigate={scrollToSection} />
          </section>
          <section id="testimonials">
            <TestimonialsSection onNavigate={scrollToSection} />
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
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-brand flex items-center justify-center">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Gokul Prasanth</h3>
                    <p className="text-sm text-text-secondary font-mono">Digital Craftsman</p>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                  Creating digital experiences that bridge the gap between complex technical requirements and intuitive user experiences.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: 'Github', url: 'https://github.com/gokulprasanth' },
                    { icon: 'Linkedin', url: 'https://linkedin.com/in/gokulprasanth' },
                    { icon: 'Twitter', url: 'https://twitter.com/gokulprasanth' },
                    { icon: 'Mail', url: 'mailto:gokul@example.com' }
                  ]?.map((social) => (
                    <button
                      key={social?.icon}
                      onClick={() => window.open(social?.url, '_blank')}
                      className="w-10 h-10 rounded-brand bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-brand-medium flex items-center justify-center"
                    >
                      <span className="sr-only">{social?.icon}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0z"/>
                      </svg>
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
                    { name: 'Portfolio', path: 'portfolio' },
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
                  <li>gokul@example.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                  <li>Available Mon-Fri</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-text-secondary text-sm">
                © {new Date()?.getFullYear()} Gokul Prasanth. All rights reserved.
              </p>
              <p className="text-text-secondary text-sm mt-4 md:mt-0">
                Built with React, Tailwind CSS, and lots of ☕
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;