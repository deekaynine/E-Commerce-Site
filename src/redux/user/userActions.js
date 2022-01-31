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
