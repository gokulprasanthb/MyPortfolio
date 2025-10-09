import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onNavigate }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typewriterTexts = [
    "Digital Craftsman",
    "Fullstack Developer",
    "React Specialist",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentPhrase = typewriterTexts?.[currentIndex];
    
    if (isTyping) {
      if (currentText?.length < currentPhrase?.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase?.slice(0, currentText?.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText?.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText?.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % typewriterTexts?.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentIndex, isTyping]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 brand-grid-lines opacity-30"></div>
      {/* Floating Code Snippets */}
      <div className="floating-code top-20 left-10 text-primary/20 hidden lg:block">
        const developer = &#123; skills: ['React', 'Node.js'] &#125;;
      </div>
      <div className="floating-code top-40 right-20 text-secondary/20 hidden lg:block">
        function buildAmazingThings() &#123; return 'success'; &#125;
      </div>
      <div className="floating-code bottom-32 left-1/4 text-accent/20 hidden lg:block">
        &lt;Portfolio passion="coding" impact="high" /&gt;
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Gokul Prasanth
                </span>
              </motion.h1>
              
              <motion.div 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-secondary h-12 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="typewriter-cursor">{currentText}</span>
              </motion.div>
            </div>

            {/* Brand Promise */}
            <motion.p 
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              I don't just build websites, I create{' '}
              <span className="text-primary font-semibold">digital experiences</span>{' '}
              that drive results. Precision meets creativity, technical excellence with human-centered design.
            </motion.p>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">3+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection('contact')}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 brand-button-hover pulse-gentle"
              >
                Let's Connect
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                iconName="Eye"
                iconPosition="left"
                className="brand-button-hover"
              >
                Explore My Work
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('/assets/cv/gokul-prasanth-cv.pdf', '_blank')}
                iconName="Download"
                iconPosition="left"
                className="brand-button-hover"
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <span className="text-sm text-text-secondary">Connect with me:</span>
              <div className="flex space-x-3">
                {[
                  { icon: 'Github', url: 'https://github.com/gokulprasanth', label: 'GitHub' },
                  { icon: 'Linkedin', url: 'https://linkedin.com/in/gokulprasanth', label: 'LinkedIn' },
                  { icon: 'Twitter', url: 'https://twitter.com/gokulprasanth', label: 'Twitter' },
                  { icon: 'Mail', url: 'mailto:gokul@example.com', label: 'Email' }
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
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Profile Image - Changed to animated GIF */}
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-brand-prominent">
                  <Image
                    src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                    alt="Gokul Prasanth - Digital Craftsman - Animated"
                    className="w-full h-full object-cover brand-image-enhance"
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full shadow-brand-medium flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Icon name="Code" size={24} className="text-primary" />
              </motion.div>
              
              <motion.div 
                className="absolute top-8 -right-8 w-14 h-14 bg-white rounded-full shadow-brand-medium flex items-center justify-center"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Icon name="Palette" size={20} className="text-secondary" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 left-8 w-12 h-12 bg-white rounded-full shadow-brand-medium flex items-center justify-center"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                <Icon name="Zap" size={18} className="text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 text-text-secondary hover:text-primary transition-colors duration-brand-medium group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-1 h-3 bg-current rounded-full mt-2"
              />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;