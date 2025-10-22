import React from 'react';
import './Filter.css'; 

export default function Filter({ filters }) {
  return (
    <div className="filter-panel">
      {filters.map((filter) => (
        <div key={filter.label} className="filter-group">
          <label className="filter-label">{filter.label}</label>
          <select
            value={filter.selected}
            onChange={(e) => filter.onChange(e.target.value)}
            className="filter-select"
          >
            <option value="All">All</option>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
