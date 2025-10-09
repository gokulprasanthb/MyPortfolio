import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SuccessState = ({ formData, onReset }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const nextSteps = [
    {
      id: 'confirmation',
      title: 'Confirmation Email',
      description: 'You\'ll receive a confirmation email within 5 minutes',
      icon: 'Mail',
      status: 'pending',
      timeframe: 'Within 5 minutes'
    },
    {
      id: 'review',
      title: 'Project Review',
      description: 'I\'ll review your requirements and prepare initial thoughts',
      icon: 'FileText',
      status: 'upcoming',
      timeframe: 'Within 2-4 hours'
    },
    {
      id: 'response',
      title: 'Personal Response',
      description: 'Detailed response with next steps and timeline',
      icon: 'MessageCircle',
      status: 'upcoming',
      timeframe: 'Within 24 hours'
    },
    {
      id: 'consultation',
      title: 'Free Consultation',
      description: 'Optional 30-minute call to discuss your project in detail',
      icon: 'Video',
      status: 'optional',
      timeframe: 'Within 48 hours'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/gokulprasanth',
      icon: 'Linkedin',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gokulprasanth',
      icon: 'Github',
      description: 'View my code'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/gokulprasanth',
      icon: 'Twitter',
      description: 'Follow for updates'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'upcoming': return 'text-blue-500 bg-blue-50 border-blue-200';
      case 'optional': return 'text-purple-500 bg-purple-50 border-purple-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return 'Clock';
      case 'upcoming': return 'Calendar';
      case 'optional': return 'Star';
      default: return 'Circle';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 })?.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -10,
                rotate: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: window.innerHeight + 10,
                rotate: 360,
                transition: {
                  duration: Math.random() * 3 + 2,
                  ease: "easeOut"
                }
              }}
            />
          ))}
        </div>
      )}
      {/* Success Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Icon name="CheckCircle" size={40} className="text-white" />
        </motion.div>

        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Message Sent Successfully! 🎉
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Thank you for reaching out, <span className="font-semibold text-primary">{formData?.firstName}</span>! 
          I'm excited about your <span className="font-semibold">{formData?.projectType}</span> project 
          and will get back to you soon.
        </p>
      </motion.div>
      {/* Project Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-card rounded-xl shadow-brand-medium p-8 mb-8"
      >
        <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
          <Icon name="FileText" size={20} className="mr-2" />
          Project Summary
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-text-secondary">Contact</label>
              <p className="text-text-primary">{formData?.firstName} {formData?.lastName}</p>
              <p className="text-text-secondary text-sm">{formData?.email}</p>
              {formData?.company && (
                <p className="text-text-secondary text-sm">{formData?.company}</p>
              )}
            </div>
            
            <div>
              <label className="text-sm font-medium text-text-secondary">Project Type</label>
              <p className="text-text-primary capitalize">{formData?.projectType?.replace('-', ' ')}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-text-secondary">Budget & Timeline</label>
              <p className="text-text-primary">{formData?.budget}</p>
              <p className="text-text-secondary text-sm">{formData?.timeline}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-text-secondary">Preferred Contact</label>
              <p className="text-text-primary capitalize">{formData?.contactMethod}</p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-card rounded-xl shadow-brand-medium p-8 mb-8"
      >
        <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
          <Icon name="MapPin" size={20} className="mr-2" />
          What Happens Next
        </h3>
        
        <div className="space-y-4">
          {nextSteps?.map((step, index) => (
            <motion.div
              key={step?.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors duration-200"
            >
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${getStatusColor(step?.status)}`}>
                  <Icon name={step?.icon} size={18} />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-text-primary">{step?.title}</h4>
                  <div className="flex items-center space-x-1">
                    <Icon name={getStatusIcon(step?.status)} size={14} className="text-text-secondary" />
                    <span className="text-xs text-text-secondary">{step?.timeframe}</span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm">{step?.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Social Links & Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Social Links */}
        <div className="bg-card rounded-xl shadow-brand-medium p-8">
          <h3 className="text-lg font-bold text-text-primary mb-4">Stay Connected</h3>
          <p className="text-text-secondary text-sm mb-6">
            Follow me on social media for updates, tech insights, and project showcases.
          </p>
          
          <div className="space-y-3">
            {socialLinks?.map((social) => (
              <a
                key={social?.name}
                href={social?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-muted transition-all duration-200 group"
              >
                <Icon name={social?.icon} size={20} className="text-text-secondary group-hover:text-primary" />
                <div>
                  <p className="font-medium text-text-primary">{social?.name}</p>
                  <p className="text-xs text-text-secondary">{social?.description}</p>
                </div>
                <Icon name="ExternalLink" size={14} className="text-text-secondary group-hover:text-primary ml-auto" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl shadow-brand-medium p-8">
          <h3 className="text-lg font-bold text-text-primary mb-4">Quick Actions</h3>
          <p className="text-text-secondary text-sm mb-6">
            While you wait for my response, explore more about my work and expertise.
          </p>
          
          <div className="space-y-3">
            <Button
              variant="outline"
              fullWidth
              onClick={() => window.location.href = '/portfolio'}
              iconName="Briefcase"
              iconPosition="left"
            >
              View My Portfolio
            </Button>
            
            <Button
              variant="outline"
              fullWidth
              onClick={() => window.open('/assets/gokul-prasanth-cv.pdf', '_blank')}
              iconName="Download"
              iconPosition="left"
            >
              Download My CV
            </Button>
            
            <Button
              variant="outline"
              fullWidth
              onClick={() => window.open('https://calendly.com/gokulprasanth', '_blank')}
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule a Call
            </Button>
            
            <Button
              variant="ghost"
              fullWidth
              onClick={onReset}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </motion.div>
      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20"
      >
        <Icon name="Heart" size={20} className="text-primary mx-auto mb-2" />
        <p className="text-text-secondary">
          Thank you for considering me for your project. I look forward to building something amazing together!
        </p>
      </motion.div>
    </div>
  );
};

export default SuccessState;