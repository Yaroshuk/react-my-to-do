import React from 'react';
import FilterList from 'components/filter/FilterList';

const Container = ({ onFilterChange, activeFilter }) => {
  return (
    <FilterList
      onFilterChange={onFilterChange}
      activeFilter={activeFilter}
    />
  );
};

export default Container;