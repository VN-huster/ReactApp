import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const topHeaderHeight = 48;

const TopHeader: React.FC = () => (
  <div
    style={{
      background: '#e3e3e3',
      padding: '0 32px',
      height: topHeaderHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 1px 4px #f0f1f2',
      zIndex: 200,
    }}
  >
    <Title level={5} style={{ color: '#333', margin: 0, lineHeight: `${topHeaderHeight}px` }}>
      Top Header (scrolls away)
    </Title>
  </div>
);

export default TopHeader;