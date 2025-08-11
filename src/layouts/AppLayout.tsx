import React from 'react';
import { Layout } from 'antd';
import TopHeader from './TopHeader';
import MainHeader from './MainHeader';
import AppFooter from './Footer';
import styles from '../styles/layouts/AppLayout.module.scss';

type PageType = 'home' | 'services' | 'booking' | 'contact' | 'select-technician';

interface AppLayoutProps {
  children: React.ReactNode;
  onLogout?: () => void;
  onNavigate?: (page: PageType) => void;
  currentPage?: PageType;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, onLogout, onNavigate, currentPage }) => {
  return (
    <Layout className={styles.appLayout}>
      <TopHeader />
      <MainHeader onLogout={onLogout} onNavigate={onNavigate} currentPage={currentPage} />
      <Layout.Content className={styles.mainContent}>
        {children}
      </Layout.Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
