import React from 'react';
import { Link } from 'react-router-dom';
import { usePortal } from '@/contexts/PortalContext';
import { Rss, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = usePortal();
  const currentYear = new Date().getFullYear();
  const lastUpdated = 'January 20, 2026';
  const visitorCount = '1,245,892';

  const quickLinks = [
    { key: 'industrial_policies', href: '/policies' },
    { key: 'schemes_incentives', href: '/schemes' },
    { key: 'industry_in_gujarat', href: '/sectors' },
    { key: 'grievances', href: '/grievances' },
    { key: 'kyd', href: '/kyd' },
    { key: 'contact', href: '/contact' },
  ];

  const policyLinks = [
    { key: 'copyright_policy', href: '/policies/copyright' },
    { key: 'privacy_policy', href: '/policies/privacy' },
    { key: 'terms_conditions', href: '/policies/terms' },
    { key: 'hyperlink_policy', href: '/policies/hyperlink' },
    { key: 'accessibility_statement', href: '/accessibility' },
    { key: 'disclaimer', href: '/disclaimer' },
  ];

  return (
    <footer className="gov-footer" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Emblem_of_Gujarat.svg"
                alt="Gujarat Government Emblem"
                className="w-12 h-12 brightness-0 invert"
              />
              <div>
                <p className="text-white/80 text-sm">{t('govt_of_gujarat')}</p>
                <h3 className="text-white font-semibold">{t('industries_comm')}</h3>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t('content_owned')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg border-b border-white/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 gov-footer-links">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link to={link.href} className="flex items-center gap-2">
                    <span className="text-accent">›</span>
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg border-b border-white/20 pb-2">
              Important Links
            </h4>
            <ul className="space-y-2 gov-footer-links">
              <li>
                <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  National Portal of India
                </a>
              </li>
              <li>
                <a href="https://www.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Gujarat State Portal
                </a>
              </li>
              <li>
                <a href="https://www.digitalindia.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Digital India
                </a>
              </li>
              <li>
                <a href="https://www.makeinindia.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Make in India
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg border-b border-white/20 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>
                  Industries Commissionerate,<br />
                  Block No. 11, 5th Floor,<br />
                  Udyog Bhavan, Gandhinagar - 382010
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+917923259300" className="hover:text-white">+91 79 2325 9300</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:ic-ahd@gujarat.gov.in" className="hover:text-white">ic-ahd@gujarat.gov.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Policy Links Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm">
            {policyLinks.map((link, index) => (
              <React.Fragment key={link.key}>
                <Link to={link.href} className="text-white/80 hover:text-white hover:underline">
                  {t(link.key)}
                </Link>
                {index < policyLinks.length - 1 && (
                  <span className="text-white/30 hidden md:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20">
        <div className="container mx-auto py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <div className="flex items-center gap-4">
              <span>{t('copyright').replace('2025', String(currentYear))}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span>{t('last_updated')}:</span>
                <span className="text-white">{lastUpdated}</span>
              </span>
              <span className="flex items-center gap-2">
                <span>{t('visitors')}:</span>
                <span className="text-white font-semibold">{visitorCount}</span>
              </span>
              <a href="/rss" className="flex items-center gap-1 hover:text-white" title="RSS Feed">
                <Rss className="w-4 h-4" />
                <span className="sr-only">RSS Feed</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
