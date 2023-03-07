import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        //ref={this.username}
        className="form-control"
        id={props.name}
      />
      {props.errors && <div className="alert alert-danger">{props.errors}</div>}
    </div>
  );
};

export default Input;
