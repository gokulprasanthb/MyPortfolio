import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/Appimage';

const HeroSection = () => {
  const personalStats = [
    { label: "Years of Experience", value: "5+", icon: "Calendar" },
    { label: "Projects Completed", value: "50+", icon: "CheckCircle" },
    { label: "Happy Clients", value: "30+", icon: "Users" },
    { label: "Technologies Mastered", value: "15+", icon: "Code" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                <Icon name="Sparkles" size={16} />
                <span>Digital Craftsman</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Gokul Prasanth
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl lg:text-2xl text-text-secondary leading-relaxed"
              >
                A passionate fullstack developer who doesn't just write code, but{' '}
                <span className="text-primary font-semibold">architects meaningful digital experiences</span>{' '}
                that drive real business results.
              </motion.p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-6 shadow-brand-subtle"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">My Mission</h3>
                  <p className="text-text-secondary leading-relaxed">
                    "I don't just build websites, I create digital experiences that drive results. 
                    Every line of code serves a purpose, every design decision solves a problem, 
                    and every project becomes a stepping stone toward your success."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {personalStats?.map((stat, index) => (
                <div
                  key={stat?.label}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-brand-medium transition-all duration-brand-medium brand-card-hover"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon name={stat?.icon} size={16} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary">{stat?.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{stat?.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-brand-prominent">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                    alt="Gokul Prasanth - Fullstack Developer"
                    className="w-full h-full object-cover brand-image-enhance"
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-brand-medium"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-text-primary">Available for work</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-brand-medium"
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-text-primary">Chennai, India</span>
                  </div>
                </motion.div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-8 left-8 w-32 h-32 border-2 border-primary/20 rounded-2xl"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-secondary/20 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-text-secondary">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;