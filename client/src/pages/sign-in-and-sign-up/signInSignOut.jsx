import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/signUp";

import { SignInAndSignUpContainer } from "./signInSignOutStyles.js";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
