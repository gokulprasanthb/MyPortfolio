import React, { useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-brand"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative bg-card border border-border rounded-brand-lg shadow-brand-prominent max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">{project?.title}</h2>
            <p className="text-text-secondary">{project?.category}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            className="text-text-secondary hover:text-text-primary"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Image */}
          <div className="relative h-64 md:h-80 mb-6 rounded-brand-lg overflow-hidden">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-full object-cover"
            />
            {project?.liveDemo && (
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-1 bg-success text-success-foreground px-3 py-2 rounded-brand font-medium">
                  <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse" />
                  <span>Live Demo Available</span>
                </div>
              </div>
            )}
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Project Overview</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {project?.fullDescription}
              </p>
              
              {/* Problem & Solution */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2 flex items-center">
                    <Icon name="AlertCircle" size={16} className="mr-2 text-warning" />
                    Challenge
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {project?.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-text-primary mb-2 flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-success" />
                    Solution
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {project?.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-muted/50 p-4 rounded-brand">
                <h4 className="font-medium text-text-primary mb-3">Project Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Year:</span>
                    <span className="text-text-primary font-medium">{project?.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Duration:</span>
                    <span className="text-text-primary font-medium">{project?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Team Size:</span>
                    <span className="text-text-primary font-medium">{project?.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Role:</span>
                    <span className="text-text-primary font-medium">{project?.role}</span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              {project?.detailedMetrics && (
                <div className="bg-muted/50 p-4 rounded-brand">
                  <h4 className="font-medium text-text-primary mb-3">Impact & Results</h4>
                  <div className="space-y-3">
                    {project?.detailedMetrics?.map((metric, index) => (
                      <div key={index} className="text-center p-3 bg-card rounded-brand border border-border">
                        <div className="text-xl font-bold text-primary">{metric?.value}</div>
                        <div className="text-xs text-text-secondary">{metric?.label}</div>
                        {metric?.description && (
                          <div className="text-xs text-text-secondary mt-1 opacity-75">
                            {metric?.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project?.techCategories?.map((category, index) => (
                <div key={index} className="bg-muted/50 p-4 rounded-brand">
                  <h4 className="font-medium text-text-primary mb-2 flex items-center">
                    <Icon name={category?.icon} size={16} className="mr-2 text-primary" />
                    {category?.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category?.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-card text-text-secondary text-xs rounded-brand border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )) || (
                <div className="md:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {project?.techStack?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-brand font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Features */}
          {project?.features && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-brand">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-brand flex items-center justify-center mt-0.5">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">{feature?.title}</h4>
                      <p className="text-text-secondary text-xs mt-1">{feature?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            {project?.liveDemo && (
              <Button
                variant="default"
                onClick={() => window.open(project?.liveDemo, '_blank')}
                iconName="ExternalLink"
                iconPosition="left"
                className="flex-1 bg-gradient-to-r from-primary to-secondary"
              >
                View Live Demo
              </Button>
            )}
            
            {project?.github && (
              <Button
                variant="outline"
                onClick={() => window.open(project?.github, '_blank')}
                iconName="Github"
                iconPosition="left"
                className="flex-1"
              >
                View Source Code
              </Button>
            )}
            
            <Button
              variant="secondary"
              onClick={() => window.location.href = '/contact'}
              iconName="MessageCircle"
              iconPosition="left"
              className="flex-1"
            >
              Discuss Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;