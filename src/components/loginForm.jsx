import React from "react";
import Form from "./common/form";
const Joi = require("joi-browser");

class LoginForm extends Form {
  /* Using Ref */
  // username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //Code to call the server can be added here
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
