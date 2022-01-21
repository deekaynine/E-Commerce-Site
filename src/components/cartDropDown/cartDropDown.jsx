import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCart } from "../../redux/cart/cartActions";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cartItem";

import "./cartDropDown.scss";

const CartDropDown = ({ cartItems, dispatch }) => {
  let navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

//selector memoization
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

//if not provided with 2nd argument connect provides a dispatch prop automatically
export default connect(mapStateToProps)(CartDropDown);
