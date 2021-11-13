import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="mt-3" htmlFor={name}><b>{label}</b></label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger py-1">{error}</div>}
    </div>
  );
};

export default Input;
