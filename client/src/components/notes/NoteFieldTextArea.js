import React from 'react';

export default ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <textarea className="materialize-textarea" {...input} />
    <div className="red-text error-message">
      {touched && error}
    </div>
  </div>
);
