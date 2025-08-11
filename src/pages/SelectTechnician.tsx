import { useState } from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { type Person } from '../components/PersonCard';

const PAGE_SIZE = 3;

function SelectTechnician() {
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
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (personId: number) => (checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [personId]: checked
    }));
  };

  // Filter people based on selected filter
  const getFilteredPeople = () => {
    switch (selectedFilter) {
      case 'young':
        return people.filter(person => person.age >= 18 && person.age <= 22);
      case 'adult':
        return people.filter(person => person.age >= 23 && person.age <= 25);
      case 'john':
        return people.filter(person => person.name.toLowerCase().includes('john'));
      case 'emily':
        return people.filter(person => person.name.toLowerCase().includes('emily'));
      default:
        return people;
    }
  };

  const filteredPeople = getFilteredPeople();

  // Pagination logic
  const startIdx = (current - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const currentPeople = filteredPeople.slice(startIdx, endIdx);

  // Reset pagination when filter changes
  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
    setCurrent(1); // Reset to first page
  };

  const handleDropdownOpenChange = (open: boolean) => {
    setDropdownOpen(open);
  };

  const handlePageChange = (page: number) => {
    setCurrent(page);
  };

  return (
    <HomeLayout
      people={people}
      filteredPeople={filteredPeople}
      currentPeople={currentPeople}
      checkedItems={checkedItems}
      selectedFilter={selectedFilter}
      dropdownOpen={dropdownOpen}
      current={current}
      pageSize={PAGE_SIZE}
      onFilterChange={handleFilterChange}
      onDropdownOpenChange={handleDropdownOpenChange}
      onCheckChange={handleChange}
      onPageChange={handlePageChange}
    />
  );
}

export default SelectTechnician;