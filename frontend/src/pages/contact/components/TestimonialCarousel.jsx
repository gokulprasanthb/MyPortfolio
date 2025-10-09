import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Gokul transformed our outdated system into a modern, scalable platform. His attention to detail and ability to understand complex business requirements is exceptional. The project was delivered on time and exceeded our expectations.`,
      rating: 5,
      project: "Enterprise Web Application",
      result: "40% increase in user engagement"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "StartupLaunch",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with Gokul was a game-changer for our startup. He didn't just build our MVP; he helped us think through the technical architecture and scalability from day one. His expertise in React and Node.js is top-notch.`,
      rating: 5,
      project: "SaaS Platform MVP",
      result: "Successfully raised $2M Series A"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Product Manager",
      company: "DigitalFirst Agency",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Gokul's ability to translate complex requirements into elegant solutions is remarkable. He maintained excellent communication throughout the project and delivered a product that our clients absolutely love.`,
      rating: 5,
      project: "Client Portal System",
      result: "95% client satisfaction score"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Technical Lead",
      company: "InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `I've worked with many developers, but Gokul stands out for his problem-solving approach and clean code practices. He's not just a developer; he's a true technical partner who cares about the success of your project.`,
      rating: 5,
      project: "API Integration Platform",
      result: "50% reduction in processing time"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "GrowthHackers Inc",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content: `Gokul built our marketing automation platform that has become the backbone of our operations. His understanding of both technical and business aspects made the collaboration seamless and highly productive.`,
      rating: 5,
      project: "Marketing Automation Tool",
      result: "300% increase in lead conversion"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials?.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials?.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="bg-card rounded-xl shadow-brand-medium p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">What Clients Say</h3>
        <p className="text-text-secondary">Real feedback from real projects</p>
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="w-full flex-shrink-0 px-4">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial?.rating)}
                    </div>
                    <blockquote className="text-lg text-text-primary leading-relaxed mb-6">
                      "{testimonial?.content}"
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image
                        src={testimonial?.avatar}
                        alt={testimonial?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-text-primary">{testimonial?.name}</h4>
                      <p className="text-text-secondary text-sm">{testimonial?.role}</p>
                      <p className="text-primary text-sm font-medium">{testimonial?.company}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-xs text-text-secondary mb-1">Project</p>
                      <p className="text-sm font-medium text-text-primary">{testimonial?.project}</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <p className="text-xs text-text-secondary mb-1">Result</p>
                      <p className="text-sm font-medium text-accent">{testimonial?.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200 shadow-brand-subtle"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200 shadow-brand-subtle"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-primary scale-110' :'bg-border hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
      {/* Auto-play indicator */}
      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200"
        >
          <Icon name={isAutoPlaying ? "Pause" : "Play"} size={14} />
          <span className="text-xs">{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;