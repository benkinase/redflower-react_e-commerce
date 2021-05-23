export const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      marginBottom: "10px",
      padding: "10px",
      color: "#303238",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};
export const checkoutUser = [
  { id: 1, name: "first_name", placeholder: "First name" },
  { id: 2, name: "last_name", placeholder: "Last name" },
  { id: 3, name: "email", placeholder: "Email" },
  { id: 4, name: "phone", placeholder: "Phone number" },
  { id: 5, name: "address", placeholder: "Address" },
  { id: 6, name: "zipcode", placeholder: "Zipcode" },
  { id: 7, name: "city", placeholder: "City" },
];
export const payTypes = [
  { id: 1, type: "Stripe" },
  { id: 2, type: "Paypal" },
];
