import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      description: 'Drop me a line anytime',
      value: 'gokul.prasanth@digitalcraft.dev',
      icon: 'Mail',
      action: 'mailto:gokul.prasanth@digitalcraft.dev?subject=Project Inquiry',
      primary: true,
      responseTime: 'Usually responds within 2-4 hours'
    },
    {
      id: 'phone',
      title: 'Phone',
      description: 'Let\'s talk directly',
      value: '+1 (555) 123-4567',
      icon: 'Phone',
      action: 'tel:+15551234567',
      responseTime: 'Available Mon-Fri, 9 AM - 6 PM EST'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Connect professionally',
      value: 'linkedin.com/in/gokulprasanth',
      icon: 'Linkedin',
      action: 'https://linkedin.com/in/gokulprasanth',
      responseTime: 'Active daily'
    },
    {
      id: 'calendar',
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation',
      value: 'Free consultation available',
      icon: 'Calendar',
      action: '#',
      responseTime: 'Next available: Tomorrow 2 PM EST'
    }
  ];

  const handleContactClick = (method) => {
    if (method?.action?.startsWith('http')) {
      window.open(method?.action, '_blank');
    } else if (method?.action === '#') {
      // Handle calendar booking
      console.log('Opening calendar booking...');
    } else {
      window.location.href = method?.action;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Multiple Ways to Connect</h3>
        <p className="text-text-secondary">Choose the method that works best for you</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods?.map((method) => (
          <div
            key={method?.id}
            className={`relative p-6 rounded-xl border transition-all duration-300 hover:shadow-brand-medium group cursor-pointer ${
              method?.primary 
                ? 'border-primary bg-gradient-to-br from-primary/5 to-secondary/5' :'border-border bg-card hover:border-primary/30'
            }`}
            onClick={() => handleContactClick(method)}
          >
            {method?.primary && (
              <div className="absolute -top-3 left-6">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Preferred
                </span>
              </div>
            )}

            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                method?.primary 
                  ? 'bg-gradient-to-br from-primary to-secondary text-white' :'bg-muted text-text-secondary group-hover:bg-primary group-hover:text-white'
              }`}>
                <Icon name={method?.icon} size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-text-primary mb-1">{method?.title}</h4>
                <p className="text-text-secondary text-sm mb-2">{method?.description}</p>
                <p className="text-text-primary font-medium text-sm mb-2 break-all">{method?.value}</p>
                <p className="text-text-secondary text-xs">{method?.responseTime}</p>
              </div>

              <div className="flex-shrink-0">
                <Icon 
                  name="ExternalLink" 
                  size={16} 
                  className="text-text-secondary group-hover:text-primary transition-colors duration-300" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-muted rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <Icon name="Clock" size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-text-primary">Response Time Guarantee</h4>
            <p className="text-text-secondary text-sm">I respond to all inquiries within 24 hours</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Mail" size={16} className="text-primary" />
            <span className="text-sm text-text-secondary">Email: 2-4 hours</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Phone" size={16} className="text-primary" />
            <span className="text-sm text-text-secondary">Phone: Same day</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Icon name="MessageCircle" size={16} className="text-primary" />
            <span className="text-sm text-text-secondary">LinkedIn: 1 day</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button
          variant="outline"
          onClick={() => window.open('https://calendly.com/gokulprasanth', '_blank')}
          iconName="Calendar"
          iconPosition="left"
          className="brand-button-hover"
        >
          Schedule Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default ContactMethods;