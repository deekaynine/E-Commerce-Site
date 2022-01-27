import React from "react";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cartIcon";
import CartDropDown from "../cartDropDown/cartDropDown";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ hidden, currentUser }) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/shop">CONTACT</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={() => auth.signOut()}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropDown />}
      </HeaderContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
