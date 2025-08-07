import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const headerHeight = 64;

const AppHeader: React.FC = () => (
  <Header
    style={{
      background: '#fcfcfcff',
      padding: '0 32px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      height: headerHeight,
      boxShadow: '0 2px 8px #f0f1f2',
      display: 'flex',
      alignItems: 'center',
    }}
    >
    <Title level={3} style={{ color: '#000', margin: 0, lineHeight: `${headerHeight}px` }}>
      My React App
    </Title>
    
  </Header>


);

export default AppHeader;