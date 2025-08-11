import React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


interface LoginFormProps {
  onLogin: (values: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => (
  <Form
    name="login"
    onFinish={onLogin}
    layout="vertical"
  >
    <Form.Item
      name="email"
      label="Email"
      rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
    >
      <Input
        prefix={<UserOutlined />}
        placeholder="admin"
      />
    </Form.Item>

    <Form.Item
      name="password"
      label="Mật khẩu"
      rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="******"
      />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" block>
        Đăng nhập
      </Button>
    </Form.Item>
  </Form>
);

export default LoginForm;