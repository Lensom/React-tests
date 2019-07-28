import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() {
    {
      return (
        <div className="btn-group">
          <button type="button" className="bnt btn-info">All</button>
          <button type="button" className="bnt btn-outline-secondary">Active</button>
          <button type="button" className="bnt btn-outline-secondary">Done</button>
        </div>

      );
    }
  }
}
