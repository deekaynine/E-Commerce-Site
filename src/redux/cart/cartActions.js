import CartActionConst from "./cartConst";

export const toggleCart = () => ({
  type: CartActionConst.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: CartActionConst.ADD_ITEM,
  payload: item,
});
