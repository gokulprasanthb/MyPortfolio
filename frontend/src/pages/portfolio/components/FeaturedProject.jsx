import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-brand-lg border border-border mb-12">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Star" size={20} className="text-accent" />
        <span className="text-accent font-medium">Featured Project</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Project Info */}
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">{project?.title}</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            {project?.fullDescription}
          </p>
          
          {/* Key Highlights */}
          <div className="space-y-3 mb-6">
            {project?.highlights?.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-success/10 rounded-brand flex items-center justify-center mt-0.5">
                  <Icon name="Check" size={12} className="text-success" />
                </div>
                <span className="text-text-secondary text-sm">{highlight}</span>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="font-medium text-text-primary mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project?.techStack?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-brand font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Metrics */}
          {project?.metrics && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {project?.metrics?.map((metric, index) => (
                <div key={index} className="text-center p-3 bg-card/50 rounded-brand border border-border/50">
                  <div className="text-xl font-bold text-primary">{metric?.value}</div>
                  <div className="text-xs text-text-secondary">{metric?.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project?.liveDemo && (
              <Button
                variant="default"
                onClick={() => window.open(project?.liveDemo, '_blank')}
                iconName="ExternalLink"
                iconPosition="left"
                className="bg-gradient-to-r from-primary to-secondary brand-button-hover"
              >
                View Live Demo
              </Button>
            )}
            
            <Button
              variant="outline"
              onClick={() => onViewDetails(project)}
              iconName="Eye"
              iconPosition="left"
            >
              View Case Study
            </Button>
          </div>
        </div>
        
        {/* Project Image */}
        <div className="relative">
          <div className="relative h-64 lg:h-80 rounded-brand-lg overflow-hidden shadow-brand-prominent">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-full object-cover"
            />
            {project?.liveDemo && (
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-1 bg-success text-success-foreground px-3 py-2 rounded-brand font-medium">
                  <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse" />
                  <span>Live</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse-gentle"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;