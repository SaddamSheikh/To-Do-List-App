import React from 'react';

interface TaskFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  categoryFilter: string;
  setCategoryFilter: (categoryFilter: string) => void;
  categories: string[];
}

const TaskFilter: React.FC<TaskFilterProps> = ({
  filter,
  setFilter,
  categoryFilter,
  setCategoryFilter,
  categories
}) => {
  return (
    <div className="filters-container">
      <div className="filter-group">
        <label>Status:</label>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label>Category:</label>
        <select 
          value={categoryFilter} 
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="filter-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;