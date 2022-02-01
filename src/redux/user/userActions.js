import userConstType from "./userConst";

export const googleSignInStart = () => ({
  type: userConstType.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userConstType.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userConstType.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userConstType.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userConstType.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userConstType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userConstType.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userConstType.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userInfo) => ({
  type: userConstType.SIGN_UP_START,
  payload: userInfo,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userConstType.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: userConstType.SIGN_UP_FAILRUE,
  payload: error,
});
