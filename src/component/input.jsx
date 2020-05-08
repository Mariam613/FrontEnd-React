import React from "react";
const Input = props => {
  const { onChange, error, value, name, label } = props;
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        //type="text"
        // autoFocus
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
