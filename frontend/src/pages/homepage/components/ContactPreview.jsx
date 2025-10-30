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
      value: 'gokulprasanthbm@gmail.com',
      action: 'mailto:gokulprasanthbm@gmail.com',
      color: 'primary'
    },
    
    {
      icon: 'MapPin',
      title: 'Location',
      description: 'Based in karnataka, India',
      value: 'Bengaluru, karnataka',
      action: '#',
      color: 'primary'
    },
    
  ];

  const socialLinks = [
    { icon: 'Github', url: 'https://github.com/gokulprasanthb', label: 'GitHub' },
    { icon: 'Linkedin', url: 'https://www.linkedin.com/in/gokul-prasanth-ab3ab7365/', label: 'LinkedIn' },
    { icon: 'Twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'Instagram', url: 'https://instagram.com', label: 'Instagram' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "01301507-3f47-4331-ae18-807dfb1e4d4c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }

    event.target.reset();
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
            Whether you have a project in mind or just want to say hello, I'd love to hear from you. Let's turn your ideas into digital reality.
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
                Fill out the form below
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
                className = "w-full px-4 py-3 border border-border rounded-brand bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-brand-medium resize-none"
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className = "w-full px-4 py-3 border border-border rounded-brand bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-brand-medium resize-none"
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  rows={4}
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
              onClick={() => window.open('/assets/cv/Resume.pdf', '_blank')}
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