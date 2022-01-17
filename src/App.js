import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";

import { setCurrentUser } from "./redux/user/userActions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  //userAuth object comes from firebase auth subscription
  //userAuth will persist until signed out
  componentDidMount() {
    const { setCurrentUser } = this.props;
    //unsubscribefromauth gives back a function to unsub in the unmount method
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
      setCurrentUser({ userAuth });
    });
  }

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
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<SignInAndSignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

//dispatches
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
