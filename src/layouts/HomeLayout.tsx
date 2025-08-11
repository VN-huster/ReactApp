import React from 'react';
import FilterDropdown from '../components/FilterDropdown';
import PeopleGrid from '../components/PeopleGrid';
import PeoplePagination from '../components/PeoplePagination';
import { type Person } from '../components/PersonCard';
import styles from '../styles/pages/SelectTechnician.module.scss';

interface HomeLayoutProps {
  people: Person[];
  filteredPeople: Person[];
  currentPeople: Person[];
  checkedItems: { [key: number]: boolean };
  selectedFilter: string;
  dropdownOpen: boolean;
  current: number;
  pageSize: number;
  onFilterChange: (value: string) => void;
  onDropdownOpenChange: (open: boolean) => void;
  onCheckChange: (personId: number) => (checked: boolean) => void;
  onPageChange: (page: number) => void;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
  currentPeople,
  filteredPeople,
  checkedItems,
  selectedFilter,
  dropdownOpen,
  current,
  pageSize,
  onFilterChange,
  onDropdownOpenChange,
  onCheckChange,
  onPageChange,
}) => {
  return (
    <div className={styles.homePage}>
      {/* Filter Dropdown */}
      <div className={styles.filterSection}>
        <FilterDropdown
          selectedFilter={selectedFilter}
          onFilterChange={onFilterChange}
          dropdownOpen={dropdownOpen}
          onDropdownOpenChange={onDropdownOpenChange}
        />
      </div>

      {/* People Grid */}
      <div className={styles.gridSection}>
        <PeopleGrid
          people={currentPeople}
          checkedItems={checkedItems}
          onCheckChange={onCheckChange}
        />
      </div>

      {/* Pagination */}
      <div className={styles.paginationSection}>
        <PeoplePagination
          current={current}
          pageSize={pageSize}
          total={filteredPeople.length}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default HomeLayout;
