import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelector";
import { checkUserSession } from "./redux/user/userActions";

import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";
import { GlobalStyle } from "./globalStyles";

//chunking/splitting code for better performance
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component.jsx"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/signInSignOut.jsx")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            {currentUser ? (
              <Route path="/signin" element={<Navigate to="/" />} />
            ) : (
              <Route path="/signin" element={<SignInAndSignUpPage />} />
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
