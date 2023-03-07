import React, { Component } from "react";

const DropDown = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <select
        className="form-control"
        name={props.name}
        id={props.name}
        onChange={props.handleChange}
      >
        <option value="default"></option>
        {props.options.map((g) => {
          return (
            <option key={g._id} value={g._id}>
              {g.name}
            </option>
          );
        })}
      </select>
      {props.errors && <div className="alert alert-danger">{props.errors}</div>}
    </div>
  );
};

export default DropDown;
