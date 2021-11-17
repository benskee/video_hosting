import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group mt-3">
      <label className='mt-3' htmlFor={name}>{<b>{label}</b>}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option>Choose...</option>
        {options.map(option => (
          <option key={option.name} value={option.name}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger py-1">{error}</div>}
    </div>
  );
};

export default Select;
