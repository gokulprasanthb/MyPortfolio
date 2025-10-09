import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import TestimonialCarousel from './components/TestimonialCarousel';
import SocialProof from './components/SocialProof';
import SuccessState from './components/SuccessState';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmittedData(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-6 lg:px-8">
            <SuccessState formData={submittedData} onReset={handleReset} />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-brand-medium">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Let's Build Something
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Amazing</span>
              </h1>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Ready to transform your vision into reality? I'm here to help you create 
                exceptional digital experiences that drive results and exceed expectations.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-brand-subtle">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">24hr Response</span>
                </div>
                <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-brand-subtle">
                  <Icon name="Shield" size={16} className="text-accent" />
                  <span className="text-sm text-text-secondary">Secure & Confidential</span>
                </div>
                <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full shadow-brand-subtle">
                  <Icon name="Star" size={16} className="text-yellow-500" />
                  <span className="text-sm text-text-secondary">98% Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-text-primary mb-4">Start Your Project</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Tell me about your project and I'll provide a detailed proposal with timeline, 
                  technology recommendations, and transparent pricing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <ContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <ContactMethods />
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <TestimonialCarousel />
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Why Choose Me</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Backed by proven results, industry certifications, and a track record 
                  of delivering exceptional digital solutions.
                </p>
              </div>
              <SocialProof />
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-text-secondary">Quick answers to common questions about working together</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "What's your typical project timeline?",
                    answer: "Project timelines vary based on complexity, but most web applications take 4-12 weeks. I provide detailed timelines during our initial consultation and keep you updated throughout the development process."
                  },
                  {
                    question: "Do you work with international clients?",
                    answer: "Absolutely! I work with clients worldwide and am experienced in remote collaboration. I'm flexible with time zones and use modern communication tools to ensure smooth project coordination."
                  },
                  {
                    question: "What technologies do you specialize in?",
                    answer: "I specialize in React, Node.js, TypeScript, and modern web technologies. I also work with cloud platforms like AWS, databases, and various APIs to create comprehensive solutions."
                  },
                  {
                    question: "Do you provide ongoing support after project completion?",
                    answer: "Yes! I offer various support packages including bug fixes, feature updates, performance monitoring, and technical consultation. We can discuss the best support plan for your needs."
                  },
                  {
                    question: "How do you handle project pricing?",
                    answer: "I provide transparent, fixed-price quotes based on detailed project requirements. For larger projects, I offer milestone-based payments. No hidden fees, and you'll know exactly what you're paying for."
                  }
                ]?.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    className="bg-card rounded-xl shadow-brand-subtle p-6 border border-border hover:border-primary/30 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="HelpCircle" size={20} className="text-primary mr-2" />
                      {faq?.question}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">{faq?.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join the growing list of satisfied clients who've transformed their digital presence 
                with custom web solutions that drive real business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>Start Your Project</span>
                </button>
                
                <button
                  onClick={() => window.open('https://calendly.com/gokulprasanth', '_blank')}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Icon name="Calendar" size={20} />
                  <span>Schedule a Call</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-text-secondary text-sm">
              © {new Date()?.getFullYear()} Gokul Prasanth - Digital Craftsman. All rights reserved.
            </p>
            <p className="text-text-secondary text-xs mt-2">
              Built with React, Tailwind CSS, and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;