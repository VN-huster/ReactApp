import React from 'react';
import { Pagination } from 'antd';

interface PeoplePaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

const PeoplePagination: React.FC<PeoplePaginationProps> = ({
  current,
  pageSize,
  total,
  onChange,
}) => {
  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
      showSizeChanger={false}
    />
  );
};

export default PeoplePagination;
