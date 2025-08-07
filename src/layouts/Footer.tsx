import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: React.FC = () => (
  <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>
    © {new Date().getFullYear()} My React App. All rights reserved.
  </Footer>
);

export default AppFooter;