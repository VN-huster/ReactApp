import React from 'react';
import { Card, Checkbox } from 'antd';
import styles from '../styles/components/PersonCard.module.scss';

const { Meta } = Card;

export interface Person {
  id: number;
  name: string;
  age: number;
  height: string;
  image: string;
}

interface PersonCardProps {
  person: Person;
  checked: boolean;
  onCheck: (checked: boolean) => void;
}

const PersonCard: React.FC<PersonCardProps> = ({ person, checked, onCheck }) => (
  <Card
    className={styles.personCard}
    hoverable
    cover={
      <div className={styles.personImageCell}>
        <img
          alt={person.name}
          src={person.image}
          className={styles.personImage}
        />
      </div>
    }
    actions={[
      <Checkbox checked={checked} onChange={e => onCheck(e.target.checked)}>
        Select
      </Checkbox>
    ]}
  >
    <Meta
      className={styles.personMeta}
      title={<div className={styles.personName}>{person.name}</div>}
      description={
        <div>
          <div className={styles.personInfo}><strong>Age:</strong> {person.age}</div>
          <div className={styles.personInfo}><strong>Height:</strong> {person.height}</div>
        </div>
      }
    />
  </Card>
);

export default PersonCard;