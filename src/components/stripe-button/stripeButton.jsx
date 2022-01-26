import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KM6YxGwVpK4Qm1eQ3TXszmzGO0EMXC5tyamsS9r6QQ4t0QeUde15F9hxa7pRLSiXZpZev0pGS8aVFCn780cO6lL00i43WbLmr";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      Label="Pay Now"
      name="Clothing Brand"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
