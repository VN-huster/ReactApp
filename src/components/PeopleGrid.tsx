import React from 'react';
import { Row, Col } from 'antd';
import PersonCard, { type Person } from './PersonCard';

interface PeopleGridProps {
  people: Person[];
  checkedItems: { [key: number]: boolean };
  onCheckChange: (personId: number) => (checked: boolean) => void;
}

const PeopleGrid: React.FC<PeopleGridProps> = ({
  people,
  checkedItems,
  onCheckChange,
}) => {
  return (
    <Row gutter={[20, 20]} justify="center">
      {people.map((person) => (
        <Col xs={24} sm={12} md={8} key={person.id}>
          <PersonCard
            person={person}
            checked={checkedItems[person.id] || false}
            onCheck={onCheckChange(person.id)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PeopleGrid;
