import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Paragraph } from "../../components";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CARD_ELEMENT_OPTIONS } from "../../utils/checkout";

const PUBLISHABLE_KEY = process.env.REACT_APP_PUBLISHABLE_KEY;

const stripePromise = loadStripe(PUBLISHABLE_KEY, {
  //stripeAccount: "{{CONNECTED_STRIPE_ACCOUNT_ID}}",
});

const CheckoutForm = ({ handlePayment, token }) => {
  const stripe = useStripe();
  const elements = useElements();
  // handle error
  const [hasError, setHasError] = useState(null);

  // handle order/payment submission if user token
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) {
      setHasError("Please login to place order");
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      setHasError(result.error.message);
    } else {
      // Send the token to your server.

      //setPayId(result.token.id);
      handlePayment(result.token);
    }
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <Button
        width='100%'
        uppercase='uppercase'
        bg='var(--nice-yellow)'
        type='submit'
        disabled={!stripe}
      >
        pay with stripe
      </Button>

      {hasError && <Paragraph color='var(--nice-red)'>{hasError}</Paragraph>}
    </form>
  );
};

export const StripePayment = ({ handlePayment, token }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm handlePayment={handlePayment} token={token} />
  </Elements>
);
