import React, { Component } from "react";
import Input from "./input";
import DropDown from "./dropDown";
//import { Joi } from "joi-browser"; <= Doesnt work
const Joi = require("joi-browser");

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateForm = (input) => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;

    // const objj = result.error.details.map((c) => {
    //   const eObj = [c.path[0], c.message];
    //   return eObj;
    // });
    // objj.map((c) => {
    //   errors[c[0]] = c[1];
    // });

    // const { data } = this.state;
    // const errors = {};

    // if (data.username.trim() === "")
    //   errors.username = "Username is required";
    // if (data.password.trim() === "") errors.password = "Password is reuired";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateInput = (input) => {
    const item = { [input.name]: input.value };
    const schema = {
      [input.name]: this.schema[input.name],
    };
    const result = Joi.validate(item, schema);

    if (!result.error) return null;
    return result.error.details[0].message;
    // if (input.name === "username") {
    //   if (input.value.trim() === "") return "Username is required.";
    // }
    // if (input.name === "password") {
    //   if (input.value.trim() === "") return "Password is required.";
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();

    this.setState({
      //This is to make sure that we do not see the error in clg: cannot read username of null
      errors: errors || {},
    });

    this.doSubmit();
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;

    const errors = { ...this.state.errors };
    const errorMessage = this.validateInput(e.currentTarget);
    if (errorMessage) {
      errors[e.currentTarget.name] = errorMessage;
    } else delete errors[e.currentTarget.name];

    this.setState({
      data,
      errors,
    });
  };

  renderButton(label) {
    return (
      <button disabled={this.validateForm()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        handleChange={this.handleChange}
        errors={errors[name]}
      />
    );
  }

  renderDropDown(name, label, options) {
    const { data, errors } = this.state;
    return (
      <DropDown
        name={name}
        value={data[name]}
        error={errors[name]}
        label={label}
        options={options}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Form;
