import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillOverview = () => {
  const overviewStats = [
    {
      icon: 'Code',
      title: 'Programming Languages',
      count: 8,
      description: 'Mastery in modern languages',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Layers',
      title: 'Frameworks & Libraries',
      count: 12,
      description: 'Full-stack development tools',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Database',
      title: 'Databases',
      count: 6,
      description: 'SQL & NoSQL expertise',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: 'Cloud',
      title: 'Cloud & DevOps',
      count: 10,
      description: 'Deployment & infrastructure',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const keyStrengths = [
    'Full-Stack JavaScript Development',
    'React & Node.js Ecosystem',
    'Database Design & Optimization',
    'Cloud Architecture & DevOps',
    'API Design & Integration',
    'Performance Optimization'
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          <Icon name="Zap" size={16} />
          <span>Technical Expertise</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
          Tech Mastery Hub
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          A comprehensive showcase of technical competencies, from frontend frameworks to backend architectures, 
          demonstrating proven expertise in building scalable, high-performance web applications.
        </p>
      </div>
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats?.map((stat, index) => (
          <div key={index} className="bg-card rounded-brand-lg border border-border p-6 brand-card-hover">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-brand bg-gradient-to-br ${stat?.color} flex items-center justify-center shadow-brand-subtle`}>
                <Icon name={stat?.icon} size={24} color="white" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-text-primary">{stat?.count}+</div>
                <div className="text-sm font-medium text-text-primary">{stat?.title}</div>
                <div className="text-xs text-text-secondary">{stat?.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Key Strengths */}
      <div className="bg-card rounded-brand-lg border border-border p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Core Competencies</h2>
          <p className="text-text-secondary">Areas of specialized expertise and proven track record</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyStrengths?.map((strength, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-brand hover:bg-muted/80 transition-colors duration-brand-fast">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span className="text-text-primary font-medium">{strength}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Philosophy */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-brand-lg border border-border p-8">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Quote" size={32} className="text-primary mx-auto mb-4" />
          <blockquote className="text-lg md:text-xl text-text-primary font-medium mb-4">
            "I don't just write code, I architect digital experiences that solve real problems. 
            Every technology I master serves a purpose: creating scalable, maintainable solutions 
            that drive business results."
          </blockquote>
          <cite className="text-text-secondary">— Gokul Prasanth, Digital Craftsman</cite>
        </div>
      </div>
    </div>
  );
};

export default SkillOverview;