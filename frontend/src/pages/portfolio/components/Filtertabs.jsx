import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-brand text-sm font-medium transition-all duration-brand-medium focus-brand ${
            activeCategory === category?.id
              ? 'bg-primary text-primary-foreground shadow-brand-subtle'
              : 'bg-card text-text-secondary hover:text-primary hover:bg-muted border border-border'
          }`}
        >
          <Icon name={category?.icon} size={16} />
          <span>{category?.name}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeCategory === category?.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-muted text-text-secondary'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;