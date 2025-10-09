import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import TimelineItem from './components/TimelineItem';
import EducationStats from './components/EducationStats';
import CertificationBadge from './components/CertificationBadge';
import LearningPhilosophy from './components/LearningPhilosophy';
import CertificationModal from './components/CertificationModal';

const Education = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock education data
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "Anna University",
      location: "Chennai, Tamil Nadu",
      duration: "2021 - 2023",
      status: "Completed",
      grade: 8.7,
      gradeType: "CGPA",
      specialization: "Software Engineering & Data Science",
      department: "Department of Computer Applications",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center",
      description: `Advanced program focusing on modern software development methodologies, data structures, algorithms, and emerging technologies. Specialized in full-stack development with emphasis on scalable web applications and data-driven solutions.`,
      subjects: [
        "Advanced Data Structures",
        "Software Engineering",
        "Database Management Systems",
        "Web Technologies",
        "Machine Learning",
        "Cloud Computing",
        "Mobile Application Development",
        "System Design"
      ],
      achievements: [
        "Dean's List for Academic Excellence (2022-2023)",
        "Best Project Award for E-commerce Platform Development",
        "Published research paper on \'Optimizing React Performance'",
        "Led university coding club with 200+ members"
      ],
      projects: [
        {
          title: "Smart Campus Management System",
          description: "Full-stack web application for university administration with real-time notifications and analytics dashboard",
          grade: 9.2,
          technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"]
        },
        {
          title: "AI-Powered Code Review Tool",
          description: "Machine learning application that analyzes code quality and suggests improvements",
          grade: 8.9,
          technologies: ["Python", "TensorFlow", "Flask", "Docker", "PostgreSQL"]
        }
      ],
      certifications: [
        {
          name: "AWS Certified Developer",
          issuer: "Amazon Web Services"
        },
        {
          name: "React Professional Certificate",
          issuer: "Meta"
        }
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "SRM Institute of Science and Technology",
      location: "Kattankulathur, Tamil Nadu",
      duration: "2018 - 2021",
      status: "Completed",
      grade: 8.4,
      gradeType: "CGPA",
      specialization: "Computer Science & Engineering",
      department: "School of Computing",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop&crop=center",
      description: `Comprehensive undergraduate program covering fundamental computer science concepts, programming paradigms, and software development practices. Strong foundation in mathematics, algorithms, and system design principles.`,
      subjects: [
        "Programming Fundamentals",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Computer Networks",
        "Operating Systems",
        "Database Systems",
        "Software Engineering",
        "Computer Graphics"
      ],
      achievements: [
        "Graduated Magna Cum Laude",
        "Winner of Inter-College Hackathon 2020",
        "Technical Lead for Student Developer Community",
        "Scholarship recipient for academic merit (3 consecutive years)"
      ],
      projects: [
        {
          title: "Library Management System",
          description: "Desktop application with GUI for managing library operations and inventory",
          grade: 8.8,
          technologies: ["Java", "Swing", "MySQL", "JDBC"]
        },
        {
          title: "Network Security Scanner",
          description: "Tool for identifying vulnerabilities in network infrastructure",
          grade: 8.5,
          technologies: ["Python", "Nmap", "Wireshark", "Tkinter"]
        }
      ]
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate",
      institution: "DAV Public School",
      location: "Chennai, Tamil Nadu",
      duration: "2016 - 2018",
      status: "Completed",
      grade: 92.5,
      gradeType: "Percentage",
      specialization: "Science Stream (PCM + Computer Science)",
      logo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&h=100&fit=crop&crop=center",
      description: `Focused on mathematics, physics, chemistry, and computer science fundamentals. Developed strong analytical and problem-solving skills that formed the foundation for engineering studies.`,
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ],
      achievements: [
        "School Topper in Computer Science",
        "State-level Mathematics Olympiad Qualifier",
        "Captain of School Programming Club",
        "Perfect attendance award"
      ]
    }
  ];

  // Mock certifications data
  const certificationsData = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "March 2023",
      expiryDate: "March 2026",
      status: "Active",
      credentialId: "AWS-CSA-2023-001234",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center",
      verificationUrl: "https://aws.amazon.com/verification",
      certificateUrl: "https://aws.amazon.com/certificate/download",
      category: "Cloud Computing",
      description: `This certification validates expertise in designing distributed systems on AWS. It covers architectural best practices, security, cost optimization, and operational excellence on the AWS platform.`,
      skills: ["AWS Architecture", "Cloud Security", "Cost Optimization", "High Availability", "Disaster Recovery"],
      learningOutcomes: [
        "Design resilient architectures on AWS",
        "Implement security best practices",
        "Optimize costs and performance",
        "Troubleshoot common architectural issues"
      ],
      validationMethod: "Proctored Online Exam"
    },
    {
      id: 2,
      name: "React Professional Developer",
      issuer: "Meta",
      issueDate: "January 2023",
      status: "Active",
      credentialId: "META-REACT-2023-5678",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center",
      verificationUrl: "https://meta.com/verification",
      category: "Frontend Development",
      description: `Professional certification demonstrating advanced React development skills including hooks, context, performance optimization, and modern React patterns.`,
      skills: ["React Hooks", "Context API", "Performance Optimization", "Testing", "State Management"],
      learningOutcomes: [
        "Build complex React applications",
        "Implement advanced React patterns",
        "Optimize application performance",
        "Write comprehensive tests"
      ]
    },
    {
      id: 3,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      issueDate: "November 2022",
      expiryDate: "November 2024",
      status: "Active",
      credentialId: "GCP-PD-2022-9012",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center",
      verificationUrl: "https://cloud.google.com/verification",
      category: "Cloud Computing",
      description: `Validates ability to design, build, and deploy applications on Google Cloud Platform using cloud-native technologies and best practices.`,
      skills: ["GCP Services", "Kubernetes", "Cloud Functions", "BigQuery", "Cloud Storage"],
      learningOutcomes: [
        "Deploy applications on GCP",
        "Implement CI/CD pipelines",
        "Use cloud-native services",
        "Monitor and debug applications"
      ]
    },
    {
      id: 4,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      issueDate: "September 2022",
      status: "Active",
      credentialId: "MONGO-DEV-2022-3456",
      logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center",
      category: "Database",
      description: `Certification demonstrating proficiency in MongoDB database design, querying, indexing, and application development.`,
      skills: ["MongoDB Queries", "Schema Design", "Indexing", "Aggregation", "Replication"],
      learningOutcomes: [
        "Design efficient MongoDB schemas",
        "Write complex aggregation pipelines",
        "Optimize query performance",
        "Implement data modeling best practices"
      ]
    },
    {
      id: 5,
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      issueDate: "July 2022",
      expiryDate: "July 2024",
      status: "Active",
      credentialId: "DOCKER-DCA-2022-7890",
      logo: "https://images.unsplash.com/photo-1605745341112-85968b19335a?w=100&h=100&fit=crop&crop=center",
      category: "DevOps",
      description: `Validates skills in containerization, Docker orchestration, security, and networking in production environments.`,
      skills: ["Docker Containers", "Docker Compose", "Swarm Mode", "Container Security", "Networking"],
      learningOutcomes: [
        "Containerize applications effectively",
        "Orchestrate multi-container applications",
        "Implement container security",
        "Manage container networks"
      ]
    },
    {
      id: 6,
      name: "Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "May 2022",
      expiryDate: "May 2025",
      status: "Active",
      credentialId: "CKA-2022-1122",
      logo: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop&crop=center",
      category: "DevOps",
      description: `Hands-on certification proving ability to perform the responsibilities of Kubernetes administrators including cluster management and troubleshooting.`,
      skills: ["Cluster Management", "Pod Scheduling", "Networking", "Storage", "Troubleshooting"],
      learningOutcomes: [
        "Manage Kubernetes clusters",
        "Deploy and scale applications",
        "Configure networking and storage",
        "Troubleshoot cluster issues"
      ]
    }
  ];

  const certificationCategories = ['All', 'Cloud Computing', 'Frontend Development', 'Database', 'DevOps'];

  const filteredCertifications = activeFilter === 'All' 
    ? certificationsData 
    : certificationsData?.filter(cert => cert?.category === activeFilter);

  const handleToggleExpand = (id) => {
    setExpandedId(id);
  };

  const handleCertificationClick = (certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Education - Gokul Portfolio Pro</title>
        <meta name="description" content="Academic timeline featuring interactive education showcase with achievements and certifications. Explore my learning journey and professional development." />
        <meta name="keywords" content="education, academic timeline, certifications, achievements, learning journey, computer science, software engineering" />
        <meta property="og:title" content="Education - Gokul Portfolio Pro" />
        <meta property="og:description" content="Discover my academic journey, achievements, and professional certifications in software development and technology." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-brand-xl flex items-center justify-center mx-auto mb-6 shadow-brand-prominent">
                  <Icon name="GraduationCap" size={40} className="text-white" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                  Academic
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Journey</span>
                </h1>
                
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  A comprehensive timeline of my educational milestones, achievements, and continuous learning journey in technology and software development.
                </p>
              </div>

              {/* Education Statistics */}
              <EducationStats educationData={educationData} />
            </div>
          </section>

          {/* Learning Philosophy */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <LearningPhilosophy />
            </div>
          </section>

          {/* Education Timeline */}
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Educational Timeline
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  From foundational studies to advanced specializations, here's my academic journey that shaped my technical expertise.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                {educationData?.map((education, index) => (
                  <TimelineItem
                    key={education?.id}
                    education={education}
                    index={index}
                    isLast={index === educationData?.length - 1}
                    expandedId={expandedId}
                    onToggleExpand={handleToggleExpand}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Professional Certifications
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                  Industry-recognized certifications that validate my expertise in modern technologies and development practices.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {certificationCategories?.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-brand-medium focus-brand ${
                        activeFilter === category
                          ? 'bg-primary text-primary-foreground shadow-brand-subtle'
                          : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertifications?.map((certification) => (
                  <CertificationBadge
                    key={certification?.id}
                    certification={certification}
                    onClick={handleCertificationClick}
                  />
                ))}
              </div>

              {filteredCertifications?.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                  <p className="text-text-secondary">No certifications found in this category.</p>
                </div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-brand-lg flex items-center justify-center mx-auto mb-6">
                <Icon name="Rocket" size={32} className="text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Ready to Build Something Amazing?
              </h2>
              
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                My educational foundation and continuous learning approach ensure I stay current with the latest technologies and best practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/portfolio'}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-brand-lg font-semibold shadow-brand-medium hover:shadow-brand-prominent transition-all duration-brand-medium brand-button-hover focus-brand"
                >
                  <Icon name="Eye" size={20} className="inline mr-2" />
                  View My Projects
                </button>
                
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="px-8 py-3 border border-primary text-primary rounded-brand-lg font-semibold hover:bg-primary hover:text-white transition-all duration-brand-medium focus-brand"
                >
                  <Icon name="MessageCircle" size={20} className="inline mr-2" />
                  Let's Connect
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Certification Modal */}
        <CertificationModal
          certification={selectedCertification}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-brand flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-text-primary font-semibold">Gokul Portfolio Pro</span>
              </div>
              
              <div className="text-sm text-text-secondary">
                © {new Date()?.getFullYear()} Digital Craftsman. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Education;