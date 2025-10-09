import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningPhilosophy = () => {
  const philosophyPoints = [
    {
      icon: 'Lightbulb',
      title: 'Continuous Learning',
      description: `Technology evolves rapidly, and I believe in staying ahead of the curve through constant learning and adaptation. Every project is an opportunity to discover new approaches and refine existing skills.`,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: 'Target',
      title: 'Problem-First Approach',
      description: `I focus on understanding the core problem before diving into solutions. This ensures that every line of code serves a purpose and contributes to meaningful outcomes for users and businesses.`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: 'Users',
      title: 'Collaborative Growth',
      description: `The best learning happens through collaboration. I actively engage with the developer community, share knowledge, and learn from diverse perspectives to build better solutions together.`,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: 'Zap',
      title: 'Theory Meets Practice',
      description: `Academic knowledge provides the foundation, but real-world application is where true understanding develops. I bridge theoretical concepts with practical implementation in every project.`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-brand-xl p-8 mb-12">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-brand-lg flex items-center justify-center mx-auto mb-4">
          <Icon name="Brain" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Learning Philosophy</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          My approach to education and professional development is built on four core principles that guide every learning journey and project I undertake.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {philosophyPoints?.map((point, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-brand-lg p-6 brand-card-hover shadow-brand-subtle hover:shadow-brand-medium transition-all duration-brand-medium"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 ${point?.bgColor} rounded-brand flex items-center justify-center flex-shrink-0`}>
                <Icon name={point?.icon} size={24} className={point?.color} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary mb-2">{point?.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{point?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Quote Section */}
      <div className="mt-8 text-center">
        <blockquote className="text-lg font-medium text-text-primary italic mb-2">
          "Education is not preparation for life; education is life itself."
        </blockquote>
        <cite className="text-sm text-text-secondary">- John Dewey</cite>
      </div>
    </div>
  );
};

export default LearningPhilosophy;