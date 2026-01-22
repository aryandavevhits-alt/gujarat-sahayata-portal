import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Link } from 'react-router-dom';
import {
  Scale,
  FileText,
  Gift,
  FileSpreadsheet,
  Bell,
  ClipboardList,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

const ServiceRepository: React.FC = () => {
  const { t } = usePortal();

  const services = [
    { key: 'acts_rules', icon: Scale, href: '/services/acts', count: 45, description: 'Legal framework and regulations' },
    { key: 'policies', icon: FileText, href: '/policies', count: 28, description: 'Industrial policy documents' },
    { key: 'schemes_incentives', icon: Gift, href: '/schemes', count: 52, description: 'Financial assistance programs' },
    { key: 'grs_circulars', icon: FileSpreadsheet, href: '/services/grs', count: 156, description: 'Government resolutions' },
    { key: 'notifications', icon: Bell, href: '/notifications', count: 89, description: 'Official announcements' },
    { key: 'forms_guidelines', icon: ClipboardList, href: '/services/forms', count: 34, description: 'Application forms and guides' },
    { key: 'faqs', icon: HelpCircle, href: '/faqs', count: 78, description: 'Frequently asked questions' },
  ];

  return (
    <section className="gov-section-alt">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Governance & Service Repository
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive repository of acts, rules, policies, schemes, government resolutions, and official forms
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <Link
              key={service.key}
              to={service.href}
              className="gov-tile group"
            >
              <div className="gov-tile-icon group-hover:scale-110 transition-transform">
                <service.icon className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {t(service.key)}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 hidden md:block">
                {service.description}
              </p>
              <span className="inline-block mt-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                {service.count} Documents
              </span>
            </Link>
          ))}

          {/* View All Card */}
          <Link
            to="/services"
            className="gov-tile group bg-primary text-primary-foreground hover:bg-gov-blue-dark"
          >
            <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6" />
            </div>
            <h3 className="font-semibold">
              {t('view_all')} Services
            </h3>
            <p className="text-xs text-white/80 mt-1 hidden md:block">
              Explore complete repository
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceRepository;
