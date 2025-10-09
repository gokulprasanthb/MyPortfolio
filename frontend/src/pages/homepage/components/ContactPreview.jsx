import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactPreview = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Drop me a line anytime',
      value: 'gokul@example.com',
      action: 'mailto:gokul@example.com',
      color: 'primary'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      description: 'Call for urgent projects',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'secondary'
    },
    {
      icon: 'MapPin',
      title: 'Location',
      description: 'Based in San Francisco',
      value: 'San Francisco, CA',
      action: '#',
      color: 'accent'
    },
    {
      icon: 'Calendar',
      title: 'Schedule',
      description: 'Book a consultation',
      value: 'Available Mon-Fri',
      action: 'https://calendly.com/gokulprasanth',
      color: 'primary'
    }
  ];

  const socialLinks = [
    { icon: 'Github', url: 'https://github.com/gokulprasanth', label: 'GitHub' },
    { icon: 'Linkedin', url: 'https://linkedin.com/in/gokulprasanth', label: 'LinkedIn' },
    { icon: 'Twitter', url: 'https://twitter.com/gokulprasanth', label: 'Twitter' },
    { icon: 'Instagram', url: 'https://instagram.com/gokulprasanth', label: 'Instagram' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (in real app, you'd handle this properly)
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      accent: 'bg-accent/10 text-accent border-accent/20'
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Icon name="MessageCircle" size={16} />
            <span>Let's Connect</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Whether you have a project in mind, need technical consultation, or just want to say hello, I'd love to hear from you. Let's turn your ideas into digital reality.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Get in Touch</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, whether it's a freelance project, full-time position, or collaboration. Choose the method that works best for you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods?.map((method, index) => (
                <motion.button
                  key={method?.title}
                  onClick={() => method?.action?.startsWith('http') ? window.open(method?.action, '_blank') : window.location.href = method?.action}
                  className={`p-4 rounded-brand-lg border text-left hover:shadow-brand-medium transition-all duration-brand-medium brand-card-hover ${getColorClasses(method?.color)}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-3">
                    <Icon name={method?.icon} size={20} className="mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{method?.title}</h4>
                      <p className="text-sm opacity-80 mb-2">{method?.description}</p>
                      <p className="text-sm font-medium">{method?.value}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-text-primary">Follow My Journey</h4>
              <div className="flex space-x-4">
                {socialLinks?.map((social) => (
                  <button
                    key={social?.icon}
                    onClick={() => window.open(social?.url, '_blank')}
                    className="w-12 h-12 rounded-brand bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-brand-medium brand-button-hover flex items-center justify-center"
                    aria-label={social?.label}
                  >
                    <Icon name={social?.icon} size={20} />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="bg-card border border-border rounded-brand-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-4">Response Time</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-text-secondary">Email Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">2-3 days</div>
                  <div className="text-sm text-text-secondary">Project Proposal</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-card border border-border rounded-brand-xl p-8 shadow-brand-medium"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Send a Message</h3>
              <p className="text-text-secondary">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-border rounded-brand bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-brand-medium resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 brand-button-hover"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-text-secondary mb-4">
                Prefer a more detailed discussion?
              </p>
              <Button
                variant="outline"
                onClick={() => onNavigate('/contact')}
                iconName="ArrowRight"
                iconPosition="right"
                className="brand-button-hover"
              >
                Visit Full Contact Page
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-brand-xl p-8 md:p-12 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          viewport={{ once: true }}
        >
          <Icon name="Coffee" size={48} className="text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Let's Grab a Virtual Coffee
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Sometimes the best projects start with a simple conversation. Let's discuss your ideas, challenges, and how we can work together to create something amazing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.open('https://calendly.com/gokulprasanth', '_blank')}
              iconName="Calendar"
              iconPosition="left"
              className="brand-button-hover"
            >
              Schedule a Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('/assets/cv/gokul-prasanth-cv.pdf', '_blank')}
              iconName="Download"
              iconPosition="left"
              className="brand-button-hover"
            >
              Download My CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;