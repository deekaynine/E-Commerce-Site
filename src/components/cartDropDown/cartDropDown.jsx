import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCart } from "../../redux/cart/cartActions";

import CartItem from "../cart-item/cartItem";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cartDropDownStyles";

const CartDropDown = ({ cartItems, dispatch }) => {
  let navigate = useNavigate();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer className="empty-message">
            Your cart is empty
          </EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

//selector memoization
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

//if not provided with 2nd argument connect provides a dispatch prop automatically
export default connect(mapStateToProps)(CartDropDown);
