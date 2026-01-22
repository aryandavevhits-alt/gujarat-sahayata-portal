import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, FileText, Rss } from 'lucide-react';

const NewsNotifications: React.FC = () => {
  const { t } = usePortal();

  const notifications = [
    {
      id: 1,
      title: 'Industrial Incentive Scheme 2025 – Draft Operational Guidelines',
      date: '2026-01-18',
      type: 'GR',
      isNew: true,
      lastReviewed: '2026-01-18',
    },
    {
      id: 2,
      title: 'Circular: State-wide MSME Facilitation Drive',
      date: '2026-01-15',
      type: 'Circular',
      isNew: true,
      lastReviewed: '2026-01-15',
    },
    {
      id: 3,
      title: 'Amendment to Industrial Policy 2020 - Land Allocation',
      date: '2026-01-10',
      type: 'Notification',
      isNew: false,
      lastReviewed: '2026-01-12',
    },
    {
      id: 4,
      title: 'Gujarat Industrial Infrastructure Snapshot 2024–25',
      date: '2025-12-28',
      type: 'Publication',
      isNew: false,
      lastReviewed: '2025-12-28',
    },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Regional Investor Awareness Programme – Rajkot',
      date: '2026-02-15',
      venue: 'Rajkot Chamber of Commerce',
    },
    {
      id: 2,
      title: 'MSME Development Conclave 2026',
      date: '2026-03-05',
      venue: 'Gandhinagar Convention Center',
    },
    {
      id: 3,
      title: 'Industrial Expo Gujarat 2026',
      date: '2026-04-10',
      venue: 'Ahmedabad Exhibition Center',
    },
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section className="gov-section-alt">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Notifications Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
                <FileText className="w-6 h-6" />
                {t('latest_news')}
              </h2>
              <div className="flex items-center gap-2">
                <a href="/rss/notifications" className="text-muted-foreground hover:text-primary" title="RSS Feed">
                  <Rss className="w-5 h-5" />
                </a>
                <Link to="/notifications" className="text-sm text-primary hover:underline flex items-center gap-1">
                  {t('view_all')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {notifications.map((item) => (
                <Link
                  key={item.id}
                  to={`/notifications/${item.id}`}
                  className="block gov-card p-4 hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                          {item.type}
                        </span>
                        {item.isNew ? (
                          <span className="gov-badge-new">{t('new')}</span>
                        ) : (
                          <span className="gov-badge-archive">{t('archived')}</span>
                        )}
                      </div>
                      <h3 className="font-medium text-foreground hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(item.date)}
                        </span>
                        <span>
                          {t('last_reviewed')}: {formatDate(item.lastReviewed)}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Events & Announcements Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Upcoming Events
              </h2>
              <Link to="/events" className="text-sm text-primary hover:underline flex items-center gap-1">
                {t('view_all')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {announcements.map((item) => (
                <Link
                  key={item.id}
                  to={`/events/${item.id}`}
                  className="block gov-card overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="flex">
                    <div className="bg-primary text-primary-foreground p-4 flex flex-col items-center justify-center min-w-[80px]">
                      <span className="text-2xl font-bold">
                        {new Date(item.date).getDate()}
                      </span>
                      <span className="text-xs uppercase">
                        {new Date(item.date).toLocaleDateString('en-IN', { month: 'short' })}
                      </span>
                      <span className="text-xs">
                        {new Date(item.date).getFullYear()}
                      </span>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-medium text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        📍 {item.venue}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Department Communication Badge */}
            <div className="mt-6 p-4 bg-secondary rounded-md">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-gov-green rounded-full" />
                Official department communications and public information releases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsNotifications;
