import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const stats = [
    {
      id: 'projects',
      value: '50+',
      label: 'Projects Completed',
      icon: 'CheckCircle',
      color: 'text-accent'
    },
    {
      id: 'clients',
      value: '30+',
      label: 'Happy Clients',
      icon: 'Users',
      color: 'text-primary'
    },
    {
      id: 'experience',
      value: '5+',
      label: 'Years Experience',
      icon: 'Calendar',
      color: 'text-secondary'
    },
    {
      id: 'satisfaction',
      value: '98%',
      label: 'Client Satisfaction',
      icon: 'Star',
      color: 'text-yellow-500'
    }
  ];

  const certifications = [
    {
      id: 'aws',
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=60&h=60&fit=crop',
      verified: true
    },
    {
      id: 'react',
      name: 'React Professional',
      issuer: 'Meta (Facebook)',
      logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=60&h=60&fit=crop',
      verified: true
    },
    {
      id: 'node',
      name: 'Node.js Certified',
      issuer: 'OpenJS Foundation',
      logo: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=60&h=60&fit=crop',
      verified: true
    }
  ];

  const recentClients = [
    {
      id: 'techflow',
      name: 'TechFlow Solutions',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop',
      industry: 'Enterprise Software'
    },
    {
      id: 'startup',
      name: 'StartupLaunch',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=80&h=80&fit=crop',
      industry: 'SaaS Platform'
    },
    {
      id: 'digital',
      name: 'DigitalFirst Agency',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=80&h=80&fit=crop',
      industry: 'Digital Marketing'
    },
    {
      id: 'innovate',
      name: 'InnovateCorp',
      logo: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=80&h=80&fit=crop',
      industry: 'Technology'
    }
  ];

  const trustSignals = [
    {
      id: 'ssl',
      title: 'SSL Secured',
      description: 'Your data is protected',
      icon: 'Shield',
      verified: true
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Verified',
      description: '500+ professional connections',
      icon: 'Linkedin',
      verified: true
    },
    {
      id: 'github',
      title: 'Open Source Contributor',
      description: '100+ repositories',
      icon: 'Github',
      verified: true
    },
    {
      id: 'response',
      title: '24hr Response Guarantee',
      description: 'Always available for clients',
      icon: 'Clock',
      verified: true
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="bg-card rounded-xl shadow-brand-medium p-8">
        <h3 className="text-xl font-bold text-text-primary text-center mb-6">Proven Track Record</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats?.map((stat) => (
            <div key={stat?.id} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name={stat?.icon} size={24} className={stat?.color} />
                </div>
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Trust Signals */}
      <div className="bg-card rounded-xl shadow-brand-medium p-8">
        <h3 className="text-xl font-bold text-text-primary text-center mb-6">Trust & Security</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trustSignals?.map((signal) => (
            <div key={signal?.id} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name={signal?.icon} size={18} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-text-primary">{signal?.title}</h4>
                  {signal?.verified && (
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                  )}
                </div>
                <p className="text-sm text-text-secondary">{signal?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className="bg-card rounded-xl shadow-brand-medium p-8">
        <h3 className="text-xl font-bold text-text-primary text-center mb-6">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications?.map((cert) => (
            <div key={cert?.id} className="text-center p-4 border border-border rounded-lg hover:border-primary/30 transition-colors duration-200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image
                  src={cert?.logo}
                  alt={cert?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-text-primary mb-1">{cert?.name}</h4>
              <p className="text-sm text-text-secondary mb-2">{cert?.issuer}</p>
              {cert?.verified && (
                <div className="flex items-center justify-center space-x-1">
                  <Icon name="CheckCircle" size={14} className="text-accent" />
                  <span className="text-xs text-accent">Verified</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Recent Clients */}
      <div className="bg-card rounded-xl shadow-brand-medium p-8">
        <h3 className="text-xl font-bold text-text-primary text-center mb-6">Trusted by Leading Companies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recentClients?.map((client) => (
            <div key={client?.id} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-200">
                <Image
                  src={client?.logo}
                  alt={client?.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <h4 className="font-medium text-text-primary text-sm mb-1">{client?.name}</h4>
              <p className="text-xs text-text-secondary">{client?.industry}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Professional Network */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20 p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon name="Award" size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">Professional Network</h3>
          <p className="text-text-secondary mb-6">Connected with industry leaders and tech professionals worldwide</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-text-secondary">LinkedIn Connections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-1">50+</div>
              <div className="text-sm text-text-secondary">GitHub Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm text-text-secondary">Tech Communities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;