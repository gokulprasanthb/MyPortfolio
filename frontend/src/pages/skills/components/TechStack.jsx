import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStacks = [
    {
      category: 'Frontend Stack',
      description: 'Modern UI/UX development tools',
      icon: 'Monitor',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        {
          name: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          description: 'Component-based UI library for building interactive interfaces',
          proficiency: 95,
          yearsUsed: 4
        },
        {
          name: 'Next.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          description: 'Full-stack React framework with SSR and static generation',
          proficiency: 90,
          yearsUsed: 3
        },
        {
          name: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          description: 'Typed superset of JavaScript for better code quality',
          proficiency: 88,
          yearsUsed: 3
        },
        {
          name: 'Tailwind CSS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          description: 'Utility-first CSS framework for rapid UI development',
          proficiency: 92,
          yearsUsed: 2
        }
      ]
    },
    {
      category: 'Backend Stack',
      description: 'Server-side development ecosystem',
      icon: 'Server',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        {
          name: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          description: 'JavaScript runtime for building scalable server applications',
          proficiency: 93,
          yearsUsed: 4
        },
        {
          name: 'Express.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          description: 'Fast, unopinionated web framework for Node.js',
          proficiency: 90,
          yearsUsed: 4
        },
        {
          name: 'Python',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          description: 'Versatile programming language for web development and automation',
          proficiency: 85,
          yearsUsed: 3
        },
        {
          name: 'GraphQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
          description: 'Query language and runtime for APIs',
          proficiency: 80,
          yearsUsed: 2
        }
      ]
    },
    {
      category: 'Database Stack',
      description: 'Data storage and management solutions',
      icon: 'Database',
      color: 'from-purple-500 to-violet-500',
      technologies: [
        {
          name: 'MongoDB',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          description: 'NoSQL document database for flexible data modeling',
          proficiency: 88,
          yearsUsed: 3
        },
        {
          name: 'PostgreSQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          description: 'Advanced open-source relational database',
          proficiency: 85,
          yearsUsed: 3
        },
        {
          name: 'Redis',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
          description: 'In-memory data structure store for caching and sessions',
          proficiency: 82,
          yearsUsed: 2
        },
        {
          name: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          description: 'Popular relational database management system',
          proficiency: 80,
          yearsUsed: 4
        }
      ]
    },
    {
      category: 'DevOps Stack',
      description: 'Deployment and infrastructure tools',
      icon: 'Cloud',
      color: 'from-orange-500 to-red-500',
      technologies: [
        {
          name: 'Docker',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          description: 'Containerization platform for consistent deployments',
          proficiency: 85,
          yearsUsed: 2
        },
        {
          name: 'AWS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
          description: 'Cloud computing platform for scalable applications',
          proficiency: 80,
          yearsUsed: 2
        },
        {
          name: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          description: 'Distributed version control system',
          proficiency: 90,
          yearsUsed: 5
        },
        {
          name: 'Nginx',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
          description: 'High-performance web server and reverse proxy',
          proficiency: 75,
          yearsUsed: 2
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Technology Stack</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A comprehensive overview of the technologies, frameworks, and tools I use to build 
          modern, scalable web applications from frontend to deployment.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {techStacks?.map((stack, stackIndex) => (
          <div key={stack?.category} className="bg-card rounded-brand-lg border border-border overflow-hidden brand-card-hover">
            {/* Stack Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-brand bg-gradient-to-br ${stack?.color} flex items-center justify-center shadow-brand-subtle`}>
                  <Icon name={stack?.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{stack?.category}</h3>
                  <p className="text-sm text-text-secondary">{stack?.description}</p>
                </div>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {stack?.technologies?.map((tech, techIndex) => (
                  <div
                    key={tech?.name}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredTech(`${stackIndex}-${techIndex}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="p-4 bg-muted rounded-brand hover:bg-muted/80 transition-all duration-brand-medium hover:scale-105">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-brand bg-background flex items-center justify-center overflow-hidden">
                          <Image
                            src={tech?.logo}
                            alt={`${tech?.name} logo`}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-text-primary truncate">{tech?.name}</div>
                          <div className="text-xs text-text-secondary">{tech?.yearsUsed}+ years</div>
                        </div>
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-text-secondary">Proficiency</span>
                          <span className="text-xs font-medium text-primary">{tech?.proficiency}%</span>
                        </div>
                        <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${stack?.color} transition-all duration-brand-slow`}
                            style={{ width: `${tech?.proficiency}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tooltip */}
                    {hoveredTech === `${stackIndex}-${techIndex}` && (
                      <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-card border border-border rounded-brand shadow-brand-prominent">
                        <div className="text-sm font-medium text-text-primary mb-1">{tech?.name}</div>
                        <div className="text-xs text-text-secondary">{tech?.description}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Tech Stack Summary */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-brand-lg border border-border p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">Full-Stack Expertise</h3>
          <p className="text-text-secondary mb-6 max-w-3xl mx-auto">
            With expertise spanning frontend frameworks, backend architectures, database management, 
            and DevOps practices, I deliver end-to-end solutions that are scalable, maintainable, and performant.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">16+</div>
              <div className="text-sm text-text-secondary">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-1">87%</div>
              <div className="text-sm text-text-secondary">Avg. Proficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">5+</div>
              <div className="text-sm text-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust mb-1">4</div>
              <div className="text-sm text-text-secondary">Tech Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;