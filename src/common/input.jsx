import React from "react";

const Input = ({ name, label, type, ...rest }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        className="form-group"
        type={type}
        placeholder={`Please enter the ${label}`}
      />
    </div>
  );
};

export default Input;
