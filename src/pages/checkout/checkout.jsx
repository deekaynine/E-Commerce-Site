import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeButton from "../../components/stripe-button/stripeButton";

import CheckoutItem from "../../components/checkout-items/CheckoutItem";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <br />
      <div className="test-warning">
        *PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENTS*
        <br />
        4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
      </div>
      <br />
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
