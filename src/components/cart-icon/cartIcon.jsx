import React from "react";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cartActions";

import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cartIcon.scss";

const cartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

//state comes from the whole reducer state
//memoization
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
