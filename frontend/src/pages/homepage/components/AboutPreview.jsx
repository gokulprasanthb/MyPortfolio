import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AboutPreview = ({ onNavigate }) => {
  const personalityTraits = [
    {
      icon: 'Target',
      title: 'Goal-Oriented',
      description: 'Every line of code serves a purpose, every design decision drives results.'
    },
    {
      icon: 'Users',
      title: 'Collaborative',
      description: 'Great products are built by great teams. I thrive in collaborative environments.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovative',
      description: 'Always exploring new technologies and methodologies to solve complex problems.'
    },
    {
      icon: 'Shield',
      title: 'Reliable',
      description: 'Consistent delivery, clean code, and maintainable solutions you can count on.'
    }
  ];

  const coreValues = [
    {
      title: 'Technical Excellence',
      description: 'Writing clean, scalable, and maintainable code that stands the test of time.',
      icon: 'Code2'
    },
    {
      title: 'User-Centered Design',
      description: 'Every interface decision is made with the end user experience in mind.',
      icon: 'Heart'
    },
    {
      title: 'Business Impact',
      description: 'Understanding that great code should drive measurable business results.',
      icon: 'TrendingUp'
    }
  ];

  return (
    <section id="about-preview" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Icon name="User" size={16} />
                <span>About Me</span>
              </motion.div>

              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Crafting Digital Experiences with{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Purpose & Precision
                </span>
              </motion.h2>

              <motion.p 
                className="text-lg text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                I'm a passionate fullstack developer who believes that great technology should be invisible to users but transformative for businesses. With over 3 years of experience in React, Node.js, and modern web technologies, I specialize in creating scalable solutions that bridge the gap between complex technical requirements and intuitive user experiences.
              </motion.p>
            </div>

            {/* Core Values */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-text-primary">Core Values</h3>
              <div className="space-y-4">
                {coreValues?.map((value, index) => (
                  <motion.div 
                    key={value?.title}
                    className="flex items-start space-x-4 p-4 rounded-brand bg-card border border-border hover:shadow-brand-medium transition-all duration-brand-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-brand flex items-center justify-center flex-shrink-0">
                      <Icon name={value?.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{value?.title}</h4>
                      <p className="text-sm text-text-secondary mt-1">{value?.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Button
                variant="default"
                size="lg"
                onClick={() => onNavigate('/about')}
                iconName="ArrowRight"
                iconPosition="right"
                className="brand-button-hover"
              >
                Read My Full Story
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('/skills')}
                iconName="Code"
                iconPosition="left"
                className="brand-button-hover"
              >
                View Technical Skills
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Personality Traits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {personalityTraits?.map((trait, index) => (
                <motion.div 
                  key={trait?.title}
                  className="bg-card border border-border rounded-brand-lg p-6 text-center hover:shadow-brand-medium transition-all duration-brand-medium brand-card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-brand flex items-center justify-center mx-auto mb-4">
                    <Icon name={trait?.icon} size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{trait?.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{trait?.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-brand-xl p-8 md:p-12 border border-border">
            <Icon name="Quote" size={32} className="text-primary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed mb-6">
              "My mission is to transform complex business challenges into elegant, scalable digital solutions that not only meet technical requirements but exceed user expectations and drive measurable results."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                  alt="Gokul Prasanth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-primary">Gokul Prasanth</div>
                <div className="text-sm text-text-secondary">Digital Craftsman</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;