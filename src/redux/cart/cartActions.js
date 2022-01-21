import CartActionConst from "./cartConst";

export const toggleCart = () => ({
  type: CartActionConst.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: CartActionConst.ADD_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: CartActionConst.DELETE_ITEM,
  payload: item,
});

export const removeItemArrow = (item) => ({
  type: CartActionConst.REMOVE_ITEM_ARROW,
  payload: item,
});
