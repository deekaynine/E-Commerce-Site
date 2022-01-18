import React from "react";

import CustomButton from "../custom-button/custom-button";

import "./cartDropDown.scss";

const cartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default cartDropDown;
