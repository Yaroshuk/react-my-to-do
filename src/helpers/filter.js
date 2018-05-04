const getFilter = (filter) => {
  return { filter };
};

const filterModel = [
  getFilter('ALL'),
  getFilter('COMPLETED'),
  getFilter('UNCOMPLETED')
];

export const getFilterModel = () => filterModel;