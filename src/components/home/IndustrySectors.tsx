import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Link } from 'react-router-dom';
import {
  Building2,
  Factory,
  Shirt,
  Gem,
  Truck,
  FlaskConical,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const IndustrySectors: React.FC = () => {
  const { t } = usePortal();

  const sectors = [
    {
      key: 'msme_cluster',
      icon: Building2,
      stats: '15,000+ Units',
      description: 'Supporting micro, small and medium enterprises across clusters',
    },
    {
      key: 'industrial_parks',
      icon: Factory,
      stats: '200+ Parks',
      description: 'State-of-the-art industrial infrastructure across Gujarat',
    },
    {
      key: 'textile_apparel',
      icon: Shirt,
      stats: '₹1.2L Cr Industry',
      description: 'Leading textile manufacturing and export hub',
    },
    {
      key: 'gems_jewellery',
      icon: Gem,
      stats: '80% Diamond Processing',
      description: 'Global diamond cutting and polishing center',
    },
    {
      key: 'logistics',
      icon: Truck,
      stats: '13 Major Ports',
      description: 'Robust connectivity and supply chain infrastructure',
    },
    {
      key: 'rd_testing',
      icon: FlaskConical,
      stats: '50+ Centers',
      description: 'Research facilities and quality testing laboratories',
    },
  ];

  return (
    <section className="gov-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Industry Ecosystem
            </h2>
            <p className="text-muted-foreground">
              Explore Gujarat's diverse industrial landscape and growth sectors
            </p>
          </div>
          <Link
            to="/sectors"
            className="inline-flex items-center gap-2 gov-btn-outline"
          >
            {t('investment_opportunities')}
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <Link
              key={sector.key}
              to={`/sectors/${sector.key}`}
              className="group gov-card overflow-hidden"
            >
              <div className="gov-card-header flex items-center gap-3">
                <sector.icon className="w-6 h-6" />
                <h3 className="font-semibold">{t(sector.key)}</h3>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4">
                  {sector.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {sector.stats}
                  </span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySectors;
