import React from 'react';

export default ({ header, children, ...props }) =>
  <div className="col-sm-6">
    <p className="lead">{header}</p>
    {children}
  </div>
