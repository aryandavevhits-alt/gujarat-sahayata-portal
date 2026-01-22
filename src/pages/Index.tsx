import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import NewsTicker from '@/components/home/NewsTicker';
import CommissionerDesk from '@/components/home/CommissionerDesk';
import ServiceRepository from '@/components/home/ServiceRepository';
import IndustrySectors from '@/components/home/IndustrySectors';
import NewsNotifications from '@/components/home/NewsNotifications';
import KYDSection from '@/components/home/KYDSection';
import MediaSection from '@/components/home/MediaSection';

const Index: React.FC = () => {
  return (
    <Layout showBreadcrumb={false}>
      {/* Hero Section with Quick Actions */}
      <HeroSection />

      {/* News Ticker */}
      <NewsTicker />

      {/* Commissioner's Desk */}
      <CommissionerDesk />

      {/* Governance & Service Repository */}
      <ServiceRepository />

      {/* Industry Sectors Showcase */}
      <IndustrySectors />

      {/* News, Notifications & Events */}
      <NewsNotifications />

      {/* Know Your Department (KYD) */}
      <KYDSection />

      {/* Media Center */}
      <MediaSection />
    </Layout>
  );
};

export default Index;
