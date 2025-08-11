import { Typography, Card, Row, Col } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styles from '../styles/pages/ContactPage.module.scss';

const { Title, Paragraph } = Typography;

function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <Title level={2} className={styles.pageTitle}>Contact Us</Title>
      <div className={styles.contactGrid}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card>
              <PhoneOutlined style={{ fontSize: '24px', marginBottom: '16px' }} />
              <Title level={4}>Phone</Title>
              <Paragraph>+1 (555) 123-4567</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <MailOutlined style={{ fontSize: '24px', marginBottom: '16px' }} />
              <Title level={4}>Email</Title>
              <Paragraph>contact@example.com</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <EnvironmentOutlined style={{ fontSize: '24px', marginBottom: '16px' }} />
              <Title level={4}>Address</Title>
              <Paragraph>123 Main St, City, State 12345</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactPage;
