import React from 'react';
import './style.css';

const PageHeader = ({ title, subtitle, className = 'page-header' }) => (
  <div className={className}>
    <div className="page-title">
      <p>{title}</p>
    </div>
    <div className="page-subtitle">
      <p>{subtitle}</p>
    </div>
  </div>
);

export default PageHeader;