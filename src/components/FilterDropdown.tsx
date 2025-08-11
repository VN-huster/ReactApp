import React from 'react';
import { Select } from 'antd';

interface FilterDropdownProps {
  selectedFilter: string;
  onFilterChange: (value: string) => void;
  dropdownOpen: boolean;
  onDropdownOpenChange: (open: boolean) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  selectedFilter,
  onFilterChange,
  dropdownOpen,
  onDropdownOpenChange,
}) => {
  const filterOptions = [
    { value: 'all', label: 'All People' },
    { value: 'young', label: 'Young (18-22)' },
    { value: 'adult', label: 'Adult (23-25)' },
    { value: 'john', label: 'Name: John' },
    { value: 'emily', label: 'Name: Emily' },
  ];

  return (
    <Select
      placeholder="Filter people..."
      style={{ width: 200 }}
      value={selectedFilter}
      onChange={onFilterChange}
      options={filterOptions}
      showSearch
      open={dropdownOpen}
      onMouseEnter={() => onDropdownOpenChange(true)}
      onMouseLeave={() => onDropdownOpenChange(false)}
      onDropdownVisibleChange={(visible) => {
        if (!visible) onDropdownOpenChange(false);
      }}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default FilterDropdown;
