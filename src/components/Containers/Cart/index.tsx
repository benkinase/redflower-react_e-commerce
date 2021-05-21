import styled from "styled-components";

export const CartContainer = styled.div`
  width: 90%;
  margin: 10rem auto;
  .table__container,
  .table {
    width: 100%;
  }
  strong {
    font-weight: 800;
    font-size: 16px;
  }
  .cart__buttons__container {
    margin: 20px auto;
  }
`;
export const CartItemContainer = styled.tr`
  .item-count {
    padding: 0 5px;
  }
  .item-name {
    color: var(--tertiary);
    transition: var(--mainTransition);
    padding: 2px;
    &:hover {
      background-color: var(--nice-gray);
      opacity: 0.85;
    }
  }
  .item-delete-btn {
    border-radius: 50%;
    box-shadow: var(--lightShadow);
    border: none;
    padding: 0px 6px;
    background-color: var(--nice-gray);
    &:hover {
      background-color: var(--nice-red);
      opacity: 0.85;
    }
  }
  button {
    transition: var(--mainTransition);
    &:hover {
      background-color: var(--nice-gray);
      opacity: 0.85;
    }
    &:focus {
      outline: none;
    }
  }
`;
export const CheckoutContainer = styled.div`
  margin: 10rem auto;
  width: 90%;
`;
export const ShippingContainer = styled.div`
  width: 90%;
  margin: auto;
  .shipping {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    .left {
      margin-bottom: 20px;
    }
  }
  button {
    margin: 20px auto;
  }
  select {
    padding: 5px;
    margin: 10px;
  }
  @media screen and (min-width: 780px) {
    .shipping {
      grid-template-columns: 2fr 1.5fr;
    }
  }
`;
