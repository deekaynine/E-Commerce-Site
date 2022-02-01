import CartActionConst from "./cartConst";
import { addItemToCart, removeItemArrow } from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionConst.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionConst.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionConst.REMOVE_ITEM_ARROW:
      return {
        ...state,
        cartItems: removeItemArrow(state.cartItems, action.payload),
      };

    case CartActionConst.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CartActionConst.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
