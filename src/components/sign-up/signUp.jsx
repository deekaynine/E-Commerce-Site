import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input";
import CustomButtom from "../custom-button/custom-button";

import { signUpStart } from "../../redux/user/userActions.js";

import { SignUpContainer, SignUpTitle } from "./signUpStyles";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButtom type="submit">SIGN UP</CustomButtom>
        </form>
      </SignUpContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignUp);
