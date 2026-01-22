import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, Image, Video, ArrowRight } from 'lucide-react';

const MediaSection: React.FC = () => {
  const { t } = usePortal();

  const pressReleases = [
    {
      id: 1,
      title: 'Press Release: Regional Investor Awareness Programme – Rajkot',
      date: '2026-01-18',
      category: 'Official events',
    },
    {
      id: 2,
      title: 'Gujarat Attracts Record FDI in Manufacturing Sector',
      date: '2026-01-12',
      category: 'Public information releases',
    },
    {
      id: 3,
      title: 'New MSME Development Zones Announced',
      date: '2026-01-05',
      category: 'Department communication',
    },
  ];

  const galleryImages = [
    { id: 1, title: 'Industrial Conclave 2025', category: 'Official events' },
    { id: 2, title: 'MSME Award Ceremony', category: 'Official events' },
    { id: 3, title: 'Factory Inauguration - Sanand', category: 'Department communication' },
    { id: 4, title: 'Investment Summit Gujarat', category: 'Public information releases' },
  ];

  return (
    <section className="gov-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Media Center
            </h2>
            <p className="text-muted-foreground">
              Press releases, events, and multimedia resources
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/media/photos" className="flex items-center gap-2 gov-btn-outline py-2">
              <Image className="w-4 h-4" />
              {t('photo_gallery')}
            </Link>
            <Link to="/media/videos" className="flex items-center gap-2 gov-btn-outline py-2">
              <Video className="w-4 h-4" />
              {t('video_gallery')}
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Press Releases */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-primary" />
              {t('press_releases')}
            </h3>
            <div className="space-y-4">
              {pressReleases.map((item) => (
                <Link
                  key={item.id}
                  to={`/media/press/${item.id}`}
                  className="block gov-card p-4 hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-0.5 rounded mb-2">
                        {item.category}
                      </span>
                      <h4 className="font-medium text-foreground hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(item.date).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/media/press"
              className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:underline"
            >
              View all press releases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Photo Gallery Preview */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Image className="w-5 h-5 text-primary" />
              {t('photo_gallery')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((item) => (
                <Link
                  key={item.id}
                  to={`/media/photos/${item.id}`}
                  className="group relative aspect-video bg-secondary rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h4 className="text-white text-sm font-medium mt-1 line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </Link>
              ))}
            </div>
            <Link
              to="/media/photos"
              className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:underline"
            >
              View full gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
