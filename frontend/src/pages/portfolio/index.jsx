import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import FilterTabs from './components/FilterTabs';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      category: "Full-Stack",
      description: "Complete e-commerce solution with advanced inventory management, real-time analytics, and seamless payment integration.",
      fullDescription: `A comprehensive e-commerce platform built to handle high-traffic scenarios with advanced features including real-time inventory management, sophisticated analytics dashboard, and multi-payment gateway integration. The platform serves over 10,000 active users and processes thousands of transactions daily.

This project showcases modern web development practices with a focus on performance, scalability, and user experience. The architecture follows microservices principles with containerized deployment and automated CI/CD pipelines.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS", "Docker", "Redis"],
      techCategories: [
        {
          name: "Frontend",
          icon: "Monitor",
          technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          name: "Backend",
          icon: "Server",
          technologies: ["Node.js", "Express", "MongoDB", "Redis", "JWT"]
        },
        {
          name: "DevOps",
          icon: "Cloud",
          technologies: ["AWS", "Docker", "GitHub Actions", "Nginx"]
        }
      ],
      year: "2024",
      duration: "4 months",
      teamSize: "Solo Developer",
      role: "Full-Stack Developer",
      liveDemo: "https://demo-ecommerce.example.com",
      github: "https://github.com/gokul/ecommerce-platform",
      featured: true,
      metrics: [
        { value: "99.9%", label: "Uptime" },
        { value: "2.1s", label: "Load Time" }
      ],
      detailedMetrics: [
        { value: "10K+", label: "Active Users", description: "Monthly active users" },
        { value: "45%", label: "Performance Boost", description: "Compared to previous system" },
        { value: "99.9%", label: "Uptime", description: "System reliability" },
        { value: "$2M+", label: "Revenue Processed", description: "Total transactions handled" }
      ],
      challenge: "The client needed a scalable e-commerce solution that could handle high traffic during peak seasons while maintaining fast load times and providing real-time inventory updates across multiple sales channels.",
      solution: "Implemented a microservices architecture with Redis caching, CDN integration, and real-time WebSocket connections for inventory updates. Used horizontal scaling with load balancers to handle traffic spikes.",
      features: [
        { title: "Real-time Inventory", description: "Live stock updates across all channels" },
        { title: "Advanced Analytics", description: "Comprehensive sales and user behavior insights" },
        { title: "Multi-payment Support", description: "Integration with 5+ payment gateways" },
        { title: "Mobile Responsive", description: "Optimized for all device types" }
      ],
      highlights: [
        "Reduced page load time by 45% through optimization",
        "Implemented real-time inventory synchronization",
        "Achieved 99.9% uptime with robust error handling",
        "Processed over $2M in transactions safely"
      ]
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Web Application",
      description: "Comprehensive healthcare platform connecting patients, doctors, and administrators with appointment scheduling and medical records.",
      fullDescription: `A complete healthcare management system designed to streamline medical operations and improve patient care. The platform includes patient portals, doctor dashboards, appointment scheduling, medical record management, and telemedicine capabilities.

