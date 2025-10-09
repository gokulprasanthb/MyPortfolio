import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SkillFilter = ({ categories, activeFilter, onFilterChange, searchTerm, onSearchChange }) => {
  const filterOptions = [
    { key: 'all', label: 'All Skills', icon: 'Grid3X3' },
    { key: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { key: 'backend', label: 'Backend', icon: 'Server' },
    { key: 'database', label: 'Database', icon: 'Database' },
    { key: 'devops', label: 'DevOps', icon: 'Cloud' },
    { key: 'tools', label: 'Tools', icon: 'Wrench' },
    { key: 'mobile', label: 'Mobile', icon: 'Smartphone' }
  ];

  return (
    <div className="bg-card rounded-brand-lg border border-border p-6 shadow-brand-subtle">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
          />
          <input
            type="text"
            placeholder="Search technologies..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-brand text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-brand-fast"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filterOptions?.map((option) => (
            <Button
              key={option?.key}
              variant={activeFilter === option?.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFilterChange(option?.key)}
              iconName={option?.icon}
              iconPosition="left"
              className="brand-button-hover"
            >
              {option?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Stats */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {categories?.reduce((acc, cat) => acc + cat?.skills?.length, 0)}
            </div>
            <div className="text-sm text-text-secondary">Total Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">
              {categories?.length}
            </div>
            <div className="text-sm text-text-secondary">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">
              5+
            </div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-trust">
              50+
            </div>
            <div className="text-sm text-text-secondary">Projects Built</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillFilter;