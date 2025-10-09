import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '#hero', icon: 'Home' },
    { name: 'About', path: '#about', icon: 'User' },
    { name: 'Skills', path: '#skills', icon: 'Code' },
    { name: 'Portfolio', path: '#portfolio', icon: 'Briefcase' },
    { name: 'Contact', path: '#contact', icon: 'Mail' }
  ];

  const secondaryItems = [
    { name: 'Testimonials', path: '#testimonials', icon: 'MessageSquare' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const targetId = sectionId?.startsWith('#') ? sectionId?.substring(1) : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-brand-medium ${
        scrolled 
          ? 'bg-background/95 backdrop-brand shadow-brand-medium' 
          : 'bg-background/80'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center space-x-3 group focus-brand"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-brand flex items-center justify-center shadow-brand-subtle group-hover:shadow-brand-medium transition-all duration-brand-medium">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-brand-medium">
                  Gokul Prasanth
                </h1>
                <p className="text-xs text-text-secondary font-mono">Digital Craftsman</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => scrollToSection(item?.path)}
                className="flex items-center space-x-2 px-4 py-2 rounded-brand text-sm font-medium transition-all duration-brand-medium focus-brand text-text-secondary hover:text-primary hover:bg-muted"
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </button>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-brand text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted transition-all duration-brand-medium focus-brand">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-brand-lg shadow-brand-prominent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-brand-medium">
                {secondaryItems?.map((item) => (
                  <button
                    key={item?.path}
                    onClick={() => scrollToSection(item?.path)}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-left hover:bg-muted transition-colors duration-brand-fast first:rounded-t-brand-lg last:rounded-b-brand-lg text-text-secondary"
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('#portfolio')}
              iconName="Eye"
              iconPosition="left"
              className="brand-button-hover"
            >
              View Work
            </Button>
            
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection('#contact')}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 pulse-gentle"
            >
              Let's Build Something
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-brand text-text-secondary hover:text-primary hover:bg-muted transition-all duration-brand-medium focus-brand"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-brand-medium overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 bg-card border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...secondaryItems]?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => scrollToSection(item?.path)}
                  className="flex items-center space-x-3 w-full px-4 py-3 rounded-brand text-left transition-all duration-brand-medium focus-brand text-text-secondary hover:text-primary hover:bg-muted"
                >
                  <Icon name={item?.icon} size={18} />
                  <span className="font-medium">{item?.name}</span>
                </button>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                onClick={() => scrollToSection('#portfolio')}
                iconName="Eye"
                iconPosition="left"
              >
                View Work
              </Button>
              
              <Button
                variant="default"
                fullWidth
                onClick={() => scrollToSection('#contact')}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Let's Build Something
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-floating md:hidden">
        <Button
          variant="default"
          size="icon"
          onClick={() => scrollToSection('#contact')}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-brand-prominent pulse-gentle brand-button-hover"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;