import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Target,
  Award,
  FileCheck,
  Play,
  FileText,
  Subtitles,
  ArrowRight,
} from 'lucide-react';

const KYDSection: React.FC = () => {
  const { t } = usePortal();

  const kydModules = [
    {
      key: 'dept_overview',
      icon: BookOpen,
      description: 'Comprehensive introduction to the department',
      hasVideo: true,
      hasTranscript: true,
    },
    {
      key: 'vision_mission',
      icon: Target,
      description: 'Goals, objectives and strategic direction',
      hasVideo: true,
      hasTranscript: true,
    },
    {
      key: 'divisions_functions',
      icon: Users,
      description: 'Organizational units and responsibilities',
      hasVideo: false,
      hasTranscript: false,
    },
    {
      key: 'rti_disclosure',
      icon: FileCheck,
      description: 'Proactive disclosure as per RTI Act',
      hasVideo: false,
      hasTranscript: false,
    },
    {
      key: 'achievements',
      icon: Award,
      description: 'Key milestones and accomplishments',
      hasVideo: true,
      hasTranscript: true,
    },
  ];

  return (
    <section className="gov-section bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Orientation & Knowledge Resource
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            {t('kyd_title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('kyd_description')}
          </p>
        </div>

        {/* KYD Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {kydModules.map((module) => (
            <Link
              key={module.key}
              to={`/kyd/${module.key}`}
              className="group gov-card p-6 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <module.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {t(module.key)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {module.description}
                  </p>
                  
                  {/* Media indicators */}
                  <div className="flex items-center gap-3 text-xs">
                    {module.hasVideo && (
                      <span className="flex items-center gap-1 text-gov-green">
                        <Play className="w-3 h-3" />
                        Video Module
                      </span>
                    )}
                    {module.hasTranscript && (
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <FileText className="w-3 h-3" />
                        Transcript
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Featured Orientation Module */}
          <Link
            to="/kyd/orientation"
            className="group md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary to-gov-blue-dark text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t('orientation_module')}</h3>
                <p className="text-white/80 text-sm">Complete introduction video</p>
              </div>
            </div>
            
            <p className="text-white/90 text-sm mb-4">
              KYD Orientation Module: Functions of Industries Commissionerate - A comprehensive video guide for citizens and stakeholders.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span className="flex items-center gap-1">
                  <Play className="w-3 h-3" />
                  15 min video
                </span>
                <span className="flex items-center gap-1">
                  <Subtitles className="w-3 h-3" />
                  Captions available
                </span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/kyd"
            className="inline-flex items-center gap-2 gov-btn-primary"
          >
            Explore All KYD Resources
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KYDSection;
