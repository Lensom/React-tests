import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="bnt btn-info">All</button>
      <button type="button" className="bnt btn-outline-secondary">Active</button>
      <button type="button" className="bnt btn-outline-secondary">Done</button>
    </div>

  );
}

export default ItemStatusFilter;