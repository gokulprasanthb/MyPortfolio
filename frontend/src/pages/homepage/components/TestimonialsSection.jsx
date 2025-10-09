import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = ({ onNavigate }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO, TechStart Inc.',
      company: 'TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      content: `Gokul delivered exceptional results on our e-commerce platform. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The platform he built increased our conversion rate by 40% and handles 10K+ daily users seamlessly.`,
      rating: 5,
      project: 'E-Commerce Platform',
      metrics: '40% conversion increase'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateLab',
      company: 'InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      content: `Working with Gokul was a game-changer for our team. His React expertise and problem-solving skills helped us launch our product 3 months ahead of schedule. The code quality is outstanding, and the user experience exceeded our expectations.`,
      rating: 5,
      project: 'SaaS Dashboard',
      metrics: '3 months early delivery'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, CreativeStudio',
      company: 'CreativeStudio',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      content: `Gokul transformed our vision into a beautiful, functional web application. His communication throughout the project was excellent, and he provided valuable insights that improved our initial concept. Highly recommend for any React development needs.`,
      rating: 5,
      project: 'Creative Portfolio Platform',
      metrics: '100% client satisfaction'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Lead Developer, DataFlow',
      company: 'DataFlow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      content: `As a fellow developer, I can appreciate the clean, maintainable code that Gokul writes. His fullstack expertise and modern development practices make him an invaluable team member. The analytics dashboard he built processes 1M+ data points efficiently.`,
      rating: 5,
      project: 'Analytics Dashboard',
      metrics: '1M+ data points processed'
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '50+', icon: 'Users' },
    { label: 'Projects Completed', value: '75+', icon: 'CheckCircle' },
    { label: 'Client Satisfaction', value: '100%', icon: 'Heart' },
    { label: 'Years Experience', value: '3+', icon: 'Calendar' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
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
            className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Icon name="MessageSquare" size={16} />
            <span>Client Testimonials</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            What Clients Say About{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Working With Me
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Don't just take my word for it. Here's what clients and collaborators have to say about our successful partnerships and the results we've achieved together.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats?.map((stat, index) => (
            <motion.div 
              key={stat?.label}
              className="text-center p-6 bg-card border border-border rounded-brand-lg hover:shadow-brand-medium transition-all duration-brand-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat?.value}</div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-brand-xl p-8 md:p-12 shadow-brand-medium">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <Icon name="Quote" size={48} className="text-primary mx-auto mb-6 opacity-50" />

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed mb-8 font-medium">
                  "{testimonials?.[activeTestimonial]?.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {renderStars(testimonials?.[activeTestimonial]?.rating)}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials?.[activeTestimonial]?.avatar}
                      alt={testimonials?.[activeTestimonial]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-text-primary text-lg">
                      {testimonials?.[activeTestimonial]?.name}
                    </div>
                    <div className="text-text-secondary">
                      {testimonials?.[activeTestimonial]?.role}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonials?.[activeTestimonial]?.company}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Briefcase" size={16} className="text-secondary" />
                      <span className="text-text-secondary">Project:</span>
                      <span className="text-text-primary font-medium">
                        {testimonials?.[activeTestimonial]?.project}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={16} className="text-accent" />
                      <span className="text-text-secondary">Result:</span>
                      <span className="text-text-primary font-medium">
                        {testimonials?.[activeTestimonial]?.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <motion.div 
          className="flex justify-center space-x-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-brand-medium ${
                index === activeTestimonial 
                  ? 'bg-primary scale-125' :'bg-muted hover:bg-primary/50'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          {testimonials?.map((testimonial, index) => (
            <motion.div 
              key={testimonial?.id}
              className="bg-card border border-border rounded-brand-lg p-6 hover:shadow-brand-medium transition-all duration-brand-medium brand-card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-text-primary">{testimonial?.name}</div>
                  <div className="text-sm text-text-secondary">{testimonial?.role}</div>
                  <div className="flex space-x-1 mt-2">
                    {renderStars(testimonial?.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-4">
                "{testimonial?.content}"
              </p>
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-primary font-medium">{testimonial?.project}</span>
                <span className="text-accent font-medium">{testimonial?.metrics}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-brand-xl p-8 md:p-12 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
        >
          <Icon name="Handshake" size={48} className="text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's collaborate to create exceptional digital experiences that drive real business results. Your project could be the next success story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => onNavigate('/contact')}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 brand-button-hover"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('/portfolio')}
              iconName="Eye"
              iconPosition="left"
              className="brand-button-hover"
            >
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;