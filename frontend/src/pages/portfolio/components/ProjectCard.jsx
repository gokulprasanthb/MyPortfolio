import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative bg-card border border-border rounded-brand-lg overflow-hidden transition-all duration-brand-medium brand-card-hover ${
        isHovered ? 'shadow-brand-prominent' : 'shadow-brand-subtle'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-brand-medium group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-brand-medium" />
        
        {/* Live Demo Badge */}
        {project?.liveDemo && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 bg-success text-success-foreground px-2 py-1 rounded-brand text-xs font-medium">
              <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse" />
              <span>Live</span>
            </div>
          </div>
        )}

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-brand-medium">
          <div className="flex space-x-3">
            {project?.liveDemo && (
              <Button
                variant="default"
                size="sm"
                onClick={() => window.open(project?.liveDemo, '_blank')}
                iconName="ExternalLink"
                iconPosition="left"
                className="bg-white/90 text-gray-900 hover:bg-white"
              >
                Live Demo
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(project)}
              iconName="Eye"
              iconPosition="left"
              className="bg-white/90 text-gray-900 border-white/90 hover:bg-white"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-brand-medium">
              {project?.title}
            </h3>
            <p className="text-sm text-text-secondary">{project?.category}</p>
          </div>
          {project?.featured && (
            <div className="flex items-center space-x-1 bg-accent/10 text-accent px-2 py-1 rounded-brand text-xs font-medium">
              <Icon name="Star" size={12} />
              <span>Featured</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.techStack?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-brand font-medium"
            >
              {tech}
            </span>
          ))}
          {project?.techStack?.length > 4 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-brand font-medium">
              +{project?.techStack?.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        {project?.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/50 rounded-brand">
            {project?.metrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-primary">{metric?.value}</div>
                <div className="text-xs text-text-secondary">{metric?.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={12} />
              <span>{project?.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{project?.duration}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {project?.github && (
              <button
                onClick={() => window.open(project?.github, '_blank')}
                className="p-1 text-text-secondary hover:text-primary transition-colors duration-brand-fast"
              >
                <Icon name="Github" size={16} />
              </button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onViewDetails(project)}
              iconName="ArrowRight"
              iconPosition="right"
              className="text-primary hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;