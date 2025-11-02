import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/Appicon';
import Button from '../../../components/ui/Button';

const SkillsPreview = ({ onNavigate }) => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'Monitor',
      color: 'primary',
      skills: [
          { name: 'React.js', level: 95, icon: 'Code' },
          { name: 'TypeScript', level: 90, icon: 'FileCode' },
          { name: 'Tailwind CSS', level: 92, icon: 'Palette' },
          { name: 'Next.js', level: 88, icon: 'Zap' }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'Server',
      color: 'secondary',
      skills: [
        { name: 'Node.js', level: 90, icon: 'Database' },
        { name: 'Express.js', level: 88, icon: 'Globe' },
        { name: 'MongoDB', level: 85, icon: 'HardDrive' },
        { name: 'PostgreSQL', level: 82, icon: 'Archive' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'Settings',
      color: 'accent',
      skills: [
        { name: 'Git & GitHub', level: 93, icon: 'GitBranch' },
        { name: 'Docker', level: 80, icon: 'Package' },
        { name: 'AWS', level: 75, icon: 'Cloud' },
        { name: 'CI/CD', level: 78, icon: 'RefreshCw' }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/20',
        progress: 'bg-primary'
      },
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        border: 'border-secondary/20',
        progress: 'bg-secondary'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent/20',
        progress: 'bg-accent'
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Icon name="Code" size={16} />
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Mastering the{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Tech Stack
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            From pixel-perfect frontends to robust backend architectures, I leverage cutting-edge technologies to build scalable, performant applications that drive business success.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}


        {/* Tech Stack Highlights */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-brand-xl p-8 md:p-12 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Preferred Technology Stack
            </h3>
            <p className="text-text-secondary">
              The powerful combination I use to build modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { name: 'React.js', desc: 'Frontend Framework', icon: 'FileCode' },
              { name: 'Tailwind CSS', desc: 'Styling Framework', icon: 'Palette' },
              { name: 'Node.js', desc: 'Backend Runtime', icon: 'Server' },
              { name: 'MongoDB', desc: 'Database', icon: 'Database' },
              { name: 'Java', desc: 'Programming', icon: 'Computer' },
              { name: 'HTML', desc: 'Markup Language', icon: 'Code' },
              { name: 'SQL', desc: 'Database', icon: 'Database' },
              { name: 'Express.js', desc: 'Backend Framework', icon: 'Globe' }
            ]?.map((tech, index) => (
              <motion.div 
                key={tech?.name}
                className="text-center p-4 bg-card rounded-brand border border-border hover:shadow-brand-medium transition-all duration-brand-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-3">
                  <Icon name={tech?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary">{tech?.name}</h4>
                <p className="text-xs text-text-secondary mt-1">{tech?.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPreview;