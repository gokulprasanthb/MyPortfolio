import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StoryTimeline = () => {
  const [activeStory, setActiveStory] = useState(0);

  const storyMilestones = [
    {
      year: "2019",
      title: "The Spark",
      subtitle: "First Line of Code",
      icon: "Zap",
      description: "It all started with a simple \'Hello World\' in JavaScript. What began as curiosity quickly became a passion for creating digital solutions that matter.",
      details: `My journey into development wasn't planned - it was discovered. During my college years, I stumbled upon web development while trying to create a simple website for a college project. That first moment when I saw my code come to life in the browser was magical.\n\nI spent countless nights learning HTML, CSS, and JavaScript, driven by an insatiable curiosity to understand how the web works. Each small victory - making a button interactive, creating a responsive layout, building my first dynamic form - fueled my passion further.`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2020",
      title: "The Foundation",
      subtitle: "Building Core Skills",
      icon: "Building",
      description: "Dove deep into React and Node.js, building my first full-stack applications and understanding the complete development lifecycle.",
      details: `This was the year of intensive learning and skill building. I immersed myself in modern web technologies, focusing on React for frontend development and Node.js for backend services.\n\nI built several personal projects during this time - a task management app, a weather dashboard, and a simple e-commerce platform. Each project taught me something new about state management, API integration, database design, and user experience.\n\nThe most valuable lesson I learned was that good code isn't just about functionality - it's about maintainability, scalability, and user experience.`,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2021",
      title: "The Growth",
      subtitle: "Professional Development",
      icon: "TrendingUp",
      description: "Joined my first development team, learned about collaboration, code reviews, and building applications that serve real users at scale.",
      details: `Transitioning from solo projects to team collaboration was a game-changer. I learned the importance of clean code, proper documentation, and effective communication in a development environment.\n\nWorking on production applications taught me about performance optimization, error handling, testing strategies, and deployment processes. I discovered that building software is as much about problem-solving and teamwork as it is about coding.\n\nThis year also marked my first experience with agile methodologies, version control best practices, and the importance of user feedback in shaping product decisions.`,
      color: "from-purple-500 to-violet-500"
    },
    {
      year: "2022",
      title: "The Expansion",
      subtitle: "Full-Stack Mastery",
      icon: "Layers",
      description: "Mastered the complete development stack, from database design to deployment, while leading my first project team.",
      details: `This year was about expanding my technical horizons and taking on leadership responsibilities. I became proficient in database design, cloud services, and DevOps practices.\n\nI led my first project team, managing a complete application rebuild that improved performance by 60% and user satisfaction by 40%. This experience taught me that technical skills alone aren't enough - leadership, project management, and stakeholder communication are equally important.\n\nI also started contributing to open-source projects and sharing my knowledge through technical blog posts, establishing myself as a thought leader in the development community.`,
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2023",
      title: "The Innovation",
      subtitle: "Creating Impact",
      icon: "Lightbulb",
      description: "Focused on creating solutions that drive business results, implementing modern architectures and optimization strategies.",
      details: `This year marked a shift from just building applications to creating solutions that drive real business impact. I focused on understanding the business context behind every technical decision.\n\nI implemented modern architectures using microservices, improved application performance through advanced optimization techniques, and introduced automated testing and deployment pipelines that reduced deployment time by 80%.\n\nMy proudest achievement was developing a customer analytics platform that helped a client increase their conversion rate by 35%, directly contributing to their business growth.`,
      color: "from-pink-500 to-rose-500"
    },
    {
      year: "2024",
      title: "The Vision",
      subtitle: "Digital Craftsman",
      icon: "Target",
      description: "Established as a Digital Craftsman, focusing on creating meaningful digital experiences that transform businesses and delight users.",
      details: `Today, I've evolved into what I call a 'Digital Craftsman' - someone who approaches development with both technical expertise and artistic sensibility. Every project is an opportunity to create something meaningful.\n\nI've developed a unique approach that combines technical excellence with business acumen, ensuring that every solution I create not only works flawlessly but also drives measurable results for my clients.\n\nMy focus now is on building long-term partnerships with clients, understanding their vision, and translating it into digital experiences that exceed expectations and create lasting value.`,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            My Journey as a{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Craftsman
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Every great developer has a story. Here's mine - a journey of continuous learning, 
            growth, and the pursuit of creating meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Navigation */}
          <div className="space-y-4">
            {storyMilestones?.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative cursor-pointer transition-all duration-brand-medium ${
                  activeStory === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStory(index)}
              >
                <div className={`p-6 rounded-xl border-2 transition-all duration-brand-medium ${
                  activeStory === index
                    ? 'border-primary bg-primary/5 shadow-brand-medium'
                    : 'border-border bg-card hover:border-primary/50 hover:shadow-brand-subtle'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${milestone?.color}`}>
                      <Icon name={milestone?.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                          {milestone?.year}
                        </span>
                        {activeStory === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-primary rounded-full"
                          />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary">{milestone?.title}</h3>
                      <p className="text-sm text-text-secondary">{milestone?.subtitle}</p>
                    </div>
                    <Icon 
                      name="ChevronRight" 
                      size={20} 
                      className={`text-text-secondary transition-transform duration-brand-medium ${
                        activeStory === index ? 'rotate-90 text-primary' : ''
                      }`} 
                    />
                  </div>
                </div>

                {/* Connection Line */}
                {index < storyMilestones?.length - 1 && (
                  <div className="absolute left-12 top-full w-0.5 h-4 bg-border"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Story Content */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-8 shadow-brand-medium"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${storyMilestones?.[activeStory]?.color}`}>
                  <Icon name={storyMilestones?.[activeStory]?.icon} size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {storyMilestones?.[activeStory]?.title}
                  </h3>
                  <p className="text-text-secondary">{storyMilestones?.[activeStory]?.subtitle}</p>
                </div>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {storyMilestones?.[activeStory]?.description}
              </p>

              <div className="space-y-4">
                {storyMilestones?.[activeStory]?.details?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                  <span>Story Progress</span>
                  <span>{activeStory + 1} of {storyMilestones?.length}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeStory + 1) / storyMilestones?.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;