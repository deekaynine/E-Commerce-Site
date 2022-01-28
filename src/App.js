import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import CheckoutPage from "./pages/checkout/checkout";
import Header from "./components/header/header.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";

import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelector";

class App extends React.Component {
  unsubscribeFromAuth = null;
  //snapshot automatically comes with the userref in firebase
  //userAuth object comes from firebase auth subscription
  //userAuth will persist until signed out
  componentDidMount() {
    const { setCurrentUser } = this.props;
    //when unsubscribed it listens to auth changes, firebase always gives back a ref object at a location even if if doesn't exists
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //logging userAuth data to database
        const userRef = await createUserProfileDocument(userAuth);

        //setting userAuth data to state redux
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      //if null userAuth
      setCurrentUser(userAuth);
    });
  }

  //gets rid of listener
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {this.props.currentUser ? (
              <Route path="/signin" element={<Navigate to="/" />} />
            ) : (
              <Route path="/signin" element={<SignInAndSignUpPage />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

//dispatches
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
