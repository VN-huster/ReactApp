// src/pages/LoginPage.tsx

import React from 'react';
import { Card, Typography, message } from 'antd';
import LoginForm from '../components/LoginForm';
import styles from '../styles/pages/LoginPage.module.scss';

const { Title } = Typography;

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const handleLogin = (values: { email: string; password: string }) => {
    const { email, password } = values;
    if (email === 'admin' && password === '123456') {
      message.success('Đăng nhập thành công!');
      onLoginSuccess();
    } else {
      message.error('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };

  return (
    <div className={styles.loginPageWrapper}>
      <Card className={styles.loginCard} variant="borderless">
        <Title level={3} className={styles.loginTitle}>Đăng nhập</Title>
        <LoginForm onLogin={handleLogin} />
        <div className={styles.loginFooter}>
          <a href="#" className={styles.loginLink}>
            Quên mật khẩu?
          </a>
        </div>
        <div className={styles.loginFooter}>
          Chưa có tài khoản?
          <a href="#" className={styles.loginLink} style={{ marginLeft: '0.25rem' }}>
            Đăng ký
          </a>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
