import React from 'react';
import Icon from '../../../components/AppIcon';

const EducationStats = ({ educationData }) => {
  const calculateStats = () => {
    const completed = educationData?.filter(edu => edu?.status === 'Completed')?.length;
    const inProgress = educationData?.filter(edu => edu?.status === 'In Progress')?.length;
    const totalYears = educationData?.reduce((sum, edu) => {
      const years = edu?.duration?.match(/(\d+)\s*year/i);
      return sum + (years ? parseInt(years?.[1]) : 0);
    }, 0);
    
    const totalAchievements = educationData?.reduce((sum, edu) => 
      sum + (edu?.achievements ? edu?.achievements?.length : 0), 0
    );

    const averageGrade = educationData?.filter(edu => edu?.grade && edu?.status === 'Completed')?.reduce((sum, edu, _, arr) => sum + edu?.grade / arr?.length, 0);

    return {
      completed,
      inProgress,
      totalYears,
      totalAchievements,
      averageGrade: averageGrade?.toFixed(1)
    };
  };

  const stats = calculateStats();

  const statItems = [
    {
      icon: 'GraduationCap',
      label: 'Degrees Completed',
      value: stats?.completed,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: 'BookOpen',
      label: 'Currently Studying',
      value: stats?.inProgress,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: 'Clock',
      label: 'Years of Education',
      value: `${stats?.totalYears}+`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: 'Award',
      label: 'Achievements',
      value: stats?.totalAchievements,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: 'TrendingUp',
      label: 'Average Grade',
      value: stats?.averageGrade,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
      {statItems?.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-brand-lg p-4 text-center brand-card-hover shadow-brand-subtle hover:shadow-brand-medium transition-all duration-brand-medium"
        >
          <div className={`w-12 h-12 ${stat?.bgColor} rounded-brand flex items-center justify-center mx-auto mb-3`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
          <div className="text-xs text-text-secondary font-medium">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default EducationStats;