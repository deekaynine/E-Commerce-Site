import { userConstType } from "./userConst";

export const setCurrentUser = (user) => ({
  type: userConstType.SET_CURRENT_USER,
  payload: user,
});
