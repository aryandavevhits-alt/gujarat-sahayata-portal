import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Briefcase } from 'lucide-react';

const CommissionerDesk: React.FC = () => {
  const { t } = usePortal();

  const quickLinks = [
    { key: 'vision_mission', icon: Target, href: '/about/vision' },
    { key: 'org_structure', icon: Users, href: '/about/structure' },
    { key: 'functions', icon: Briefcase, href: '/about/functions' },
  ];

  return (
    <section className="gov-section">
      <div className="container mx-auto">
        <div className="gov-desk">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Commissioner Photo */}
            <div className="md:col-span-1 flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 overflow-hidden mb-4 border-4 border-white/30">
                <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white/50" />
                </div>
              </div>
              <h3 className="text-xl font-bold">{t('commissioner_name')}</h3>
              <p className="text-white/80 text-sm mt-1">{t('commissioner_designation')}</p>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-accent rounded-full" />
                {t('commissioners_desk')}
              </h2>
              <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                "{t('commissioner_message')}"
              </blockquote>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.href}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {t(link.key)}
                  </Link>
                ))}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-gov-saffron-dark px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t('read_more')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionerDesk;
