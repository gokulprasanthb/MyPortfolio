import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PersonalityInsights = () => {
  const [activeInsight, setActiveInsight] = useState(null);

  const personalityTraits = [
    {
      id: 'problem-solver',
      title: "Problem Solver",
      icon: "Puzzle",
      description: "I thrive on complex challenges and finding elegant solutions",
      details: `Every problem is a puzzle waiting to be solved. I approach challenges with curiosity and systematic thinking, breaking down complex issues into manageable components.\n\nMy problem-solving process involves understanding the root cause, exploring multiple solutions, and choosing the most efficient and scalable approach. I believe that the best solutions are often the simplest ones.`,
      color: "from-blue-500 to-cyan-500",
      stats: { label: "Problems Solved", value: "500+" }
    },
    {
      id: 'continuous-learner',
      title: "Continuous Learner",
      icon: "BookOpen",
      description: "Always staying ahead with the latest technologies and best practices",
      details: `Technology evolves rapidly, and I make it a priority to stay current with industry trends, new frameworks, and emerging best practices.\n\nI dedicate time each week to learning new technologies, reading technical articles, and experimenting with new tools. This continuous learning approach ensures that I can always offer the most modern and efficient solutions to my clients.`,
      color: "from-green-500 to-emerald-500",
      stats: { label: "Hours Learning/Week", value: "15+" }
    },
    {
      id: 'detail-oriented',
      title: "Detail Oriented",
      icon: "Search",
      description: "Meticulous attention to code quality, performance, and user experience",
      details: `I believe that excellence lies in the details. Every line of code, every user interaction, and every performance optimization matters in creating exceptional digital experiences.\n\nMy attention to detail extends beyond code to include user experience design, accessibility considerations, and performance optimization. I ensure that every project meets the highest standards of quality.`,
      color: "from-purple-500 to-violet-500",
      stats: { label: "Code Quality Score", value: "98%" }
    },
    {
      id: 'collaborative',
      title: "Collaborative",
      icon: "Users",
      description: "Strong communication skills and team-first mentality",
      details: `Great software is built by great teams. I excel at collaborating with designers, product managers, and fellow developers to create cohesive and successful projects.\n\nI believe in clear communication, active listening, and knowledge sharing. My collaborative approach ensures that everyone on the team is aligned and working towards the same goals.`,
      color: "from-orange-500 to-red-500",
      stats: { label: "Team Projects Led", value: "25+" }
    },
    {
      id: 'user-focused',
      title: "User Focused",
      icon: "Heart",
      description: "Every decision is made with the end user\'s experience in mind",
      details: `At the heart of every great application is a great user experience. I always consider the end user's needs, preferences, and pain points when making development decisions.\n\nI conduct user research, gather feedback, and iterate based on real user data. This user-centric approach ensures that the applications I build are not just functional, but truly valuable to the people who use them.`,
      color: "from-pink-500 to-rose-500",
      stats: { label: "User Satisfaction", value: "96%" }
    },
    {
      id: 'innovative',
      title: "Innovative",
      icon: "Lightbulb",
      description: "Always looking for creative solutions and new approaches",
      details: `Innovation drives progress. I'm always exploring new technologies, experimenting with creative solutions, and thinking outside the box to solve complex problems.\n\nI enjoy pushing the boundaries of what's possible with web technologies, whether it's implementing cutting-edge animations, optimizing performance, or creating unique user interactions that delight and engage users.`,
      color: "from-indigo-500 to-purple-500",
      stats: { label: "Innovative Solutions", value: "40+" }
    }
  ];

  const coreValues = [
    {
      title: "Quality First",
      description: "Every line of code should serve a purpose and meet the highest standards",
      icon: "Award"
    },
    {
      title: "User Empathy",
      description: "Understanding user needs is the foundation of great software",
      icon: "Heart"
    },
    {
      title: "Continuous Growth",
      description: "Learning never stops in the world of technology",
      icon: "TrendingUp"
    },
    {
      title: "Transparent Communication",
      description: "Clear, honest communication builds trust and successful projects",
      icon: "MessageCircle"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What Makes Me{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Unique
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Beyond technical skills, here are the personality traits and values that define 
            my approach to development and collaboration.
          </p>
        </motion.div>

        {/* Personality Traits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {personalityTraits?.map((trait, index) => (
            <motion.div
              key={trait?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-brand-medium hover:shadow-brand-medium brand-card-hover ${
                activeInsight === trait?.id ? 'ring-2 ring-primary shadow-brand-medium' : ''
              }`}
              onClick={() => setActiveInsight(activeInsight === trait?.id ? null : trait?.id)}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${trait?.color} flex-shrink-0`}>
                  <Icon name={trait?.icon} size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{trait?.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{trait?.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{trait?.stats?.value}</div>
                  <div className="text-xs text-text-secondary">{trait?.stats?.label}</div>
                </div>
                <Icon 
                  name={activeInsight === trait?.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-text-secondary" 
                />
              </div>

              {/* Expandable Details */}
              <motion.div
                initial={false}
                animate={{ 
                  height: activeInsight === trait?.id ? 'auto' : 0,
                  opacity: activeInsight === trait?.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border space-y-3">
                  {trait?.details?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index} className="text-text-secondary text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              My Core Values
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These fundamental principles guide every decision I make and every project I undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues?.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-brand-medium">
                  <Icon name={value?.icon} size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">{value?.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{value?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-brand-subtle">
            <Icon name="Quote" size={48} className="text-primary mx-auto mb-6" />
            <blockquote className="text-xl lg:text-2xl text-text-primary font-medium leading-relaxed mb-6">
              "Great software is not just about clean code or cutting-edge technology. 
              It's about understanding people, solving real problems, and creating experiences 
              that make a meaningful difference in users' lives."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-primary">Gokul Prasanth</div>
                <div className="text-sm text-text-secondary">Digital Craftsman</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalityInsights;