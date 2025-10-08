import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophyPillars = [
    {
      title: "Scalable Solutions Through Clean Code",
      description: "Every line of code should be purposeful, maintainable, and built for growth",
      icon: "Code2",
      details: [
        "Write code that tells a story and is easy to understand",
        "Implement patterns that support future scalability",
        "Prioritize maintainability over clever shortcuts",
        "Document decisions and architectural choices"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "User Experience Meets Technical Excellence",
      description: "The perfect balance between cutting-edge technology and intuitive design",
      icon: "Palette",
      details: [
        "Design with the user\'s mental model in mind",
        "Optimize for performance without sacrificing functionality",
        "Create interfaces that feel natural and responsive",
        "Test with real users to validate design decisions"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Your Vision, Expertly Executed",
      description: "Transforming business requirements into digital solutions that drive results",
      icon: "Target",
      details: [
        "Listen deeply to understand business objectives",
        "Translate requirements into technical specifications",
        "Deliver solutions that exceed expectations",
        "Measure success through business impact metrics"
      ],
      color: "from-purple-500 to-violet-500"
    }
  ];

  const developmentPrinciples = [
    {
      principle: "Test-Driven Development",
      description: "Write tests first to ensure reliability and maintainability",
      icon: "CheckCircle2"
    },
    {
      principle: "Progressive Enhancement",
      description: "Build core functionality first, then enhance with advanced features",
      icon: "Layers"
    },
    {
      principle: "Performance First",
      description: "Optimize for speed and efficiency from the ground up",
      icon: "Zap"
    },
    {
      principle: "Accessibility by Design",
      description: "Create inclusive experiences for users of all abilities",
      icon: "Users"
    },
    {
      principle: "Security Mindset",
      description: "Build with security considerations at every step",
      icon: "Shield"
    },
    {
      principle: "Continuous Integration",
      description: "Automate testing and deployment for reliable releases",
      icon: "GitBranch"
    }
  ];

  const learningPhilosophy = {
    title: "My Learning Philosophy",
    subtitle: "Staying Ahead in a Rapidly Evolving Field",
    principles: [
      {
        title: "Learn by Building",
        description: "The best way to understand a technology is to build something meaningful with it",
        icon: "Hammer"
      },
      {
        title: "Teach to Learn",
        description: "Sharing knowledge with others deepens my own understanding",
        icon: "GraduationCap"
      },
      {
        title: "Embrace Failure",
        description: "Every bug, every failed deployment, every mistake is a learning opportunity",
        icon: "TrendingUp"
      },
      {
        title: "Stay Curious",
        description: "Question everything, explore alternatives, and never stop asking 'why?'",
        icon: "Search"
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            My Development{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Philosophy
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-12">
            These core principles guide every project I undertake and every line of code I write. 
            They represent my commitment to excellence and my approach to solving complex problems.
          </p>

          {/* Philosophy Pillars */}
          <div className="grid lg:grid-cols-3 gap-8">
            {philosophyPillars?.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8 text-left hover:shadow-brand-medium transition-all duration-brand-medium brand-card-hover"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar?.color} flex items-center justify-center mb-6`}>
                  <Icon name={pillar?.icon} size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4">{pillar?.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">{pillar?.description}</p>
                
                <ul className="space-y-3">
                  {pillar?.details?.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Development Principles
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The technical standards and practices that ensure every project meets the highest quality benchmarks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentPrinciples?.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-brand-subtle transition-all duration-brand-medium group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-brand-medium">
                    <Icon name={principle?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">{principle?.principle}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{principle?.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              {learningPhilosophy?.title}
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {learningPhilosophy?.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {learningPhilosophy?.principles?.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-brand-medium">
                  <Icon name={principle?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">{principle?.title}</h4>
                  <p className="text-text-secondary leading-relaxed">{principle?.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaboration Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-brand-subtle">
            <div className="max-w-3xl mx-auto">
              <Icon name="Handshake" size={64} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                My Collaboration Approach
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                I believe that the best projects are born from true collaboration. I work closely with 
                clients, designers, and team members to ensure that every voice is heard and every 
                perspective is valued. Communication is key, and I make it a priority to keep everyone 
                informed and engaged throughout the development process.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Ear" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Active Listening</h4>
                  <p className="text-sm text-text-secondary">Understanding your needs and goals deeply</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageSquare" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Clear Communication</h4>
                  <p className="text-sm text-text-secondary">Regular updates and transparent progress sharing</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Lightbulb" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Proactive Solutions</h4>
                  <p className="text-sm text-text-secondary">Anticipating challenges and proposing improvements</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;