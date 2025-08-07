import { Row, Col, Pagination } from 'antd';
import { useState } from 'react';
import PersonCard, {type Person } from '../components/PersonCard';

const PAGE_SIZE = 3;

function HomePage() {
  const people: Person[] = [
    { id: 1, name: "John Doe", age: 23, height: "6'5\"", image: "src/assets/anh1a.jpg" },
    { id: 2, name: "Jane Smith", age: 22, height: "6'6\"", image: "src/assets/anh-gai-xinh-02.jpg" },
    { id: 3, name: "Mike Johnson", age: 24, height: "6'2\"", image: "src/assets/anh-gai-xinh-04.jpg" },
    { id: 4, name: "Sarah Wilson", age: 24, height: "6'8\"", image: "src/assets/anh-gai-xinh-05.jpg" },
    { id: 5, name: "David Brown", age: 23, height: "7'11\"", image: "src/assets/anh-gai-xinh-06.jpg" },
    { id: 6, name: "Emily Davis", age: 20, height: "6'5\"", image: "src/assets/anh-gai-xinh-14-1.jpg" },
    { id: 7, name: "Emily Davis", age: 20, height: "6'5\"", image: "src/assets/anh-gai-xinh-16-1.jpg" },
    { id: 8, name: "Emily Davis", age: 21, height: "6'5\"", image: "src/assets/anh-gai-xinh-46.jpg" },
  ];

  const [current, setCurrent] = useState(1);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  const handleChange = (personId: number) => (checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [personId]: checked
    }));
  };

  // Pagination logic
  const startIdx = (current - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const currentPeople = people.slice(startIdx, endIdx);

  return (
    <div style={{ padding: '20px 0', width: '100vw' }}>
      <Row gutter={[20, 20]} justify="center">
        {currentPeople.map((person) => (
          <Col xs={24} sm={12} md={8} key={person.id}>
            <PersonCard
              person={person}
              checked={checkedItems[person.id] || false}
              onCheck={handleChange(person.id)}
            />
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Pagination
          current={current}
          pageSize={PAGE_SIZE}
          total={people.length}
          onChange={setCurrent}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

export default HomePage;