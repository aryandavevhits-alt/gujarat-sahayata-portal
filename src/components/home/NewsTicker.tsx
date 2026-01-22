import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Bell, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsTicker: React.FC = () => {
  const { t } = usePortal();

  const tickerItems = [
    { text: 'Industrial Incentive Scheme 2025 – Draft Operational Guidelines released', href: '/notifications/1', isNew: true },
    { text: 'Circular: State-wide MSME Facilitation Drive from 15th February 2026', href: '/notifications/2', isNew: true },
    { text: 'Press Release: Regional Investor Awareness Programme – Rajkot', href: '/media/press/1', isNew: false },
    { text: 'Gujarat Industrial Infrastructure Snapshot 2024–25 now available', href: '/publications/1', isNew: false },
  ];

  return (
    <div className="gov-ticker" role="marquee" aria-label="Latest notifications">
      <div className="container mx-auto flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full flex-shrink-0">
          <Bell className="w-4 h-4" />
          <span className="font-semibold text-sm">{t('notifications')}</span>
        </div>
        
        <div className="overflow-hidden flex-1">
          <div className="flex animate-ticker whitespace-nowrap">
            {tickerItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="inline-flex items-center gap-2 mx-8 hover:underline"
              >
                {item.isNew && (
                  <span className="bg-white text-accent text-xs px-1.5 py-0.5 rounded font-bold">
                    {t('new')}
                  </span>
                )}
                <span>{item.text}</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/notifications"
          className="flex-shrink-0 text-sm font-medium hover:underline hidden md:block"
        >
          {t('view_all')} →
        </Link>
      </div>
    </div>
  );
};

export default NewsTicker;
