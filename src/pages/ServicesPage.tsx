import { Typography, Card, Row, Col } from 'antd';
import styles from '../styles/pages/ServicesPage.module.scss';

const { Title, Paragraph } = Typography;

function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <Title level={2} className={styles.pageTitle}>Our Services</Title>
      <div className={styles.servicesGrid}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card title="Service 1" bordered={false}>
              <Paragraph>Description of service 1</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Service 2" bordered={false}>
              <Paragraph>Description of service 2</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Service 3" bordered={false}>
              <Paragraph>Description of service 3</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Service 4" bordered={false}>
              <Paragraph>Description of service 4</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Service 5" bordered={false}>
              <Paragraph>Description of service 5</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Service 6" bordered={false}>
              <Paragraph>Description of service 6</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ServicesPage;
