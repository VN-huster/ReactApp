import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const mainHeaderHeight = 64;

const MainHeader: React.FC = () => (
  <div
    style={{
      background: '#fcfcfcff',
      padding: '0 32px',
      height: mainHeaderHeight,
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 8px #f0f1f2',
      position: 'sticky',
      top: 0, // Sticks to top of viewport after scrolling past TopHeader
      zIndex: 100,
      width: '100%',
    }}
  >
    <Title level={3} style={{ color: '#000', margin: 0, lineHeight: `${mainHeaderHeight}px` }}>
      Main Header (sticky)
    </Title>
  </div>
);

export default MainHeader;