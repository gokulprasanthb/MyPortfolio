import React, { useState, useEffect } from 'react';


const SkillProgress = ({ skills, isVisible }) => {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedSkills(skills);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skills]);

  const getSkillLevel = (proficiency) => {
    if (proficiency >= 90) return { label: 'Expert', color: 'text-green-600', bgColor: 'bg-green-500' };
    if (proficiency >= 75) return { label: 'Advanced', color: 'text-blue-600', bgColor: 'bg-blue-500' };
    if (proficiency >= 60) return { label: 'Intermediate', color: 'text-yellow-600', bgColor: 'bg-yellow-500' };
    return { label: 'Beginner', color: 'text-gray-600', bgColor: 'bg-gray-500' };
  };

  const sortedSkills = animatedSkills?.sort((a, b) => b?.proficiency - a?.proficiency);

  return (
    <div className="bg-card rounded-brand-lg border border-border p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Skill Proficiency</h2>
          <p className="text-text-secondary">Detailed breakdown of technical competencies</p>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-text-secondary">Expert (90%+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-text-secondary">Advanced (75%+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-text-secondary">Intermediate (60%+)</span>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {sortedSkills?.map((skill, index) => {
          const level = getSkillLevel(skill?.proficiency);
          return (
            <div key={skill?.name} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-text-primary">{skill?.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${level?.color} bg-opacity-10`}>
                    {level?.label}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-text-secondary">{skill?.experience}</span>
                  <span className="text-sm font-bold text-primary">{skill?.proficiency}%</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${level?.bgColor} transition-all duration-brand-slow ease-out`}
                    style={{ 
                      width: isVisible ? `${skill?.proficiency}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
                
                {/* Animated percentage indicator */}
                <div 
                  className="absolute top-0 h-3 flex items-center transition-all duration-brand-slow ease-out"
                  style={{ 
                    left: isVisible ? `${skill?.proficiency}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-1 h-5 bg-text-primary rounded-full -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-brand-fast"></div>
                </div>
              </div>
              {/* Project tags */}
              <div className="mt-2 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-brand-medium">
                {skill?.projects?.slice(0, 3)?.map((project, idx) => (
                  <span key={idx} className="px-2 py-1 bg-muted text-xs rounded-brand text-text-secondary">
                    {project}
                  </span>
                ))}
                {skill?.projects?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-xs rounded-brand text-text-secondary">
                    +{skill?.projects?.length - 3} more
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Summary Stats */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              {Math.round(sortedSkills?.reduce((acc, skill) => acc + skill?.proficiency, 0) / sortedSkills?.length)}%
            </div>
            <div className="text-sm text-text-secondary">Average Proficiency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-1">
              {sortedSkills?.filter(skill => skill?.proficiency >= 90)?.length}
            </div>
            <div className="text-sm text-text-secondary">Expert Level Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">
              {sortedSkills?.filter(skill => skill?.proficiency >= 75)?.length}
            </div>
            <div className="text-sm text-text-secondary">Advanced+ Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;