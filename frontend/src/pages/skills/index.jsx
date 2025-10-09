import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import SkillOverview from './components/SkillOverview';
import SkillFilter from './components/SkillFilter';
import SkillCategory from './components/SkillCategory';
import SkillProgress from './components/SkillProgress';
import TechStack from './components/TechStack';
import Icon from '../../components/AppIcon';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategories, setActiveCategories] = useState({});
  const [isProgressVisible, setIsProgressVisible] = useState(false);

  // Mock data for skills
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        {
          name: 'React',
          proficiency: 95,
          experience: '4+ years',
          description: 'Expert in building complex, scalable React applications with hooks, context, and modern patterns.',
          projects: ['E-commerce Platform', 'Dashboard Analytics', 'Social Media App', 'Portfolio Sites']
        },
        {
          name: 'Next.js',
          proficiency: 90,
          experience: '3+ years',
          description: 'Proficient in server-side rendering, static generation, and API routes for full-stack applications.',
          projects: ['Corporate Website', 'Blog Platform', 'E-learning Portal']
        },
        {
          name: 'TypeScript',
          proficiency: 88,
          experience: '3+ years',
          description: 'Strong typing skills for better code quality, maintainability, and developer experience.',
          projects: ['Enterprise Dashboard', 'API Client Library', 'Component Library']
        },
        {
          name: 'Tailwind CSS',
          proficiency: 92,
          experience: '2+ years',
          description: 'Utility-first CSS framework expertise for rapid, responsive UI development.',
          projects: ['Design System', 'Landing Pages', 'Mobile Apps']
        },
        {
          name: 'Vue.js',
          proficiency: 75,
          experience: '2+ years',
          description: 'Progressive framework knowledge for building user interfaces and single-page applications.',
          projects: ['Admin Panel', 'Real-time Chat', 'Data Visualization']
        }
      ]
    },
    {
      category: 'Backend',
      skills: [
        {
          name: 'Node.js',
          proficiency: 93,
          experience: '4+ years',
          description: 'Extensive experience building scalable server-side applications and RESTful APIs.',
          projects: ['Microservices Architecture', 'Real-time APIs', 'Authentication Systems']
        },
        {
          name: 'Express.js',
          proficiency: 90,
          experience: '4+ years',
          description: 'Fast, unopinionated web framework for building robust APIs and web applications.',
          projects: ['REST APIs', 'GraphQL Servers', 'Middleware Systems']
        },
        {
          name: 'Python',
          proficiency: 85,
          experience: '3+ years',
          description: 'Versatile language for web development, automation, and data processing.',
          projects: ['Django Applications', 'Data Analysis', 'Automation Scripts']
        },
        {
          name: 'GraphQL',
          proficiency: 80,
          experience: '2+ years',
          description: 'Query language and runtime for APIs, enabling efficient data fetching.',
          projects: ['API Gateway', 'Mobile Backend', 'Real-time Subscriptions']
        }
      ]
    },
    {
      category: 'Database',
      skills: [
        {
          name: 'MongoDB',
          proficiency: 88,
          experience: '3+ years',
          description: 'NoSQL database expertise for flexible, scalable data modeling and aggregation.',
          projects: ['Content Management', 'User Analytics', 'Real-time Applications']
        },
        {
          name: 'PostgreSQL',
          proficiency: 85,
          experience: '3+ years',
          description: 'Advanced relational database skills including complex queries and optimization.',
          projects: ['Financial Systems', 'Reporting Dashboards', 'Data Warehousing']
        },
        {
          name: 'Redis',
          proficiency: 82,
          experience: '2+ years',
          description: 'In-memory data structure store for caching, sessions, and real-time features.',
          projects: ['Session Management', 'Caching Layer', 'Pub/Sub Systems']
        },
        {
          name: 'MySQL',
          proficiency: 80,
          experience: '4+ years',
          description: 'Reliable relational database management with optimization and scaling experience.',
          projects: ['Legacy Systems', 'E-commerce Platforms', 'Content Databases']
        }
      ]
    },
    {
      category: 'DevOps',
      skills: [
        {
          name: 'Docker',
          proficiency: 85,
          experience: '2+ years',
          description: 'Containerization expertise for consistent development and deployment environments.',
          projects: ['Microservices Deployment', 'Development Environments', 'CI/CD Pipelines']
        },
        {
          name: 'AWS',
          proficiency: 80,
          experience: '2+ years',
          description: 'Cloud computing platform knowledge for scalable, reliable application hosting.',
          projects: ['Serverless Applications', 'Auto-scaling Systems', 'CDN Implementation']
        },
        {
          name: 'Git',
          proficiency: 90,
          experience: '5+ years',
          description: 'Version control mastery including branching strategies and collaborative workflows.',
          projects: ['Team Collaboration', 'Release Management', 'Code Reviews']
        },
        {
          name: 'Nginx',
          proficiency: 75,
          experience: '2+ years',
          description: 'High-performance web server and reverse proxy configuration and optimization.',
          projects: ['Load Balancing', 'SSL Termination', 'Static Asset Serving']
        }
      ]
    },
    {
      category: 'Tools',
      skills: [
        {
          name: 'VS Code',
          proficiency: 95,
          experience: '5+ years',
          description: 'Primary development environment with extensive customization and extension usage.',
          projects: ['All Development Projects', 'Custom Configurations', 'Team Setups']
        },
        {
          name: 'Figma',
          proficiency: 78,
          experience: '2+ years',
          description: 'Design tool proficiency for UI/UX design and developer-designer collaboration.',
          projects: ['Design Systems', 'Prototyping', 'Asset Export']
        },
        {
          name: 'Postman',
          proficiency: 85,
          experience: '3+ years',
          description: 'API development and testing tool expertise for comprehensive API workflows.',
          projects: ['API Testing', 'Documentation', 'Team Collaboration']
        }
      ]
    },
    {
      category: 'Mobile',
      skills: [
        {
          name: 'React Native',
          proficiency: 80,
          experience: '2+ years',
          description: 'Cross-platform mobile development using React principles and native capabilities.',
          projects: ['Social App', 'E-commerce Mobile', 'Utility Apps']
        },
        {
          name: 'Flutter',
          proficiency: 70,
          experience: '1+ years',
          description: 'Google\'s UI toolkit for building natively compiled applications for mobile platforms.',
          projects: ['Prototype Apps', 'UI Components', 'Cross-platform Solutions']
        }
      ]
    }
  ];

  // Filter skills based on active filter and search term
  const filteredCategories = skillsData?.filter(category => {
    if (activeFilter !== 'all' && category?.category?.toLowerCase() !== activeFilter) {
      return false;
    }
    
    if (searchTerm) {
      return category?.skills?.some(skill => 
        skill?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        skill?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }
    
    return true;
  })?.map(category => ({
    ...category,
    skills: category?.skills?.filter(skill =>
      !searchTerm || 
      skill?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      skill?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    )
  }));

  // Get all skills for progress component
  const allSkills = skillsData?.flatMap(category => category?.skills);

  const handleCategoryToggle = (category) => {
    setActiveCategories(prev => ({
      ...prev,
      [category]: !prev?.[category]
    }));
  };

  // Intersection Observer for progress animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProgressVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const progressElement = document.getElementById('skill-progress');
    if (progressElement) {
      observer?.observe(progressElement);
    }

    return () => {
      if (progressElement) {
        observer?.unobserve(progressElement);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Skills - Tech Mastery Hub | Gokul Portfolio Pro</title>
        <meta name="description" content="Comprehensive showcase of technical competencies including React, Node.js, databases, and DevOps. Demonstrating proven expertise in building scalable web applications." />
        <meta name="keywords" content="React developer, Node.js, full-stack developer, JavaScript, TypeScript, MongoDB, PostgreSQL, AWS, Docker" />
        <meta property="og:title" content="Skills - Tech Mastery Hub | Gokul Portfolio Pro" />
        <meta property="og:description" content="Technical expertise spanning frontend frameworks, backend architectures, database management, and DevOps practices." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/skills" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <SkillOverview />
            </div>
          </section>

          {/* Filter Section */}
          <section className="py-8 px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <SkillFilter
                categories={skillsData}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
          </section>

          {/* Skills Categories */}
          <section className="py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Skill Categories</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Explore my technical competencies organized by domain. Click on each category to see detailed 
                  proficiency levels and project experience.
                </p>
              </div>

              <div className="space-y-6">
                {filteredCategories?.map((category) => (
                  <SkillCategory
                    key={category?.category}
                    category={category?.category}
                    skills={category?.skills}
                    isActive={activeCategories?.[category?.category]}
                    onToggle={() => handleCategoryToggle(category?.category)}
                  />
                ))}
              </div>

              {filteredCategories?.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-text-primary mb-2">No skills found</h3>
                  <p className="text-text-secondary">
                    Try adjusting your search term or filter to find relevant skills.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Skill Progress */}
          <section id="skill-progress" className="py-16 px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <SkillProgress 
                skills={allSkills} 
                isVisible={isProgressVisible}
              />
            </div>
          </section>

          {/* Technology Stack */}
          <section className="py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <TechStack />
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-text-secondary mb-8">
                Let's discuss how my technical expertise can help bring your project to life. 
                From concept to deployment, I'm here to deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/portfolio'}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-brand font-medium hover:shadow-brand-hover transition-all duration-brand-medium brand-button-hover"
                >
                  <Icon name="Eye" size={20} className="inline mr-2" />
                  View My Projects
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="px-8 py-4 border border-border text-text-primary rounded-brand font-medium hover:bg-muted transition-all duration-brand-medium brand-button-hover"
                >
                  <Icon name="MessageCircle" size={20} className="inline mr-2" />
                  Let's Connect
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <button
            onClick={() => window.location.href = '/contact'}
            className="w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-brand-prominent flex items-center justify-center pulse-gentle brand-button-hover"
          >
            <Icon name="MessageCircle" size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Skills;