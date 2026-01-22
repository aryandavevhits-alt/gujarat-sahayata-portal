import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'gu';
type FontSize = 'small' | 'normal' | 'large';

interface PortalContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Utility Bar
  'skip_to_main': { en: 'Skip to Main Content', gu: 'મુખ્ય સામગ્રી પર જાઓ' },
  'screen_reader': { en: 'Screen Reader Access', gu: 'સ્ક્રીન રીડર ઍક્સેસ' },
  'font_size': { en: 'Font Size', gu: 'ફોન્ટ સાઇઝ' },
  'high_contrast': { en: 'High Contrast', gu: 'હાઇ કોન્ટ્રાસ્ટ' },
  'normal_view': { en: 'Normal View', gu: 'સામાન્ય દૃશ્ય' },
  
  // Header
  'govt_of_gujarat': { en: 'Government of Gujarat', gu: 'ગુજરાત સરકાર' },
  'industries_comm': { en: 'Industries Commissionerate', gu: 'ઉદ્યોગ કમિશનરેટ' },
  'search_placeholder': { en: 'Search policies, schemes, services...', gu: 'નીતિઓ, યોજનાઓ, સેવાઓ શોધો...' },
  'advanced_search': { en: 'Advanced Search', gu: 'અદ્યતન શોધ' },
  
  // Navigation
  'home': { en: 'Home', gu: 'હોમ' },
  'about_us': { en: 'About Us', gu: 'અમારા વિશે' },
  'policies': { en: 'Policies', gu: 'નીતિઓ' },
  'schemes': { en: 'Schemes', gu: 'યોજનાઓ' },
  'services': { en: 'Services', gu: 'સેવાઓ' },
  'industry_sectors': { en: 'Industry Sectors', gu: 'ઉદ્યોગ ક્ષેત્રો' },
  'media': { en: 'Media', gu: 'મીડિયા' },
  'contact': { en: 'Contact', gu: 'સંપર્ક' },
  'kyd': { en: 'Know Your Department', gu: 'તમારા વિભાગને જાણો' },
  
  // Hero Section
  'hero_title': { en: 'Industries Commissionerate', gu: 'ઉદ્યોગ કમિશનરેટ' },
  'hero_subtitle': { en: 'Government of Gujarat', gu: 'ગુજરાત સરકાર' },
  'hero_description': { en: 'Operational authority for industrial policy implementation and facilitation. Driving industrial growth and economic development across Gujarat.', gu: 'ઔદ્યોગિક નીતિ અમલીકરણ અને સુવિધા માટે ઓપરેશનલ ઓથોરિટી. ગુજરાતમાં ઔદ્યોગિક વિકાસ અને આર્થિક વિકાસને આગળ ધપાવવો.' },
  
  // Quick Access
  'industrial_policies': { en: 'Industrial Policies', gu: 'ઔદ્યોગિક નીતિઓ' },
  'schemes_incentives': { en: 'Schemes & Incentives', gu: 'યોજનાઓ અને પ્રોત્સાહનો' },
  'industry_in_gujarat': { en: 'Industry in Gujarat', gu: 'ગુજરાતમાં ઉદ્યોગ' },
  'grievances': { en: 'Grievances & Queries', gu: 'ફરિયાદો અને પ્રશ્નો' },
  'acts_rules': { en: 'Acts & Rules', gu: 'અધિનિયમો અને નિયમો' },
  'grs_circulars': { en: 'GRs & Circulars', gu: 'GRs અને પરિપત્રો' },
  'notifications': { en: 'Notifications', gu: 'સૂચનાઓ' },
  'forms_guidelines': { en: 'Forms & Guidelines', gu: 'ફોર્મ્સ અને માર્ગદર્શિકા' },
  'faqs': { en: 'FAQs', gu: 'વારંવાર પૂછાતા પ્રશ્નો' },
  
  // Commissioner's Desk
  'commissioners_desk': { en: "Commissioner's Desk", gu: 'કમિશનરનું ડેસ્ક' },
  'commissioner_name': { en: 'Shri. Commissioner Name, IAS', gu: 'શ્રી. કમિશનર નામ, IAS' },
  'commissioner_designation': { en: 'Industries Commissioner, Government of Gujarat', gu: 'ઉદ્યોગ કમિશનર, ગુજરાત સરકાર' },
  'commissioner_message': { en: 'The Industries Commissionerate is committed to fostering a conducive environment for industrial growth in Gujarat. Our mission is to facilitate ease of doing business and drive sustainable economic development.', gu: 'ઉદ્યોગ કમિશનરેટ ગુજરાતમાં ઔદ્યોગિક વિકાસ માટે અનુકૂળ વાતાવરણ ઊભું કરવા માટે પ્રતિબદ્ધ છે. અમારું મિશન વ્યવસાય કરવામાં સરળતા અને ટકાઉ આર્થિક વિકાસને આગળ ધપાવવાનું છે.' },
  'vision_mission': { en: 'Vision & Mission', gu: 'વિઝન અને મિશન' },
  'org_structure': { en: 'Organizational Structure', gu: 'સંગઠનાત્મક માળખું' },
  'functions': { en: 'Functions & Responsibilities', gu: 'કાર્યો અને જવાબદારીઓ' },
  
  // Industry Sectors
  'msme_cluster': { en: 'MSME & Cluster Development', gu: 'MSME અને ક્લસ્ટર વિકાસ' },
  'industrial_parks': { en: 'Industrial Parks & Estates', gu: 'ઔદ્યોગિક પાર્ક્સ અને એસ્ટેટ્સ' },
  'textile_apparel': { en: 'Textile & Apparel', gu: 'ટેક્સટાઇલ અને એપેરલ' },
  'gems_jewellery': { en: 'Gems & Jewellery', gu: 'રત્નો અને ઝવેરાત' },
  'logistics': { en: 'Logistics & Infrastructure', gu: 'લોજિસ્ટિક્સ અને ઈન્ફ્રાસ્ટ્રક્ચર' },
  'rd_testing': { en: 'R&D and Testing Facilities', gu: 'R&D અને ટેસ્ટિંગ સુવિધાઓ' },
  'investment_opportunities': { en: 'Investment Opportunities', gu: 'રોકાણની તકો' },
  
  // News & Notifications
  'latest_news': { en: 'Latest News & Notifications', gu: 'તાજા સમાચાર અને સૂચનાઓ' },
  'view_all': { en: 'View All', gu: 'બધા જુઓ' },
  'new': { en: 'NEW', gu: 'નવું' },
  'archived': { en: 'ARCHIVED', gu: 'આર્કાઇવ' },
  'last_reviewed': { en: 'Last reviewed on', gu: 'છેલ્લી સમીક્ષા' },
  
  // Media
  'press_releases': { en: 'Press Releases', gu: 'પ્રેસ રિલીઝ' },
  'events': { en: 'Events', gu: 'ઇવેન્ટ્સ' },
  'photo_gallery': { en: 'Photo Gallery', gu: 'ફોટો ગેલેરી' },
  'video_gallery': { en: 'Video Gallery', gu: 'વિડીયો ગેલેરી' },
  
  // KYD
  'kyd_title': { en: 'Know Your Department', gu: 'તમારા વિભાગને જાણો' },
  'kyd_description': { en: 'Comprehensive orientation and knowledge resources about the Industries Commissionerate', gu: 'ઉદ્યોગ કમિશનરેટ વિશે વ્યાપક ઓરિએન્ટેશન અને જ્ઞાન સંસાધનો' },
  'dept_overview': { en: 'Department Overview', gu: 'વિભાગ ઝાંખી' },
  'divisions_functions': { en: 'Divisions & Functions', gu: 'વિભાગો અને કાર્યો' },
  'rti_disclosure': { en: 'RTI Proactive Disclosure', gu: 'RTI સક્રિય જાહેરાત' },
  'achievements': { en: 'Achievements', gu: 'સિદ્ધિઓ' },
  'orientation_module': { en: 'Orientation Module', gu: 'ઓરિએન્ટેશન મોડ્યુલ' },
  
  // Footer
  'copyright': { en: '© 2025 Industries Commissionerate, Government of Gujarat. All Rights Reserved.', gu: '© 2025 ઉદ્યોગ કમિશનરેટ, ગુજરાત સરકાર. સર્વાધિકાર સુરક્ષિત.' },
  'copyright_policy': { en: 'Copyright Policy', gu: 'કોપીરાઈટ નીતિ' },
  'privacy_policy': { en: 'Privacy Policy', gu: 'ગોપનીયતા નીતિ' },
  'terms_conditions': { en: 'Terms & Conditions', gu: 'નિયમો અને શરતો' },
  'hyperlink_policy': { en: 'Hyperlink Policy', gu: 'હાયપરલિંક નીતિ' },
  'accessibility_statement': { en: 'Accessibility Statement', gu: 'ઍક્સેસિબિલિટી સ્ટેટમેન્ટ' },
  'disclaimer': { en: 'Disclaimer', gu: 'અસ્વીકરણ' },
  'last_updated': { en: 'Last Updated', gu: 'છેલ્લે અપડેટ' },
  'visitors': { en: 'Visitors', gu: 'મુલાકાતીઓ' },
  'content_owned': { en: 'Content owned and maintained by Industries Commissionerate, Government of Gujarat', gu: 'સામગ્રી ઉદ્યોગ કમિશનરેટ, ગુજરાત સરકાર દ્વારા માલિકી અને જાળવણી' },
  
  // Misc
  'read_more': { en: 'Read More', gu: 'વધુ વાંચો' },
  'download': { en: 'Download', gu: 'ડાઉનલોડ' },
  'submit': { en: 'Submit', gu: 'સબમિટ કરો' },
  'search': { en: 'Search', gu: 'શોધો' },
  'loading': { en: 'Loading...', gu: 'લોડ થઈ રહ્યું છે...' },
};

const PortalContext = createContext<PortalContextType | undefined>(undefined);

export const PortalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('font-size-small', 'font-size-normal', 'font-size-large');
    document.documentElement.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <PortalContext.Provider
      value={{
        language,
        setLanguage,
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        t,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = (): PortalContextType => {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
};
