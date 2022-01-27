import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCart } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

const cartIcon = ({ toggleCart, itemCount }) => {
  return (
    <CartContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

//state comes from the whole reducer state
//memoization
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
