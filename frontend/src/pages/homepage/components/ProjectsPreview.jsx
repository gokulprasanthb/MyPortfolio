import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectsPreview = ({ onNavigate }) => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Fullstack Development',
      description: 'A modern e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory management, payment integration, and advanced analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      metrics: {
        performance: '+40% faster loading',
        conversion: '+25% conversion rate',
        users: '10K+ active users'
      },
      links: {
        live: 'https://ecommerce-demo.com',
        github: 'https://github.com/gokulprasanth/ecommerce-platform'
      },
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Comprehensive analytics dashboard with real-time data visualization, custom reporting, and interactive charts for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Express', 'Redis'],
      metrics: {
        insights: '50+ data insights',
        processing: '1M+ data points',
        speed: '3x faster queries'
      },
      links: {
        live: 'https://analytics-demo.com',
        github: 'https://github.com/gokulprasanth/analytics-dashboard'
      }
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-muted/30 to-background">
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
            className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Icon name="Briefcase" size={16} />
            <span>Featured Projects</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transforming Ideas into{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Each project represents a unique challenge solved through innovative thinking, clean code, and user-centered design. Here are some highlights from my portfolio.
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-brand-xl overflow-hidden shadow-brand-medium hover:shadow-brand-prominent transition-all duration-brand-medium">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={featuredProjects?.[0]?.image}
                  alt={featuredProjects?.[0]?.title}
                  className="w-full h-full object-cover brand-image-enhance"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-secondary font-medium mb-2">
                      {featuredProjects?.[0]?.category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                      {featuredProjects?.[0]?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {featuredProjects?.[0]?.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProjects?.[0]?.technologies?.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                    {Object.entries(featuredProjects?.[0]?.metrics)?.map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-text-secondary capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="default"
                      onClick={() => window.open(featuredProjects?.[0]?.links?.live, '_blank')}
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="brand-button-hover"
                    >
                      View Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(featuredProjects?.[0]?.links?.github, '_blank')}
                      iconName="Github"
                      iconPosition="left"
                      className="brand-button-hover"
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-1 gap-8 mb-16">
          {featuredProjects?.slice(1)?.map((project, index) => (
            <motion.div 
              key={project?.id}
              className="bg-card border border-border rounded-brand-xl overflow-hidden hover:shadow-brand-medium transition-all duration-brand-medium brand-card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-48 md:h-auto overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover brand-image-enhance"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-secondary/90 text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                      {project?.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{project?.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project?.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project?.technologies?.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-muted text-text-secondary px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-border">
                    {Object.entries(project?.metrics)?.map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-semibold text-secondary">{value}</div>
                        <div className="text-xs text-text-secondary capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project?.links?.live, '_blank')}
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="flex-1 brand-button-hover"
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project?.links?.github, '_blank')}
                      iconName="Github"
                      className="brand-button-hover"
                    >
                      <span className="sr-only">View Code</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-brand-xl p-8 md:p-12 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <Icon name="Rocket" size={48} className="text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            These projects represent just a glimpse of what's possible. Let's collaborate to bring your vision to life with cutting-edge technology and exceptional user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection('contact')}
              iconName="MessageCircle"
              iconPosition="left"
              className="brand-button-hover"
            >
              Start a Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;