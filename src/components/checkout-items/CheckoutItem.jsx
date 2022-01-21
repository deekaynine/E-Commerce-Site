import React from "react";

import { connect } from "react-redux";
import {
  deleteItem,
  addItem,
  removeItemArrow,
} from "../../redux/cart/cartActions";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItemArrow }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemArrow(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemArrow: (item) => dispatch(removeItemArrow(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
