import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Link } from 'react-router-dom';
import { FileText, Gift, Factory, HelpCircle, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-industry.jpg';

const HeroSection: React.FC = () => {
  const { t } = usePortal();

  const quickActions = [
    { key: 'industrial_policies', icon: FileText, href: '/policies', color: 'bg-primary' },
    { key: 'schemes_incentives', icon: Gift, href: '/schemes', color: 'bg-gov-saffron' },
    { key: 'industry_in_gujarat', icon: Factory, href: '/sectors', color: 'bg-gov-green' },
    { key: 'grievances', icon: HelpCircle, href: '/grievances', color: 'bg-gov-blue-light' },
  ];

  return (
    <section className="relative text-white overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-gov-blue/85 to-gov-blue-dark/90" />
      </div>
      <div className="container mx-auto py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <p className="text-white/80 text-sm md:text-base font-medium mb-2">
              {t('govt_of_gujarat')}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
              {t('hero_description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/kyd"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-gov-saffron-dark transition-colors"
              >
                {t('kyd')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-colors border border-white/30"
              >
                {t('about_us')}
              </Link>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in stagger-2">
            {quickActions.map((action, index) => (
              <Link
                key={action.key}
                to={action.href}
                className={`group p-5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 animate-fade-in stagger-${index + 1}`}
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                  {t(action.key)}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {action.key === 'industrial_policies' && 'View all policies'}
                  {action.key === 'schemes_incentives' && 'Explore incentives'}
                  {action.key === 'industry_in_gujarat' && 'Sector overview'}
                  {action.key === 'grievances' && 'Submit query'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
