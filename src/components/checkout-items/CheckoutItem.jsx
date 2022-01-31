import React from "react";

import { connect } from "react-redux";
import {
  deleteItem,
  addItem,
  removeItemArrow,
} from "../../redux/cart/cartActions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./CheckoutItemStyles.jsx";

const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItemArrow }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItemArrow(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => deleteItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemArrow: (item) => dispatch(removeItemArrow(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
