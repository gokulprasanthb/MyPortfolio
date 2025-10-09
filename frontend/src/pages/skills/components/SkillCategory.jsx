import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillCategory = ({ category, skills, isActive, onToggle }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categoryIcons = {
    'Frontend': 'Monitor',
    'Backend': 'Server',
    'Database': 'Database',
    'DevOps': 'Cloud',
    'Tools': 'Wrench',
    'Mobile': 'Smartphone'
  };

  const categoryColors = {
    'Frontend': 'from-blue-500 to-cyan-500',
    'Backend': 'from-green-500 to-emerald-500',
    'Database': 'from-purple-500 to-violet-500',
    'DevOps': 'from-orange-500 to-red-500',
    'Tools': 'from-gray-500 to-slate-500',
    'Mobile': 'from-pink-500 to-rose-500'
  };

  return (
    <div className="bg-card rounded-brand-lg border border-border overflow-hidden brand-card-hover">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left focus-brand"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-brand bg-gradient-to-br ${categoryColors?.[category]} flex items-center justify-center shadow-brand-subtle`}>
              <Icon name={categoryIcons?.[category]} size={24} color="white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary">{category}</h3>
              <p className="text-sm text-text-secondary">{skills?.length} technologies</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-sm font-medium text-text-primary">
                {Math.round(skills?.reduce((acc, skill) => acc + skill?.proficiency, 0) / skills?.length)}%
              </div>
              <div className="text-xs text-text-secondary">Avg. Proficiency</div>
            </div>
            <Icon 
              name={isActive ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className={`text-text-secondary transition-transform duration-brand-medium ${isActive ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </button>
      <div className={`transition-all duration-brand-medium overflow-hidden ${
        isActive ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills?.map((skill, index) => (
              <div
                key={skill?.name}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill?.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center justify-between p-4 bg-muted rounded-brand hover:bg-muted/80 transition-colors duration-brand-fast">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-brand bg-background flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {skill?.name?.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">{skill?.name}</div>
                      <div className="text-xs text-text-secondary">{skill?.experience}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary">{skill?.proficiency}%</div>
                    <div className="w-16 h-2 bg-background rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${categoryColors?.[category]} transition-all duration-brand-slow`}
                        style={{ width: `${skill?.proficiency}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredSkill === skill?.name && (
                  <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-card border border-border rounded-brand shadow-brand-prominent">
                    <div className="text-sm font-medium text-text-primary mb-1">{skill?.name}</div>
                    <div className="text-xs text-text-secondary mb-2">{skill?.description}</div>
                    <div className="flex flex-wrap gap-1">
                      {skill?.projects?.map((project, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted text-xs rounded-brand text-text-secondary">
                          {project}
                        </span>
                      ))}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;