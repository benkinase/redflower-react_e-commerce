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
//const card_string = process.env.REACT_APP_PUBLISHABLE_KEY;
const PUBLISHABLE_KEY =
  "pk_test_51IOdBIENNyF8krOvOfTQmAYOwPC1s5Qwep53vxXJTQ5rpZNgrI1WgjGm6RYyo6YGmZG0DQjPQZVp6akehQ65NbJQ002wE0M1lN";
const stripePromise = loadStripe(PUBLISHABLE_KEY, {
  //stripeAccount: "{{CONNECTED_STRIPE_ACCOUNT_ID}}",
});

const CheckoutForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  //const [payId, setPayId] = React.useState();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      setError(result.error.message);
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
      {error && <Paragraph color='var(--nice-red)'>{error}</Paragraph>}
    </form>
  );
};

export const StripePayment = ({ handlePayment }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm handlePayment={handlePayment} />
  </Elements>
);
