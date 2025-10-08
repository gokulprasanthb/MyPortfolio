import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const navigate = useNavigate();

  const actionCards = [
    {
      title: "Let\'s Build Something Amazing",
      description: "Ready to turn your vision into reality? Let\'s discuss your project and create something extraordinary together.",
      icon: "Rocket",
      action: "Start a Project",
      route: "/contact",
      color: "from-primary to-secondary",
      highlight: true
    },
    {
      title: "Explore My Work",
      description: "See how I\'ve helped other clients achieve their goals through innovative web solutions and digital experiences.",
      icon: "Eye",
      action: "View Portfolio",
      route: "/portfolio",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Download My Resume",
      description: "Get a detailed overview of my experience, skills, and achievements in a comprehensive professional resume.",
      icon: "Download",
      action: "Get Resume",
      route: "#",
      color: "from-orange-500 to-red-500",
      isDownload: true
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24hrs", icon: "Clock" },
    { label: "Project Success Rate", value: "100%", icon: "CheckCircle" },
    { label: "Client Satisfaction", value: "96%", icon: "Star" },
    { label: "On-Time Delivery", value: "98%", icon: "Target" }
  ];

  const handleAction = (route, isDownload) => {
    if (isDownload) {
      // Mock download functionality
      const link = document.createElement('a');
      link.href = '/assets/resume/gokul-prasanth-resume.pdf';
      link.download = 'Gokul-Prasanth-Resume.pdf';
      link?.click();
    } else {
      navigate(route);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Ready to Create Something{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Whether you're a startup looking to make your mark, an established business ready to innovate, 
            or a fellow developer seeking collaboration, I'm here to help bring your vision to life.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {actionCards?.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-card border border-border rounded-xl p-8 hover:shadow-brand-prominent transition-all duration-brand-medium brand-card-hover ${
                card?.highlight ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {card?.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card?.color} flex items-center justify-center mb-6`}>
                <Icon name={card?.icon} size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-4">{card?.title}</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">{card?.description}</p>

              <Button
                variant={card?.highlight ? "default" : "outline"}
                fullWidth
                onClick={() => handleAction(card?.route, card?.isDownload)}
                iconName={card?.icon}
                iconPosition="left"
                className={card?.highlight ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" : ""}
              >
                {card?.action}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8 shadow-brand-subtle"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">Why Choose Me?</h3>
            <p className="text-text-secondary">Here's what you can expect when working with me</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats?.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-brand-medium">
                  <Icon name={stat?.icon} size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
                <div className="text-sm text-text-secondary">{stat?.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Let's Start the Conversation
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new projects and opportunities. 
              Whether you have a specific idea in mind or just want to explore possibilities, 
              I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="default"
                size="lg"
                onClick={() => navigate('/contact')}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 pulse-gentle"
              >
                Get In Touch
              </Button>

              <div className="flex items-center space-x-4 text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm">gokul@example.com</span>
                </div>
                <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-6">Trusted by clients worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-text-secondary">STARTUP</div>
            <div className="text-2xl font-bold text-text-secondary">ENTERPRISE</div>
            <div className="text-2xl font-bold text-text-secondary">AGENCY</div>
            <div className="text-2xl font-bold text-text-secondary">FREELANCE</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;