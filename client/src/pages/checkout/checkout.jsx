import React from "react";
import { useSelector } from "react-redux";

import StripeButton from "../../components/stripe-button/stripeButton";

import CheckoutItem from "../../components/checkout-items/CheckoutItem";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkoutStyles";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>Total: ${total}</span>
      </TotalContainer>
      <br />
      <WarningContainer>
        *PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENTS*
        <br />
        4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
      </WarningContainer>
      <br />
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
