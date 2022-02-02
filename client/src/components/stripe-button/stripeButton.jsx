import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KM6YxGwVpK4Qm1eQ3TXszmzGO0EMXC5tyamsS9r6QQ4t0QeUde15F9hxa7pRLSiXZpZev0pGS8aVFCn780cO6lL00i43WbLmr";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
        console.log("payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment.  Please make Sure you used the provided credentials"
        );
      });
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
