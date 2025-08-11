import { Button, Row, Col, Card, Typography, Form, Input, Select, DatePicker, Avatar } from 'antd';
import { PhoneOutlined, CalendarOutlined, HeartOutlined, TeamOutlined, ManOutlined, WomanOutlined, StarFilled } from '@ant-design/icons';
import { Dayjs } from 'dayjs';
import { useLanguage } from '../hooks/useLanguage';
import styles from '../styles/pages/SpaHomePage.module.scss';

const { Title, Paragraph } = Typography;

interface BookingFormValues {
  name: string;
  phone: string;
  service: string;
  date: Dayjs;
}

interface SpaHomePageProps {
  onNavigate?: (page: 'select-technician') => void;
}

function SpaHomePage({ onNavigate }: SpaHomePageProps = {}) {
  const { translations } = useLanguage();
  
  const services = [
    {
      id: 1,
      title: translations.menMassage,
      description: translations.menMassageDesc,
      image: 'src/assets/image/homepage/gentleman-massage.jpg',
      icon: <ManOutlined />,
      link: '/services/men'
    },
    {
      id: 2,
      title: translations.womenMassage,
      description: translations.womenMassageDesc,
      image: 'src/assets/image/homepage/lady-massage.jpg',
      icon: <WomanOutlined />,
      link: '/services/women'
    },
    {
      id: 3,
      title: translations.coupleMassage,
      description: translations.coupleMassageDesc,
      image: 'src/assets/image/homepage/couple-massage.jpg',
      icon: <TeamOutlined />,
      link: '/services/group'
    },
    {
      id: 4,
      title: translations.familyMassage,
      description: translations.familyMassageDesc,
      image: 'src/assets/image/homepage/family-massage.jpg',
      icon: <HeartOutlined />,
      link: '/services/family'
    }
  ];

  const onBookingSubmit = (values: BookingFormValues) => {
    console.log('Quick booking:', values);
  };

  const handleServiceClick = (serviceId: number) => {
    console.log('Service clicked:', serviceId);
    if (onNavigate) {
      onNavigate('select-technician');
    }
  };

  return (
    <div className={styles.spaHomePage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <Title className={styles.heroTitle}>
            {translations.heroTitle}
          </Title>
          <Paragraph className={styles.heroSubtitle}>
            {translations.heroSubtitle}
          </Paragraph>
          <Button 
            type="primary" 
            size="large" 
            className={styles.bookingBtn}
            icon={<CalendarOutlined />}
          >
            {translations.bookNow}
          </Button>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            {translations.experienceTitle}
          </Title>
          <Paragraph className={styles.introText}>
            {translations.experienceDescription}
          </Paragraph>
        </div>
      </section>

      {/* Main Services */}
      <section className={styles.mainServices}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            {translations.mainServicesTitle}
          </Title>
          <Row gutter={[24, 24]} style={{ alignItems: 'stretch' }}>
            {services.map((service) => (
              <Col xs={24} sm={12} lg={6} key={service.id} style={{ display: 'flex' }}>
                <Card
                  hoverable
                  className={styles.serviceCard}
                  style={{ width: '100%' }}
                  cover={
                    <div className={styles.serviceImageWrapper}>
                      <img src={service.image} alt={service.title} />
                      <div className={styles.serviceIcon}>{service.icon}</div>
                    </div>
                  }
                  actions={[
                    <Button 
                      type="primary" 
                      ghost 
                      style={{ width: '80%', margin: '0 auto' }}
                      onClick={() => handleServiceClick(service.id)}
                    >
                      {translations.viewDetails}
                    </Button>
                  ]}
                >
                  <Card.Meta
                    title={service.title}
                    description={service.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Promotions */}
      <section className={styles.promotions}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            {translations.specialOffersTitle}
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card className={styles.promoCard}>
                <Title level={4} style={{ color: 'white' }}>
                  {translations.coupleCombo}
                </Title>
                <Paragraph style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {translations.coupleComboDesc}
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className={styles.promoCard}>
                <Title level={4} style={{ color: 'white' }}>
                  {translations.vipMember}
                </Title>
                <Paragraph style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {translations.vipMemberDesc}
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle} style={{ color: '#8B5E3C' }}>
            {translations.customerReviewsTitle}
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card 
                className={styles.testimonialCard}
                style={{ 
                  backgroundColor: '#F8F4F0', 
                  border: '2px solid #C19A6B',
                  boxShadow: '0 8px 24px rgba(139, 94, 60, 0.15)'
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <Avatar size={64} style={{ backgroundColor: '#C19A6B', color: '#F8F4F0' }}>
                    L
                  </Avatar>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <StarFilled key={i} style={{ color: '#C19A6B', fontSize: '16px', marginRight: '4px' }} />
                  ))}
                </div>
                <Paragraph style={{ 
                  fontStyle: 'italic', 
                  marginBottom: '16px',
                  color: '#444444',
                  fontSize: '15px'
                }}>
                  "{translations.testimonial1}"
                </Paragraph>
                <Title level={5} style={{ margin: 0, color: '#8B5E3C' }}>
                  Linh Nguyen
                </Title>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card 
                className={styles.testimonialCard}
                style={{ 
                  backgroundColor: '#F8F4F0', 
                  border: '2px solid #C19A6B',
                  boxShadow: '0 8px 24px rgba(139, 94, 60, 0.15)'
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <Avatar size={64} style={{ backgroundColor: '#A1B79F', color: '#F8F4F0' }}>
                    M
                  </Avatar>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <StarFilled key={i} style={{ color: '#C19A6B', fontSize: '16px', marginRight: '4px' }} />
                  ))}
                </div>
                <Paragraph style={{ 
                  fontStyle: 'italic', 
                  marginBottom: '16px',
                  color: '#444444',
                  fontSize: '15px'
                }}>
                  "{translations.testimonial2}"
                </Paragraph>
                <Title level={5} style={{ margin: 0, color: '#8B5E3C' }}>
                  Mai Tran
                </Title>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card 
                className={styles.testimonialCard}
                style={{ 
                  backgroundColor: '#F8F4F0', 
                  border: '2px solid #C19A6B',
                  boxShadow: '0 8px 24px rgba(139, 94, 60, 0.15)'
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <Avatar size={64} style={{ backgroundColor: '#8B5E3C', color: '#F8F4F0' }}>
                    H
                  </Avatar>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <StarFilled key={i} style={{ color: '#C19A6B', fontSize: '16px', marginRight: '4px' }} />
                  ))}
                </div>
                <Paragraph style={{ 
                  fontStyle: 'italic', 
                  marginBottom: '16px',
                  color: '#444444',
                  fontSize: '15px'
                }}>
                  "{translations.testimonial3}"
                </Paragraph>
                <Title level={5} style={{ margin: 0, color: '#8B5E3C' }}>
                  Huy Le
                </Title>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className={styles.quickBooking}>
        <div className={styles.container}>
          <Title level={2} className={styles.sectionTitle}>
            {translations.quickBookingTitle}
          </Title>
          <div className={styles.bookingForm}>
            <Form
              layout="vertical"
              onFinish={onBookingSubmit}
            >
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={translations.fullName}
                    name="name"
                    rules={[{ required: true, message: `Vui lòng nhập ${translations.fullName.toLowerCase()}!` }]}
                  >
                    <Input placeholder={`Nhập ${translations.fullName.toLowerCase()}`} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={translations.phoneNumber}
                    name="phone"
                    rules={[{ required: true, message: `Vui lòng nhập ${translations.phoneNumber.toLowerCase()}!` }]}
                  >
                    <Input placeholder={`Nhập ${translations.phoneNumber.toLowerCase()}`} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={translations.selectService}
                    name="service"
                    rules={[{ required: true, message: `Vui lòng ${translations.selectService.toLowerCase()}!` }]}
                  >
                    <Select placeholder={translations.selectService}>
                      {services.map(service => (
                        <Select.Option key={service.id} value={service.title}>
                          {service.title}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={translations.selectDate}
                    name="date"
                    rules={[{ required: true, message: `Vui lòng ${translations.selectDate.toLowerCase()}!` }]}
                  >
                    <DatePicker style={{ width: '100%' }} placeholder={translations.selectDate} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large" 
                  block
                  icon={<PhoneOutlined />}
                >
                  {translations.sendBookingRequest}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpaHomePage;