Built with security and compliance in mind, following HIPAA guidelines for healthcare data protection. The system handles sensitive medical information with end-to-end encryption and secure authentication protocols.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      techStack: ["React", "Python", "Django", "PostgreSQL", "WebRTC", "AWS"],
      techCategories: [
        {
          name: "Frontend",
          icon: "Monitor",
          technologies: ["React", "Redux", "Material-UI", "WebRTC"]
        },
        {
          name: "Backend",
          icon: "Server",
          technologies: ["Python", "Django", "PostgreSQL", "Celery"]
        },
        {
          name: "Security",
          icon: "Shield",
          technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "HIPAA Compliance"]
        }
      ],
      year: "2024",
      duration: "6 months",
      teamSize: "3 Developers",
      role: "Lead Developer",
      liveDemo: "https://healthcare-demo.example.com",
      github: "https://github.com/gokul/healthcare-system",
      metrics: [
        { value: "5K+", label: "Patients" },
        { value: "200+", label: "Doctors" }
      ],
      detailedMetrics: [
        { value: "5,000+", label: "Registered Patients", description: "Active user base" },
        { value: "200+", label: "Healthcare Providers", description: "Doctors and specialists" },
        { value: "15K+", label: "Appointments", description: "Successfully scheduled" },
        { value: "100%", label: "HIPAA Compliant", description: "Security standards met" }
      ],
      challenge: "Healthcare providers needed a unified platform to manage patient records, appointments, and telemedicine consultations while ensuring HIPAA compliance and data security.",
      solution: "Developed a comprehensive platform with role-based access control, encrypted data storage, and integrated video calling for telemedicine. Implemented automated appointment reminders and medical record digitization.",
      features: [
        { title: "Patient Portal", description: "Secure access to medical records and appointments" },
        { title: "Telemedicine", description: "Video consultations with WebRTC integration" },
        { title: "Appointment System", description: "Smart scheduling with conflict resolution" },
        { title: "Medical Records", description: "Digital health record management" }
      ]
    },
    {
      id: 3,
      title: "Real Estate Analytics Dashboard",
      category: "Data Visualization",
      description: "Advanced analytics platform for real estate market trends, property valuations, and investment insights with interactive visualizations.",
      fullDescription: `A sophisticated real estate analytics platform that aggregates market data from multiple sources to provide comprehensive insights for investors, agents, and property managers. Features include predictive pricing models, market trend analysis, and investment opportunity identification.

The dashboard processes millions of property records and market transactions to generate actionable insights through interactive visualizations and automated reports.`,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      techStack: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Plotly"],
      techCategories: [
        {
          name: "Frontend",
          icon: "Monitor",
          technologies: ["React", "D3.js", "Plotly", "Recharts"]
        },
        {
          name: "Backend",
          icon: "Server",
          technologies: ["Python", "FastAPI", "PostgreSQL", "Pandas"]
        },
        {
          name: "Analytics",
          icon: "BarChart",
          technologies: ["Machine Learning", "Data Mining", "Statistical Analysis"]
        }
      ],
      year: "2023",
      duration: "3 months",
      teamSize: "2 Developers",
      role: "Frontend Lead",
      liveDemo: "https://realestate-analytics.example.com",
      github: "https://github.com/gokul/realestate-dashboard",
      metrics: [
        { value: "1M+", label: "Properties" },
        { value: "95%", label: "Accuracy" }
      ],
      detailedMetrics: [
        { value: "1M+", label: "Property Records", description: "Analyzed and processed" },
        { value: "95%", label: "Prediction Accuracy", description: "Price estimation model" },
        { value: "500+", label: "Active Users", description: "Real estate professionals" },
        { value: "50%", label: "Time Saved", description: "In market research" }
      ],
      challenge: "Real estate professionals needed a comprehensive tool to analyze market trends, predict property values, and identify investment opportunities from vast amounts of scattered data.",
      solution: "Built an analytics platform that aggregates data from multiple sources, applies machine learning for price predictions, and presents insights through interactive visualizations and automated reports.",
      features: [
        { title: "Market Trends", description: "Real-time market analysis and forecasting" },
        { title: "Price Prediction", description: "ML-powered property valuation models" },
        { title: "Investment Insights", description: "ROI analysis and opportunity identification" },
        { title: "Interactive Maps", description: "Geographic data visualization" }
      ]
    },
    {
      id: 4,
      title: "Social Learning Platform",
      category: "Education",
      description: "Interactive learning platform with video courses, live sessions, progress tracking, and community features for collaborative education.",
      fullDescription: `A comprehensive social learning platform that combines traditional online courses with community-driven learning experiences. Features include video streaming, live interactive sessions, peer-to-peer learning, progress tracking, and gamification elements.

The platform supports multiple content formats, adaptive learning paths, and social features that encourage collaboration and knowledge sharing among learners.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC", "AWS S3"],
      year: "2023",
      duration: "5 months",
      teamSize: "4 Developers",
      role: "Full-Stack Developer",
      liveDemo: "https://learning-platform.example.com",
      github: "https://github.com/gokul/learning-platform",
      metrics: [
        { value: "2K+", label: "Students" },
        { value: "150+", label: "Courses" }
      ],
      challenge: "Educational institutions needed a platform that could deliver engaging online learning experiences while fostering community interaction and collaboration among students.",
      solution: "Created a social learning platform with video streaming, real-time chat, collaborative tools, and gamification features to enhance engagement and learning outcomes.",
      features: [
        { title: "Video Streaming", description: "High-quality course content delivery" },
        { title: "Live Sessions", description: "Real-time interactive classes" },
        { title: "Progress Tracking", description: "Detailed learning analytics" },
        { title: "Community Features", description: "Discussion forums and peer interaction" }
      ]
    },
    {
      id: 5,
      title: "Financial Portfolio Tracker",
      category: "FinTech",
      description: "Personal finance management tool with investment tracking, budget planning, and financial goal setting with real-time market data.",
      fullDescription: `A comprehensive personal finance management application that helps users track investments, manage budgets, and achieve financial goals. Integrates with multiple financial institutions and market data providers for real-time portfolio updates.

Features advanced analytics, automated categorization, and personalized financial insights to help users make informed financial decisions.`,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      techStack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Chart.js"],
      year: "2023",
      duration: "4 months",
      teamSize: "Solo Developer",
      role: "Full-Stack Developer",
      liveDemo: "https://portfolio-tracker.example.com",
      github: "https://github.com/gokul/portfolio-tracker",
      metrics: [
        { value: "1K+", label: "Users" },
        { value: "$10M+", label: "Tracked" }
      ],
      challenge: "Individual investors needed a unified platform to track their diverse investment portfolios, monitor performance, and make data-driven financial decisions.",
      solution: "Developed a comprehensive finance tracker with real-time market data integration, automated portfolio analysis, and personalized financial insights and recommendations.",
      features: [
        { title: "Portfolio Tracking", description: "Real-time investment monitoring" },
        { title: "Budget Management", description: "Expense tracking and planning" },
        { title: "Goal Setting", description: "Financial milestone tracking" },
        { title: "Market Analysis", description: "Investment performance insights" }
      ]
    },
    {
      id: 6,
      title: "Task Management System",
      category: "Productivity",
      description: "Collaborative project management tool with team coordination, deadline tracking, and productivity analytics for remote teams.",
      fullDescription: `A modern project management solution designed for remote teams and distributed workflows. Features include task assignment, progress tracking, team collaboration tools, and comprehensive project analytics.

Built with scalability in mind to support teams of all sizes, from small startups to large enterprises, with customizable workflows and integration capabilities.`,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      techStack: ["React", "Redux", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
      year: "2022",
      duration: "3 months",
      teamSize: "3 Developers",
      role: "Frontend Developer",
      liveDemo: "https://task-manager.example.com",
      github: "https://github.com/gokul/task-manager",
      metrics: [
        { value: "500+", label: "Teams" },
        { value: "25%", label: "Efficiency" }
      ],
      challenge: "Remote teams struggled with project coordination, task visibility, and productivity tracking across different time zones and work schedules.",
      solution: "Built a collaborative task management system with real-time updates, automated notifications, and comprehensive analytics to improve team coordination and productivity.",
      features: [
        { title: "Team Collaboration", description: "Real-time project coordination" },
        { title: "Task Tracking", description: "Progress monitoring and deadlines" },
        { title: "Analytics Dashboard", description: "Productivity insights and reports" },
        { title: "Integration Support", description: "Third-party tool connections" }
      ]
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Projects', icon: 'Grid', count: projects?.length },
    { id: 'Full-Stack', name: 'Full-Stack', icon: 'Code', count: projects?.filter(p => p?.category === 'Full-Stack')?.length },
    { id: 'Web Application', name: 'Web Apps', icon: 'Globe', count: projects?.filter(p => p?.category === 'Web Application')?.length },
    { id: 'Data Visualization', name: 'Analytics', icon: 'BarChart', count: projects?.filter(p => p?.category === 'Data Visualization')?.length },
    { id: 'Education', name: 'Education', icon: 'BookOpen', count: projects?.filter(p => p?.category === 'Education')?.length },
    { id: 'FinTech', name: 'FinTech', icon: 'DollarSign', count: projects?.filter(p => p?.category === 'FinTech')?.length },
    { id: 'Productivity', name: 'Productivity', icon: 'CheckSquare', count: projects?.filter(p => p?.category === 'Productivity')?.length }
  ];

  // Featured project (first project)
  const featuredProject = projects?.[0];

  // Filter projects based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects?.filter(p => !p?.featured));
    } else {
      setFilteredProjects(projects?.filter(p => p?.category === activeCategory && !p?.featured));
    }
  }, [activeCategory]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio - Gokul Portfolio Pro | Digital Craftsman Projects</title>
        <meta name="description" content="Explore my portfolio of full-stack web applications, data visualization projects, and digital solutions. See case studies, live demos, and technical implementations." />
        <meta name="keywords" content="portfolio, web development, full-stack, React, Node.js, projects, case studies" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-brand-lg mb-6">
              <Icon name="Briefcase" size={20} />
              <span className="font-medium">Project Showcase</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Digital Experiences That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Drive Results
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore my portfolio of full-stack applications, data visualizations, and digital solutions. 
              Each project showcases technical excellence combined with business impact and user-centered design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                iconName="ArrowDown"
                iconPosition="right"
                className="bg-gradient-to-r from-primary to-secondary brand-button-hover"
              >
                Explore Projects
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                iconName="MessageCircle"
                iconPosition="left"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ProjectStats />
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FeaturedProject 
              project={featuredProject} 
              onViewDetails={handleViewDetails}
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                More Projects
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Discover additional projects showcasing diverse technologies and problem-solving approaches
              </p>
            </div>

            {/* Filter Tabs */}
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {filteredProjects?.length === 0 && (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary">Try selecting a different category to see more projects.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Let's collaborate on your next digital project. I bring technical expertise, 
              creative problem-solving, and a focus on measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-to-r from-primary to-secondary pulse-gentle"
              >
                Start a Conversation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/skills'}
                iconName="Code"
                iconPosition="left"
              >
                View My Skills
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="icon"
          onClick={() => window.location.href = '/contact'}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-brand-prominent pulse-gentle brand-button-hover"
        >
          <Icon name="Plus" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;