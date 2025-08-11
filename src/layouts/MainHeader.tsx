import React from 'react';
import { Typography, Button, Menu } from 'antd';
import { LogoutOutlined, HomeOutlined, CustomerServiceOutlined, CalendarOutlined, ContactsOutlined } from '@ant-design/icons';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';

const { Title } = Typography;

type PageType = 'home' | 'services' | 'booking' | 'contact' | 'select-technician';

interface MainHeaderProps {
  onLogout?: () => void;
  onNavigate?: (page: PageType) => void;
  currentPage?: PageType;
}

const mainHeaderHeight = 64;

const MainHeader: React.FC<MainHeaderProps> = ({ onLogout, onNavigate, currentPage }) => {
  const { translations } = useLanguage();
  
  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: translations.home,
    },
    {
      key: 'services',
      icon: <CustomerServiceOutlined />,
      label: translations.services,
    },
    {
      key: 'booking',
      icon: <CalendarOutlined />,
      label: translations.booking,
    },
    {
      key: 'contact',
      icon: <ContactsOutlined />,
      label: translations.contact,
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    if (onNavigate) {
      onNavigate(key as PageType);
    }
  };

  return (
    <div
      style={{
        background: '#fcfcfcff',
        padding: '0 32px',
        height: mainHeaderHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px #f0f1f2',
        position: 'sticky',
        top: 0, // Sticks to top of viewport after scrolling past TopHeader
        zIndex: 100,
        width: '100%',
      }}
    >
      <Title level={3} style={{ color: '#000', margin: 0, lineHeight: `${mainHeaderHeight}px` }}>
        My App
      </Title>
      
      {onNavigate && (
        <Menu
          mode="horizontal"
          selectedKeys={currentPage ? [currentPage] : ['home']}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ 
            border: 'none', 
            background: 'transparent',
            flex: 1,
            justifyContent: 'center'
          }}
        />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LanguageSwitcher />
        {onLogout && (
          <Button 
            type="text" 
            icon={<LogoutOutlined />} 
            onClick={onLogout}
          >
            {translations.logout}
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainHeader;