import React from "react";

const ConfirmPassword = ({ name, label, error, submitted, ...rest }) => {
  return (
    <div className="form-group">
      <label className="mt-3" htmlFor={name}><b>{label}</b></label>
      <input {...rest} type="password" name={name} id={name} className="form-control" />
      {error && submitted && <div className="alert alert-danger py-1">{error}</div> }
    </div>
  );
};

export default ConfirmPassword;
