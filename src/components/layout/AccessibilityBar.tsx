import React from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Minus, Plus, Eye, Languages } from 'lucide-react';

const AccessibilityBar: React.FC = () => {
  const { language, setLanguage, fontSize, setFontSize, highContrast, setHighContrast, t } = usePortal();

  const handleFontDecrease = () => {
    if (fontSize === 'large') setFontSize('normal');
    else if (fontSize === 'normal') setFontSize('small');
  };

  const handleFontIncrease = () => {
    if (fontSize === 'small') setFontSize('normal');
    else if (fontSize === 'normal') setFontSize('large');
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link focus:outline-none focus:ring-2 focus:ring-accent"
      >
        {t('skip_to_main')}
      </a>

      {/* Accessibility utility bar */}
      <div className="gov-utility-bar" role="navigation" aria-label="Accessibility controls">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left side - Screen reader access */}
          <div className="flex items-center gap-4">
            <a
              href="#screen-reader"
              className="text-white/90 hover:text-white hover:underline flex items-center gap-1 text-xs md:text-sm"
            >
              <Eye className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{t('screen_reader')}</span>
            </a>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Font size controls */}
            <div className="flex items-center gap-1" role="group" aria-label={t('font_size')}>
              <span className="text-xs hidden md:inline mr-2">{t('font_size')}:</span>
              <button
                onClick={handleFontDecrease}
                className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded hover:bg-white/20 transition-colors"
                aria-label="Decrease font size"
                disabled={fontSize === 'small'}
              >
                <span className="text-xs font-bold">A-</span>
              </button>
              <button
                onClick={() => setFontSize('normal')}
                className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded hover:bg-white/20 transition-colors"
                aria-label="Normal font size"
              >
                <span className="text-sm font-bold">A</span>
              </button>
              <button
                onClick={handleFontIncrease}
                className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded hover:bg-white/20 transition-colors"
                aria-label="Increase font size"
                disabled={fontSize === 'large'}
              >
                <span className="text-base font-bold">A+</span>
              </button>
            </div>

            {/* Contrast toggle */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/20 transition-colors text-xs md:text-sm"
              aria-pressed={highContrast}
            >
              <Eye className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
              <span className="hidden sm:inline">
                {highContrast ? t('normal_view') : t('high_contrast')}
              </span>
            </button>

            {/* Language switch */}
            <div className="flex items-center gap-1 border-l border-white/30 pl-3 md:pl-6">
              <Languages className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-xs md:text-sm transition-colors ${
                  language === 'en' ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
                }`}
                aria-pressed={language === 'en'}
              >
                English
              </button>
              <span className="text-white/50">|</span>
              <button
                onClick={() => setLanguage('gu')}
                className={`px-2 py-1 rounded text-xs md:text-sm transition-colors font-gujarati ${
                  language === 'gu' ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
                }`}
                aria-pressed={language === 'gu'}
              >
                ગુજરાતી
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityBar;
