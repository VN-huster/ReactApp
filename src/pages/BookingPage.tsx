import { Typography, Form, Input, Button, DatePicker, Select } from 'antd';
import { Dayjs } from 'dayjs';
import styles from '../styles/pages/BookingPage.module.scss';

const { Title } = Typography;
const { TextArea } = Input;

interface BookingFormValues {
  name: string;
  email: string;
  service: string;
  date: Dayjs;
  notes?: string;
}

function BookingPage() {
  const onFinish = (values: BookingFormValues) => {
    console.log('Booking submitted:', values);
  };

  return (
    <div className={styles.bookingPage}>
      <div className={styles.bookingContainer}>
        <Title level={2} className={styles.pageTitle}>Book an Appointment</Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Service"
            name="service"
            rules={[{ required: true, message: 'Please select a service!' }]}
          >
            <Select>
              <Select.Option value="service1">Service 1</Select.Option>
              <Select.Option value="service2">Service 2</Select.Option>
              <Select.Option value="service3">Service 3</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Preferred Date"
            name="date"
            rules={[{ required: true, message: 'Please select a date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="Additional Notes"
            name="notes"
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Book Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default BookingPage;
