import React, { useState } from 'react';
import { usePortal } from '@/contexts/PortalContext';
import { Search, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t } = usePortal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { key: 'home', href: '/', hasDropdown: false },
    { 
      key: 'about_us', 
      href: '/about', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'vision_mission', href: '/about/vision' },
        { key: 'org_structure', href: '/about/structure' },
        { key: 'functions', href: '/about/functions' },
      ]
    },
    { 
      key: 'policies', 
      href: '/policies', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'industrial_policies', href: '/policies/industrial' },
        { key: 'acts_rules', href: '/policies/acts' },
        { key: 'grs_circulars', href: '/policies/grs' },
      ]
    },
    { key: 'schemes', href: '/schemes', hasDropdown: false },
    { key: 'services', href: '/services', hasDropdown: false },
    { 
      key: 'industry_sectors', 
      href: '/sectors', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'msme_cluster', href: '/sectors/msme' },
        { key: 'textile_apparel', href: '/sectors/textile' },
        { key: 'gems_jewellery', href: '/sectors/gems' },
        { key: 'industrial_parks', href: '/sectors/parks' },
      ]
    },
    { key: 'media', href: '/media', hasDropdown: false },
    { key: 'kyd', href: '/kyd', hasDropdown: false },
    { key: 'contact', href: '/contact', hasDropdown: false },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  return (
    <header className="gov-header" role="banner">
      {/* Main header with emblem and identity */}
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Government Identity */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group">
            {/* Gujarat Government Emblem */}
            <div className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Emblem_of_Gujarat.svg"
                alt="Gujarat Government Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base text-muted-foreground font-medium">
                {t('govt_of_gujarat')}
              </span>
              <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-primary group-hover:text-gov-blue-light transition-colors">
                {t('industries_comm')}
              </h1>
            </div>
          </Link>

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Search Form - Desktop */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('search_placeholder')}
                  className="w-64 xl:w-80 px-4 py-2 pr-10 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  aria-label={t('search')}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={t('search')}
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <button
                type="button"
                className="px-3 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-gov-blue-dark transition-colors text-sm"
              >
                {t('advanced_search')}
              </button>
            </form>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary hover:bg-secondary rounded-md transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="lg:hidden mt-4">
          <div className="flex">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search_placeholder')}
              className="flex-1 px-4 py-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={t('search')}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-gov-blue-dark transition-colors"
              aria-label={t('search')}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation Bar */}
      <nav
        className="bg-primary text-primary-foreground"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-stretch">
            {navigationItems.map((item) => (
              <li
                key={item.key}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-3 hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  {t(item.key)}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && item.dropdownItems && activeDropdown === item.key && (
                  <ul className="absolute left-0 top-full bg-white text-foreground shadow-lg rounded-b-md min-w-[200px] z-50 border border-border">
                    {item.dropdownItems.map((subItem) => (
                      <li key={subItem.key}>
                        <Link
                          to={subItem.href}
                          className="block px-4 py-2 hover:bg-secondary text-sm transition-colors"
                        >
                          {t(subItem.key)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <ul className="lg:hidden py-2">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 hover:bg-white/10 transition-colors text-sm font-medium border-b border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <ul className="bg-white/5">
                      {item.dropdownItems.map((subItem) => (
                        <li key={subItem.key}>
                          <Link
                            to={subItem.href}
                            className="block px-8 py-2 hover:bg-white/10 text-sm transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {t(subItem.key)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
