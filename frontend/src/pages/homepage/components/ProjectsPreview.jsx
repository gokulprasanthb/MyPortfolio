import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/Appicon';
import Image from '../../../components/Appimage';
import Button from '../../../components/ui/Button';
import groceze from '../../../../public/assets/groceze.png';
import dashboard from '../../../../public/assets/dashboard.png';


const ProjectsPreview = ({ onNavigate }) => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Groceze - E-Commerce Platform',
      category: 'Fullstack Development',
      description: 'A modern e-commerce solution built using React.js, Express.js and MongoDB',
      image: groceze,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      
      links: {
        live: 'https://groceze.vercel.app/',
        github: 'https://github.com/gokulprasanthb/groceze'
      },
      featured: true
    },
    {
      id: 2,
      title: 'Student Dashboard',
      category: 'Fullstack Development',
      description: 'Comprehensive analytics dashboard for students which enable them to register for labs and changing labs',
      image: dashboard,
      technologies: ['Next.js', 'Node.js', 'Express.js', 'MSSQL'],
      links: {
        live: 'https://studentdashboard-wine.vercel.app/dashboard',
        github: 'https://github.com/gokulprasanthb/student_dashboard'
      },
      featured: true
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
            Each project represents a unique challenge solved through innovative thinking, clean code, and user-centered design. Here are some highlights from my works.
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
                  className="w-full p-11 h-full object-cover brand-image-enhance"
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

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="default"
                      onClick={() => window.open(featuredProjects?.[0]?.links?.live, '_blank')}
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="brand-button-hover max-md:hidden"
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
                  src={featuredProjects?.[1]?.image}
                  alt={featuredProjects?.[1]?.title}
                  className="w-full p-11   h-full object-cover brand-image-enhance"
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
                      {featuredProjects?.[1]?.category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                      {featuredProjects?.[1]?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {featuredProjects?.[1]?.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProjects?.[1]?.technologies?.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="default"
                      onClick={() => window.open(featuredProjects?.[1]?.links?.live, '_blank')}
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="brand-button-hover max-md:hidden"
                    >
                      View Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(featuredProjects?.[1]?.links?.github, '_blank')}
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