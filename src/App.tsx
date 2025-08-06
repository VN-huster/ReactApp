import { Row, Col, Card, Checkbox } from 'antd';  // Import Ant Design components
import { useState } from 'react';                 // Import useState hook from React

const { Meta } = Card;  // Destructure Meta component from Card for easy use

function App() {
  // Define an array of people with their info
  const people = [
    { id: 1, name: "John Doe", age: 25, height: "5'10\"", image: "src/assets/anh1a.jpg" },
    { id: 2, name: "Jane Smith", age: 28, height: "5'6\"", image: "src/assets/anh-gai-xinh-02.jpg" },
    { id: 3, name: "Mike Johnson", age: 32, height: "6'2\"", image: "src/assets/anh-gai-xinh-04.jpg" },
    { id: 4, name: "Sarah Wilson", age: 24, height: "5'8\"", image: "src/assets/anh-gai-xinh-05.jpg" },
    { id: 5, name: "David Brown", age: 29, height: "5'11\"", image: "src/assets/anh-gai-xinh-06.jpg" },
    { id: 6, name: "Emily Davis", age: 26, height: "5'5\"", image: "src/assets/anh-gai-xinh-14-1.jpg" },
    { id: 7, name: "Emily Davis", age: 26, height: "5'5\"", image: "src/assets/anh-gai-xinh-16-1.jpg" },
    { id: 8, name: "Emily Davis", age: 26, height: "5'5\"", image: "src/assets/anh-gai-xinh-46.jpg" },
  ];

  // Define state to track which people are checked
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  // Handle checkbox change for each person
  const handleChange = (personId: number) => (checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [personId]: checked  // Update the checked status for this person
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Create a responsive grid layout */}
      <Row gutter={[20, 20]}>
        {people.map((person) => (
          <Col
            xs={24} sm={12} md={8} lg={6} xl={4}  // Responsive grid: 1 to 6 columns depending on screen size
            key={person.id}
          >
            <Card
              hoverable  // Card becomes interactive on hover
              cover={
                <img
                  alt={person.name}
                  src={person.image}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'  // Ensures the image covers the area properly
                  }}
                />
              }
              actions={[
                // Checkbox placed in the card's footer area
                <Checkbox
                  checked={checkedItems[person.id] || false}
                  onChange={(e) => handleChange(person.id)(e.target.checked)}
                >
                  Select
                </Checkbox>
              ]}
            >
              {/* Meta section shows name, age, and height */}
              <Meta
                title={person.name}
                description={
                  <div>
                    <p><strong>Age:</strong> {person.age}</p>
                    <p><strong>Height:</strong> {person.height}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
