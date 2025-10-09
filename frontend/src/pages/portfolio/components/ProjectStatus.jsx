import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = () => {
  const stats = [
    {
      icon: "Code",
      value: "25+",
      label: "Projects Completed",
      description: "Full-stack applications delivered"
    },
    {
      icon: "Users",
      value: "50K+",
      label: "Users Impacted",
      description: "Across all deployed projects"
    },
    {
      icon: "Zap",
      value: "40%",
      label: "Performance Boost",
      description: "Average improvement achieved"
    },
    {
      icon: "Award",
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on project feedback"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-brand-lg border border-border mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Project Impact</h2>
        <p className="text-text-secondary">Measurable results from digital experiences that drive success</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-brand-lg mb-3 group-hover:bg-primary/20 transition-colors duration-brand-medium">
              <Icon name={stat?.icon} size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
            <div className="text-sm font-medium text-text-primary mb-1">{stat?.label}</div>
            <div className="text-xs text-text-secondary">{stat?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStats;