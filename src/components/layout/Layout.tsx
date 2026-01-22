import React, { ReactNode } from 'react';
import AccessibilityBar from './AccessibilityBar';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBreadcrumb = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AccessibilityBar />
      <Header />
      {showBreadcrumb && <Breadcrumb />}
      <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
