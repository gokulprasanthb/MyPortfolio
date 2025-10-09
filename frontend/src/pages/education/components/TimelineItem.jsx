import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineItem = ({ 
  education, 
  index, 
  isLast, 
  expandedId, 
  onToggleExpand 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isExpanded = expandedId === education?.id;

  const handleToggleExpand = () => {
    onToggleExpand(isExpanded ? null : education?.id);
  };

  const getGradeColor = (grade) => {
    if (grade >= 9.0 || grade >= 90) return 'text-emerald-600';
    if (grade >= 8.0 || grade >= 80) return 'text-blue-600';
    if (grade >= 7.0 || grade >= 70) return 'text-amber-600';
    return 'text-gray-600';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Expected': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent"></div>
      )}
      {/* Timeline Node */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-brand-medium z-10"></div>
      {/* Content Card */}
      <div className="ml-16 mb-8">
        <div 
          className={`bg-card border border-border rounded-brand-lg shadow-brand-subtle hover:shadow-brand-medium transition-all duration-brand-medium cursor-pointer brand-card-hover ${
            isExpanded ? 'ring-2 ring-primary/20' : ''
          }`}
          onClick={handleToggleExpand}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-text-primary">{education?.degree}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(education?.status)}`}>
                    {education?.status}
                  </span>
                </div>
                <p className="text-lg text-primary font-semibold mb-1">{education?.institution}</p>
                <div className="flex items-center gap-4 text-sm text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={14} />
                    <span>{education?.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>{education?.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {education?.grade && (
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getGradeColor(education?.grade)}`}>
                      {education?.grade}
                    </div>
                    <div className="text-xs text-text-secondary">{education?.gradeType}</div>
                  </div>
                )}
                
                <div className={`transform transition-transform duration-brand-medium ${
                  isExpanded ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={20} className="text-text-secondary" />
                </div>
              </div>
            </div>

            {/* Institution Logo */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-muted rounded-brand flex items-center justify-center overflow-hidden">
                <Image
                  src={education?.logo}
                  alt={`${education?.institution} logo`}
                  className={`w-full h-full object-contain transition-opacity duration-brand-medium ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <Icon name="GraduationCap" size={24} className="text-text-secondary" />
                )}
              </div>
              
              <div>
                <p className="text-sm font-medium text-text-primary">{education?.specialization}</p>
                {education?.department && (
                  <p className="text-xs text-text-secondary">{education?.department}</p>
                )}
              </div>
            </div>

            {/* Expanded Content */}
            <div className={`transition-all duration-brand-medium overflow-hidden ${
              isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pt-4 border-t border-border">
                {/* Description */}
                {education?.description && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">About the Program</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{education?.description}</p>
                  </div>
                )}

                {/* Key Subjects */}
                {education?.subjects && education?.subjects?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Key Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {education?.subjects?.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full border"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {education?.achievements && education?.achievements?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Achievements & Recognition</h4>
                    <div className="space-y-2">
                      {education?.achievements?.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="Award" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {education?.projects && education?.projects?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Notable Projects</h4>
                    <div className="space-y-3">
                      {education?.projects?.map((project, idx) => (
                        <div key={idx} className="bg-muted/50 rounded-brand p-3">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="text-sm font-medium text-text-primary">{project?.title}</h5>
                            {project?.grade && (
                              <span className={`text-xs font-semibold ${getGradeColor(project?.grade)}`}>
                                {project?.grade}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-text-secondary mb-2">{project?.description}</p>
                          {project?.technologies && (
                            <div className="flex flex-wrap gap-1">
                              {project?.technologies?.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {education?.certifications && education?.certifications?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Related Certifications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {education?.certifications?.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-brand">
                          <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                            <Icon name="Shield" size={16} className="text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-primary truncate">{cert?.name}</p>
                            <p className="text-xs text-text-secondary">{cert?.issuer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;